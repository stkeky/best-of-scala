const assert = require('node:assert/strict');
const test = require('node:test');
const finalize = require('./finalize-weekly-update.cjs');

const repository = {owner: 'stkeky', repo: 'best-of-scala'};
const fullName = 'stkeky/best-of-scala';
const latest = '2026.10.15';
const previous = '2026.10.08';
const oldest = '2026.10.01';

function pull(number, version, extra = {}) {
  return {
    number, title: `Best-of update: ${version}`, state: 'open', draft: false,
    base: {ref: 'main'}, head: {ref: `update/${version}`, sha: version, repo: {full_name: fullName}},
    changed_files: 4, ...extra,
  };
}

function release(id, version, extra = {}) {
  return {id, tag_name: version, name: `Update: ${version}`, draft: true, prerelease: false, ...extra};
}

function fixture({pulls = [], releases = [], files, tagSha = latest, annotated = true,
  comparison = 'ahead', mergeResult = {merged: true}, publishError, currentPulls = {},
  currentReleases = {}} = {}) {
  const writes = [];
  const logs = [];
  const rest = {
    pulls: {
      list: async () => ({data: structuredClone(pulls)}),
      get: async ({pull_number}) => ({data: structuredClone(
        currentPulls[pull_number] || pulls.find((item) => item.number === pull_number))}),
      listFiles: async () => ({data: files || [
        {filename: 'README.md'}, {filename: 'latest-changes.md'},
        {filename: 'history/2026-10-15_changes.md'}, {filename: 'history/2026-10-15_projects.csv'},
      ]}),
      merge: async (params) => {
        writes.push(['merge', params]);
        return {data: mergeResult};
      },
      update: async (params) => { writes.push(['close', params]); },
    },
    repos: {
      listReleases: async () => ({data: structuredClone(releases)}),
      compareCommitsWithBasehead: async ({basehead}) => {
        assert.equal(basehead, `${tagSha}...main`);
        return {data: {status: comparison}};
      },
      updateRelease: async (params) => {
        writes.push(['publish', params]);
        if (publishError) throw new Error(publishError);
        return {data: {...releases.find((item) => item.id === params.release_id), draft: false}};
      },
      getRelease: async ({release_id}) => ({data: structuredClone(
        currentReleases[release_id] || releases.find((item) => item.id === release_id))}),
      deleteRelease: async (params) => { writes.push(['delete', params]); },
    },
    git: {
      getRef: async () => ({data: {object: {type: annotated ? 'tag' : 'commit', sha: tagSha}}}),
      getTag: async () => ({data: {object: {type: 'commit', sha: tagSha}}}),
    },
  };
  return {
    writes, logs,
    run: () => finalize({
      github: {rest, paginate: async (method, params) => (await method(params)).data},
      context: {repo: repository}, core: {info: (message) => logs.push(message)},
    }),
  };
}

test('merges newest snapshot, publishes it, then cleans only older weekly updates', async () => {
  const f = fixture({
    pulls: [pull(342, previous), pull(343, latest), pull(341, oldest),
      pull(344, latest, {title: 'Add a library'}),
      pull(345, '2026.10.22', {head: {ref: 'update/2026.10.22', repo: {full_name: 'someone/fork'}}})],
    releases: [release(3, latest), release(2, previous), release(1, oldest),
      release(4, '2026.10.22', {name: 'Unrelated draft'}),
      release(5, '2026.09.24', {draft: false}), release(6, '2026.10.23', {prerelease: true})],
  });
  await f.run();
  assert.deepEqual(f.writes, [
    ['merge', {...repository, pull_number: 343, sha: latest, merge_method: 'merge'}],
    ['publish', {...repository, release_id: 3, draft: false, make_latest: 'true'}],
    ['close', {...repository, pull_number: 342, state: 'closed'}],
    ['close', {...repository, pull_number: 341, state: 'closed'}],
    ['delete', {...repository, release_id: 2}],
    ['delete', {...repository, release_id: 1}],
  ]);
});

test('does nothing when all weekly updates are already published', async () => {
  const f = fixture({releases: [release(3, latest, {draft: false})]});
  await f.run();
  assert.deepEqual(f.writes, []);
  assert.deepEqual(f.logs, ['No pending weekly updates.']);
});

