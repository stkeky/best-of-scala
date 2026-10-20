const VERSION = /^\d{4}\.\d{2}\.\d{2}(?:-\d{2}\.\d{2})?$/;

module.exports = async function finalize({github, context, core, dryRun = false}) {
  if (dryRun) core.info('Read-only verification: PRs and releases will not be changed.');
  const repo = context.repo;
  const fullName = `${repo.owner}/${repo.repo}`.toLowerCase();
  const pullVersion = (pull) => {
    const version = pull.head.ref.replace(/^update\//, '');
    return pull.head.ref === `update/${version}` && VERSION.test(version) &&
      pull.title === `Best-of update: ${version}` && pull.base.ref === 'main' &&
      pull.head.repo?.full_name.toLowerCase() === fullName ? version : null;
  };
  const releaseVersion = (release) => VERSION.test(release.tag_name) &&
    release.name === `Update: ${release.tag_name}` && !release.prerelease
    ? release.tag_name : null;

  const pulls = (await github.paginate(github.rest.pulls.list, {
    ...repo, state: 'open', base: 'main', per_page: 100,
  })).filter(pullVersion);
  const releases = (await github.paginate(github.rest.repos.listReleases, {
    ...repo, per_page: 100,
  })).filter(releaseVersion);
  const version = [...pulls.map(pullVersion), ...releases.map(releaseVersion)].sort().at(-1);
  const release = releases.find((item) => item.tag_name === version);
  const candidate = pulls.find((pull) => pullVersion(pull) === version);
  if (!version || (!candidate && !release?.draft)) {
    core.info('No pending weekly updates.');
    return;
  }
  if (!release) throw new Error(`Missing release draft for newest update ${version}.`);

  // Annotated tags must resolve to the snapshot that is actually being merged.
  let {data: {object}} = await github.rest.git.getRef({...repo, ref: `tags/${version}`});
  while (object.type === 'tag') {
    ({data: {object}} = await github.rest.git.getTag({...repo, tag_sha: object.sha}));
  }
  if (object.type !== 'commit') throw new Error(`Release tag ${version} is not a commit.`);

  if (candidate) {
    const {data: pull} = await github.rest.pulls.get({...repo, pull_number: candidate.number});
    if (pullVersion(pull) !== version || pull.draft || pull.head.sha !== object.sha) {
      throw new Error(`PR #${pull.number} does not match release tag ${version}.`);
    }
    const date = version.slice(0, 10).replaceAll('.', '-');
    const allowedFiles = new Set([
      'README.md', 'latest-changes.md',
      `history/${date}_changes.md`, `history/${date}_projects.csv`,
    ]);
    const files = await github.paginate(github.rest.pulls.listFiles, {
      ...repo, pull_number: pull.number, per_page: 100,
    });
    if (!files.length || files.length !== pull.changed_files || files.some((file) =>
      !allowedFiles.has(file.filename) ||
      (file.previous_filename && !allowedFiles.has(file.previous_filename)))) {
      throw new Error(`PR #${pull.number} contains changes outside the generated weekly snapshot.`);
    }
    if (pull.state === 'open') {
      if (!dryRun) {
        const {data: result} = await github.rest.pulls.merge({
          ...repo, pull_number: pull.number, sha: pull.head.sha, merge_method: 'merge',
        });
        if (!result.merged) throw new Error(`Could not merge PR #${pull.number}: ${result.message}`);
      }
      core.info(`${dryRun ? 'Would merge' : 'Merged'} PR #${pull.number} (${version}).`);
    } else if (!pull.merged) {
      throw new Error(`PR #${pull.number} was closed without merging.`);
    }
  } else {
    // A rerun can finish publishing after a previous attempt already merged the PR.
    const {data: comparison} = await github.rest.repos.compareCommitsWithBasehead({
      ...repo, basehead: `${object.sha}...main`,
    });
    if (!['ahead', 'identical'].includes(comparison.status)) {
      throw new Error(`Release ${version} has no open PR and its snapshot is not merged into main.`);
    }
  }

  if (release.draft) {
    if (!dryRun) {
      await github.rest.repos.updateRelease({
        ...repo, release_id: release.id, draft: false, make_latest: 'true',
      });
    }
    core.info(`${dryRun ? 'Would publish' : 'Published'} ${version} as the latest release.`);
  }
};