test('does not fall back to an older update when the newest release draft is missing', async () => {
  const f = fixture({pulls: [pull(342, previous), pull(343, latest)], releases: [release(2, previous)]});
  await assert.rejects(f.run(), /Missing release draft/);
  assert.deepEqual(f.writes, []);
});

test('refuses a release tag that does not match the latest PR head', async () => {
  const f = fixture({pulls: [pull(343, latest)], releases: [release(3, latest)], tagSha: 'different'});
  await assert.rejects(f.run(), /does not match release tag/);
  assert.deepEqual(f.writes, []);
});

test('refuses code or workflow changes in a weekly update', async () => {
  const f = fixture({pulls: [pull(343, latest, {changed_files: 1})], releases: [release(3, latest)],
    files: [{filename: '.github/workflows/update-best-of-list.yml'}]});
  await assert.rejects(f.run(), /outside the generated weekly snapshot/);
  assert.deepEqual(f.writes, []);
});

test('refuses renaming a code file into an allowed generated file', async () => {
  const f = fixture({pulls: [pull(343, latest, {changed_files: 1})], releases: [release(3, latest)],
    files: [{filename: 'README.md', previous_filename: '.github/workflows/update-best-of-list.yml'}]});
  await assert.rejects(f.run(), /outside the generated weekly snapshot/);
  assert.deepEqual(f.writes, []);
});

test('does not publish or clean up when GitHub refuses the merge', async () => {
  const f = fixture({pulls: [pull(343, latest), pull(342, previous)],
    releases: [release(3, latest), release(2, previous)],
    mergeResult: {merged: false, message: 'Required status check has not passed'} });
  await assert.rejects(f.run(), /Could not merge/);
  assert.deepEqual(f.writes.map(([action]) => action), ['merge']);
});

test('keeps older PRs and drafts when publishing fails after merging', async () => {
  const f = fixture({pulls: [pull(343, latest), pull(342, previous)],
    releases: [release(3, latest), release(2, previous)], publishError: 'API unavailable'});
  await assert.rejects(f.run(), /API unavailable/);
  assert.deepEqual(f.writes.map(([action]) => action), ['merge', 'publish']);
});

test('reruns can publish an already merged snapshot and finish cleanup', async () => {
  const f = fixture({pulls: [pull(342, previous)], releases: [release(3, latest), release(2, previous)]});
  await f.run();
  assert.deepEqual(f.writes.map(([action]) => action), ['publish', 'close', 'delete']);
});

test('does not publish a draft whose PR is closed without merging', async () => {
  const f = fixture({releases: [release(3, latest)], comparison: 'diverged'});
  await assert.rejects(f.run(), /snapshot is not merged/);
  assert.deepEqual(f.writes, []);
});

test('a newer published release supersedes older open PRs without merging them', async () => {
  const f = fixture({pulls: [pull(342, previous)],
    releases: [release(3, latest, {draft: false}), release(2, previous)]});
  await f.run();
  assert.deepEqual(f.writes.map(([action]) => action), ['close', 'delete']);
});

test('preserves an older draft that was published during the run', async () => {
  const f = fixture({releases: [release(3, latest, {draft: false}), release(2, previous)],
    currentReleases: {2: release(2, previous, {draft: false})}});
  await f.run();
  assert.deepEqual(f.writes, []);
});

test('preserves a PR that no longer matches a weekly update during cleanup', async () => {
  const f = fixture({pulls: [pull(342, previous)], releases: [release(3, latest, {draft: false})],
    currentPulls: {342: pull(342, previous, {title: 'Manual changes to review'})}});
  await f.run();
  assert.deepEqual(f.writes, []);
});

test('same-day reruns sort after the date-only version and support lightweight tags', async () => {
  const version = `${latest}-23.45`;
  const f = fixture({pulls: [pull(343, latest), pull(344, version)],
    releases: [release(3, latest), release(4, version)], tagSha: version, annotated: false});
  await f.run();
  assert.equal(f.writes[0][1].pull_number, 344);
  assert.equal(f.writes[1][1].release_id, 4);
});
