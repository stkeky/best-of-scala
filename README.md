<!-- markdownlint-disable -->
<h1 align="center">
    best-of-scala
    <br>
</h1>

<p align="center">
    <strong>🏆&nbsp; A ranked list of awesome Scala open-source libraries & tools. Updated weekly.</strong>
</p>

<p align="center">
    <a href="https://best-of.org" title="Best-of Badge"><img src="http://bit.ly/3o3EHNN"></a>
    <a href="#Contents" title="Project Count"><img src="https://img.shields.io/badge/projects-200-blue.svg?color=5ac4bf"></a>
    <a href="#Contribution" title="Contributions are welcome"><img src="https://img.shields.io/badge/contributions-welcome-green.svg"></a>
    <a href="https://github.com/stkeky/best-of-scala/releases" title="Best-of Updates"><img src="https://img.shields.io/github/release-date/stkeky/best-of-scala?color=green&label=updated"></a>
</p>

This curated list contains 200 awesome open-source projects with a total of 150K stars grouped into 12 categories. All projects are ranked by a project-quality score, which is calculated based on various metrics automatically collected from GitHub and different package managers. If you like to add or update projects, feel free to open an [issue](https://github.com/stkeky/best-of-scala/issues/new/choose), submit a [pull request](https://github.com/stkeky/best-of-scala/pulls), or directly edit the [projects.yaml](https://github.com/stkeky/best-of-scala/edit/main/projects.yaml). Contributions are very welcome!

> 🧙‍♂️  Discover other [best-of lists](https://best-of.org) or [create your own](https://github.com/best-of-lists/best-of/blob/main/create-best-of-list.md).

## Contents

- [Miscelaneous](#miscelaneous) _3 projects_
- [Database Clients](#database-clients) _42 projects_
- [Ecosystems](#ecosystems) _1 projects_
- [JSON](#json) _17 projects_
- [Web Frameworks](#web-frameworks) _18 projects_
- [Common file format processing](#common-file-format-processing) _6 projects_
- [SBT Plugins](#sbt-plugins) _36 projects_
- [Toolkits, extensions & ecosystems](#toolkits-extensions--ecosystems) _34 projects_
- [Audio, image and video processing](#audio-image-and-video-processing) _7 projects_
- [Dependency injection](#dependency-injection) _8 projects_
- [HTTP client and servers](#http-client-and-servers) _16 projects_
- [Libraries for testing](#libraries-for-testing) _17 projects_

## Explanation
- 🥇🥈🥉&nbsp; Combined project-quality score
- ⭐️&nbsp; Star count from GitHub
- 🐣&nbsp; New project _(less than 6 months old)_
- 💤&nbsp; Inactive project _(9 months no activity)_
- 💀&nbsp; Dead project _(18 months no activity)_
- 📈📉&nbsp; Project is trending up or down
- ➕&nbsp; Project was recently added
- ❗️&nbsp; Warning _(e.g. missing/risky license)_
- 👨‍💻&nbsp; Contributors count from GitHub
- 🔀&nbsp; Fork count from GitHub
- 📋&nbsp; Issue count from GitHub
- ⏱️&nbsp; Last update timestamp on package manager
- 📥&nbsp; Download count from package manager
- 📦&nbsp; Number of dependent projects
- <img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13">&nbsp; Type-safe, composable asynchronous and concurrent programming for Scala.
- <img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13">&nbsp; Standalone libraries spawned or a part of PlayFramework.

<br>

## Miscelaneous

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Miscelaneous projects that currently don't fit into any other category._

<details><summary><b><a href="https://github.com/sangria-graphql/sangria">sangria</a></b> (🥇24 ·  ⭐ 1.9K) - Scala GraphQL implementation. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sangria-graphql/sangria) (👨‍💻 63 · 🔀 210 · 📋 450 - 11% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/sangria-graphql/sangria
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/scountries">scountries</a></b> (🥉11 ·  ⭐ 19) - Scala library that provides an enumeration of ISO 3166 codes for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lambdaworks/scountries) (👨‍💻 5 · 🔀 1 · ⏱️ 03.05.2023):

	```
	git clone https://github.com/lambdaworks/scountries
	```
- [Maven](https://search.maven.org/artifact/io.lambdaworks/scountries):
	```
	<dependency>
		<groupId>io.lambdaworks</groupId>
		<artifactId>scountries</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/scurl-detector">scurl-detector</a></b> (🥉11 ·  ⭐ 17) - Scala library that detects and extracts URLs from text. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lambdaworks/scurl-detector) (👨‍💻 6 · 🔀 1 · 📋 10 - 10% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/lambdaworks/scurl-detector
	```
- [Maven](https://search.maven.org/artifact/io.lambdaworks/scurl-detector_2.13):
	```
	<dependency>
		<groupId>io.lambdaworks</groupId>
		<artifactId>scurl-detector_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<br>

## Database Clients

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for connecting to, operating, and querying databases._

<details><summary><b><a href="https://github.com/slick/slick">slick</a></b> (🥇25 ·  ⭐ 2.6K) - Slick (Scala Language Integrated Connection Kit) is a modern database.. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/slick/slick) (👨‍💻 200 · 🔀 580 · 📋 1.3K - 29% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/slick/slick
	```
</details>
<details><summary><b><a href="https://github.com/sksamuel/elastic4s">elastic4s</a></b> (🥇25 ·  ⭐ 1.6K) - Elasticsearch Scala Client - Reactive, Non Blocking, Type Safe,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sksamuel/elastic4s) (👨‍💻 400 · 🔀 680 · 📋 1.1K - 1% open · ⏱️ 25.04.2023):

	```
	git clone https://github.com/sksamuel/elastic4s
	```
- [Maven](https://search.maven.org/artifact/com.sksamuel.elastic4s/elastic4s_2.13):
	```
	<dependency>
		<groupId>com.sksamuel.elastic4s</groupId>
		<artifactId>elastic4s_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/tpolecat/doobie">doobie</a></b> (🥇23 ·  ⭐ 2.1K · 📉) - Functional JDBC layer for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/tpolecat/doobie) (👨‍💻 160 · 🔀 330 · 📋 510 - 27% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/tpolecat/doobie
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/skunk">skunk</a></b> (🥇22 ·  ⭐ 1.5K) - A data access library for Scala + Postgres. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/typelevel/skunk) (👨‍💻 64 · 🔀 130 · 📋 120 - 52% open · ⏱️ 12.05.2023):

	```
	git clone https://github.com/tpolecat/skunk
	```
</details>
<details><summary><b><a href="https://github.com/scalikejdbc/scalikejdbc">scalikejdbc</a></b> (🥇22 ·  ⭐ 1.2K) - A tidy SQL-based DB access library for Scala developers. This.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalikejdbc/scalikejdbc) (👨‍💻 100 · 🔀 220 · 📋 480 - 5% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/scalikejdbc/scalikejdbc
	```
- [Maven](https://search.maven.org/artifact/org.scalikejdbc/scalikejdbc_2.13):
	```
	<dependency>
		<groupId>org.scalikejdbc</groupId>
		<artifactId>scalikejdbc_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/tminglei/slick-pg">slick-pg</a></b> (🥇22 ·  ⭐ 820) - Slick extensions for PostgreSQL. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/tminglei/slick-pg) (👨‍💻 91 · 🔀 170 · 📋 380 - 28% open · ⏱️ 04.05.2023):

	```
	git clone https://github.com/tminglei/slick-pg
	```
</details>
<details><summary><b><a href="https://github.com/scanamo/scanamo">scanamo</a></b> (🥈21 ·  ⭐ 320) - Simpler DynamoDB access for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scanamo/scanamo) (👨‍💻 82 · 🔀 120 · 📋 200 - 22% open · ⏱️ 04.05.2023):

	```
	git clone https://github.com/scanamo/scanamo
	```
</details>
<details><summary><b><a href="https://github.com/ReactiveMongo/ReactiveMongo">ReactiveMongo</a></b> (🥈20 ·  ⭐ 840) - Non-blocking, Reactive MongoDB Driver for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ReactiveMongo/ReactiveMongo) (👨‍💻 87 · 🔀 220 · 📋 380 - 3% open · ⏱️ 01.05.2023):

	```
	git clone https://github.com/ReactiveMongo/ReactiveMongo
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-quill">quill</a></b> (🥈18 ·  ⭐ 2.1K) - Compile-time Language Integrated Queries for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-quill) (👨‍💻 130 · 🔀 340 · 📋 1K - 30% open · ⏱️ 12.05.2023):

	```
	git clone https://github.com/zio/zio-quill
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-redis">zio-redis</a></b> (🥈18 ·  ⭐ 100) - A ZIO-based redis client. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-redis) (👨‍💻 35 · 🔀 57 · 📋 120 - 12% open · ⏱️ 09.05.2023):

	```
	git clone https://github.com/zio/zio-redis
	```
</details>
<details><summary><b><a href="https://github.com/squeryl/squeryl">squeryl</a></b> (🥈17 ·  ⭐ 580) - A Scala DSL for talking with databases with minimum verbosity and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/squeryl/squeryl) (👨‍💻 60 · 🔀 130 · 📋 140 - 17% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/squeryl/squeryl
	```
</details>
<details><summary><b><a href="https://github.com/CleverCloud/pulsar4s">pulsar4s</a></b> (🥈17 ·  ⭐ 220) - Idiomatic, typesafe, and reactive Scala client for Apache Pulsar. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/CleverCloud/pulsar4s) (👨‍💻 23 · 🔀 39 · 📋 59 - 28% open · ⏱️ 08.01.2023):

	```
	git clone https://github.com/CleverCloud/pulsar4s
	```
</details>
<details><summary><b><a href="https://github.com/neotypes/neotypes">neotypes</a></b> (🥈17 ·  ⭐ 150) - Scala lightweight, type-safe, asynchronous driver for neo4j. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/neotypes/neotypes) (👨‍💻 14 · 🔀 31 · 📋 58 - 22% open · ⏱️ 05.05.2023):

	```
	git clone https://github.com/neotypes/neotypes
	```
</details>
<details><summary><b><a href="https://github.com/couchbase/couchbase-jvm-clients">couchbase-jvm-clients</a></b> (🥈17 ·  ⭐ 38) - The Couchbase Monorepo for JVM Clients: Java, Scala,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/couchbase/couchbase-jvm-clients) (👨‍💻 19 · 🔀 34 · 📦 140 · ⏱️ 18.05.2023):

	```
	git clone https://github.com/couchbase/couchbase-jvm-clients
	```
</details>
<details><summary><b><a href="https://github.com/playframework/anorm">anorm</a></b> (🥈16 ·  ⭐ 230) - The Anorm database library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/anorm) (👨‍💻 54 · 🔀 69 · 📋 65 - 9% open · ⏱️ 18.03.2023):

	```
	git clone https://github.com/playframework/anorm
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/zio-elasticsearch">zio-elasticsearch</a></b> (🥉15 ·  ⭐ 50) - ZIO Elasticsearch is a type-safe and streaming-.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lambdaworks/zio-elasticsearch) (👨‍💻 10 · 🔀 6 · 📋 35 - 28% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/lambdaworks/zio-elasticsearch
	```
</details>
<details><summary><b><a href="https://github.com/lucidsoftware/relate">relate</a></b> (🥉14 ·  ⭐ 160 · 💤) - Performant database access in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lucidsoftware/relate) (👨‍💻 17 · 🔀 16 · 📥 1.3K · 📋 22 - 45% open · ⏱️ 28.02.2022):

	```
	git clone https://github.com/lucidsoftware/relate
	```
</details>
<details><summary><b><a href="https://github.com/crobox/clickhouse-scala-client">clickhouse-scala-client</a></b> (🥉13 ·  ⭐ 110) - Clickhouse Scala Client with Reactive Streams support. <code><a href="http://bit.ly/37RvQcA">❗️LGPL-3.0</a></code></summary>

- [GitHub](https://github.com/crobox/clickhouse-scala-client) (👨‍💻 16 · 🔀 19 · 📋 31 - 35% open · ⏱️ 01.05.2023):

	```
	git clone https://github.com/crobox/clickhouse-scala-client
	```
</details>
<details><summary><b><a href="https://github.com/laserdisc-io/laserdisc">laserdisc</a></b> (🥉13 ·  ⭐ 90) - A Future-free Fs2 native pure FP Redis client. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/laserdisc-io/laserdisc) (👨‍💻 9 · 🔀 14 · 📋 25 - 56% open · ⏱️ 03.05.2023):

	```
	git clone https://github.com/laserdisc-io/laserdisc
	```
</details>
<details><summary><b><a href="https://github.com/innFactory/akka-persistence-gcp-datastore">akka-persistence-gcp-datastore</a></b> (🥉9 ·  ⭐ 20 · 💤) - akka-persistence-gcp-datastore is a journal and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/innFactory/akka-persistence-gcp-datastore) (👨‍💻 4 · 🔀 3 · ⏱️ 15.03.2022):

	```
	git clone https://github.com/innFactory/akka-persistence-gcp-datastore
	```
</details>
<details><summary><b><a href="https://github.com/mingchuno/etcd4s">etcd4s</a></b> (🥉7 ·  ⭐ 31 · 💤) - Scala etcd client implementing V3 APIs. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/mingchuno/etcd4s) (👨‍💻 4 · 🔀 4 · 📋 4 - 75% open · ⏱️ 07.03.2022):

	```
	git clone https://github.com/mingchuno/etcd4s
	```
</details>
<details><summary>Show 21 hidden projects...</summary>

- <b><a href="https://github.com/outworkers/phantom">phantom</a></b> (🥈20 ·  ⭐ 1K · 💀) - Schema safe, type-safe, reactive Scala driver for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/etaty/rediscala">rediscala</a></b> (🥈16 ·  ⭐ 790 · 💀) - Non-blocking, Reactive Redis driver for Scala (with Sentinel.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/aselab/scala-activerecord">scala-activerecord</a></b> (🥉15 ·  ⭐ 320 · 💀) - ActiveRecord-like ORM library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/debasishg/scala-redis">scala-redis</a></b> (🥉14 ·  ⭐ 1K · 💤) - A scala library for connecting to a redis server, or a.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/finagle/finagle-postgres">finagle-postgres</a></b> (🥉14 ·  ⭐ 82 · 💀) - PostgreSQL protocol support for Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/Livestream/scredis">scredis</a></b> (🥉13 ·  ⭐ 150 · 💀) - Non-blocking, ultra-fast Scala Redis client built on top of Akka.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ing-bank/scruid">scruid</a></b> (🥉13 ·  ⭐ 110 · 💀) - Scala + Druid: Scruid. A library that allows you to compose.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/mongodb/casbah">casbah</a></b> (🥉12 ·  ⭐ 520 · 💤) - Casbah is now officially end-of-life (EOL). <code>❗Unlicensed</code>
- <b><a href="https://github.com/salat/salat">salat</a></b> (🥉12 ·  ⭐ 480 · 💀) - Salat is a simple serialization library for case classes. <code>❗Unlicensed</code>
- <b><a href="https://github.com/lastland/scala-forklift">scala-forklift</a></b> (🥉11 ·  ⭐ 190 · 💀) - Type-safe data migration tool for Slick, Git and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/beloglazov/couchdb-scala">couchdb-scala</a></b> (🥉11 ·  ⭐ 65 · 💀) - A purely functional Scala client for CouchDB. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/longevityframework/longevity">longevity</a></b> (🥉10 ·  ⭐ 100 · 💀) - A Persistence Framework for Scala and NoSQL. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scalamolecule/molecule">molecule</a></b> (🥉9 ·  ⭐ 68 · 💤) - Non-blocking asynchronous domain-customizable database query.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/outr/lucene4s">lucene4s</a></b> (🥉9 ·  ⭐ 53 · 💀) - Light-weight convenience wrapper around Lucene to simplify complex.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/ReactiveCouchbase/reactivecouchbase-rs-core">ReactiveCouchbase-rs-core</a></b> (🥉9 ·  ⭐ 27 · 💀) - New ReactiveCouchbase driver using reactive-streams. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/monix/shade">shade</a></b> (🥉8 ·  ⭐ 110 · 💀) - Memcached client for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/outworkers/morpheus">morpheus</a></b> (🥉8 ·  ⭐ 100 · 💀) - Reactive type-safe Scala driver for SQL databases. <code>❗Unlicensed</code>
- <b><a href="https://github.com/outr/scalarelational">scalarelational</a></b> (🥉8 ·  ⭐ 58 · 💀) - Type-Safe framework for defining, modifying, and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/wangzaixiang/scala-sql">scala-sql</a></b> (🥉7 ·  ⭐ 89) - scala SQL api. <code>❗Unlicensed</code>
- <b><a href="https://github.com/zero-deps/kvs">kvs</a></b> (🥉7 ·  ⭐ 20) - Highly available distributed strong eventual consistent and sequentially.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/kostaskougios/mapperdao">mapperdao</a></b> (🥉6 ·  ⭐ 14 · 💀) - A Scala ORM library. <code>❗Unlicensed</code>
</details>
<br>

## Ecosystems

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Extensions and platforms that provides various abstractions._

<details><summary><b><a href="https://github.com/zio/zio">zio</a></b> (🥇28 ·  ⭐ 3.8K) - ZIO A type-safe, composable library for async and concurrent programming.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/zio/zio) (👨‍💻 660 · 🔀 1.2K · 📋 2.3K - 15% open · ⏱️ 17.05.2023):

	```
	git clone https://github.com/zio/zio
	```
- [Maven](https://search.maven.org/artifact/dev.zio/zio_2.13):
	```
	<dependency>
		<groupId>dev.zio</groupId>
		<artifactId>zio_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<br>

## JSON

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries that handles JSON format._

<details><summary><b><a href="https://github.com/circe/circe">circe</a></b> (🥇24 ·  ⭐ 2.4K) - Yet another JSON library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/circe/circe) (👨‍💻 260 · 🔀 520 · 📋 520 - 32% open · ⏱️ 05.04.2023):

	```
	git clone https://github.com/circe/circe
	```
- [Maven](https://search.maven.org/artifact/io.circe/circe-core_2.13):
	```
	<dependency>
		<groupId>io.circe</groupId>
		<artifactId>circe-core_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/plokhotnyuk/jsoniter-scala">jsoniter-scala</a></b> (🥇21 ·  ⭐ 640 · 📈) - Scala macros for compile-time generation of safe and ultra-.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/plokhotnyuk/jsoniter-scala) (👨‍💻 18 · 🔀 79 · 📦 1 · 📋 270 - 18% open · ⏱️ 17.05.2023):

	```
	git clone https://github.com/plokhotnyuk/jsoniter-scala
	```
</details>
<details><summary><b><a href="https://github.com/json4s/json4s">json4s</a></b> (🥈20 ·  ⭐ 1.4K) - JSON library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/json4s/json4s) (👨‍💻 130 · 🔀 320 · 📋 400 - 36% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/json4s/json4s
	```
</details>
<details><summary><b><a href="https://github.com/spray/spray-json">spray-json</a></b> (🥈20 ·  ⭐ 970 · 💤) - A lightweight, clean and simple JSON implementation in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/spray/spray-json) (👨‍💻 48 · 🔀 190 · 📦 140 · 📋 200 - 41% open · ⏱️ 09.12.2021):

	```
	git clone https://github.com/spray/spray-json
	```
- [Maven](https://search.maven.org/artifact/io.spray/spray-json_2.13):
	```
	<dependency>
		<groupId>io.spray</groupId>
		<artifactId>spray-json_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/playframework/play-json">play-json</a></b> (🥈20 ·  ⭐ 340) - The Play JSON library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/play-json) (👨‍💻 63 · 🔀 130 · 📋 110 - 33% open · ⏱️ 08.05.2023):

	```
	git clone https://github.com/playframework/play-json
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-json">zio-json</a></b> (🥈19 ·  ⭐ 380) - Fast, secure JSON library with tight ZIO integration. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-json) (👨‍💻 53 · 🔀 110 · 📋 140 - 43% open · ⏱️ 26.04.2023):

	```
	git clone https://github.com/zio/zio-json
	```
</details>
<details><summary><b><a href="https://github.com/gnieh/diffson">diffson</a></b> (🥈19 ·  ⭐ 300) - A scala diff/patch library for Json. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/gnieh/diffson) (👨‍💻 31 · 🔀 47 · 📋 48 - 10% open · ⏱️ 06.05.2023):

	```
	git clone https://github.com/gnieh/diffson
	```
</details>
<details><summary><b><a href="https://github.com/FasterXML/jackson-module-scala">jackson-module-scala</a></b> (🥉18 ·  ⭐ 490) - Add-on module for Jackson.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/FasterXML/jackson-module-scala) (👨‍💻 59 · 🔀 140 · 📋 460 - 9% open · ⏱️ 17.05.2023):

	```
	git clone https://github.com/FasterXML/jackson-module-scala
	```
</details>
<details><summary><b><a href="https://github.com/sirthias/borer">borer</a></b> (🥉13 ·  ⭐ 190) - Efficient CBOR and JSON (de)serialization in Scala. <code><a href="http://bit.ly/3postzC">MPL-2.0</a></code></summary>

- [GitHub](https://github.com/sirthias/borer) (👨‍💻 8 · 🔀 12 · 📋 110 - 6% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/sirthias/borer
	```
</details>
<details><summary><b><a href="https://github.com/gzoller/ScalaJack">ScalaJack</a></b> (🥉10 ·  ⭐ 110) - Fast JSON parser/generator for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/gzoller/ScalaJack) (👨‍💻 13 · 🔀 8 · 📋 51 - 3% open · ⏱️ 15.11.2022):

	```
	git clone https://github.com/gzoller/ScalaJack
	```
</details>
<details><summary><b><a href="https://github.com/nrktkt/ninny-json">ninny-json</a></b> (🥉8 ·  ⭐ 20) - JSON typeclasses that know the difference between null and absent.. <code><a href="http://bit.ly/3rvuUlR">Unlicense</a></code></summary>

- [GitHub](https://github.com/nrktkt/ninny-json) (👨‍💻 2 · 🔀 4 · 📋 7 - 57% open · ⏱️ 12.04.2023):

	```
	git clone https://github.com/nrktkt/ninny-json
	```
</details>
<details><summary>Show 6 hidden projects...</summary>

- <b><a href="https://github.com/argonaut-io/argonaut">argonaut</a></b> (🥉17 ·  ⭐ 540) - Purely functional JSON parser and library in scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/typelevel/jawn">jawn</a></b> (🥉17 ·  ⭐ 420) - Jawn is for parsing jay-sawn (JSON). <code>❗Unlicensed</code>
- <b><a href="https://github.com/fomkin/pushka">pushka</a></b> (🥉10 ·  ⭐ 74 · 💀) - ABANDONED Pure Scala serialization library with annotations. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/scala-jsonapi/scala-jsonapi">scala-jsonapi</a></b> (🥉9 ·  ⭐ 110 · 💀) - Scala support library for integrating the JSON API.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/battermann/sbt-json">sbt-json</a></b> (🥉7 ·  ⭐ 32 · 💀) - sbt plugin that generates Scala case classes for easy, statically typed.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/nestorpersist/json">json</a></b> (🥉3 ·  ⭐ 11 · 💀) - Persist-Json, a Fast Json Parser Written in Scala. <code>❗Unlicensed</code>
</details>
<br>

## Web Frameworks

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/playframework/playframework">playframework</a></b> (🥇31 ·  ⭐ 12K) - Play Framework. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/playframework/playframework) (👨‍💻 960 · 🔀 4K · 📋 3.7K - 11% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/playframework/playframework
	```
</details>
<details><summary><b><a href="https://github.com/twitter/finatra">finatra</a></b> (🥇23 ·  ⭐ 2.3K) - Fast, testable, Scala services built on TwitterServer and Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/twitter/finatra) (👨‍💻 250 · 🔀 400 · 📋 320 - 3% open · ⏱️ 09.05.2023):

	```
	git clone https://github.com/twitter/finatra
	```
</details>
<details><summary><b><a href="https://github.com/japgolly/scalajs-react">scalajs-react</a></b> (🥈21 ·  ⭐ 1.6K · 💤) - Facebooks React on Scala.JS. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/japgolly/scalajs-react) (👨‍💻 80 · 🔀 230 · 📋 530 - 4% open · ⏱️ 24.06.2022):

	```
	git clone https://github.com/japgolly/scalajs-react
	```
</details>
<details><summary><b><a href="https://github.com/lift/framework">framework</a></b> (🥈21 ·  ⭐ 1.3K) - Lift Framework. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lift/framework) (👨‍💻 120 · 🔀 270 · 📋 1.5K - 9% open · ⏱️ 11.04.2023):

	```
	git clone https://github.com/lift/framework
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/Binding.scala">Binding.scala</a></b> (🥈20 ·  ⭐ 1.6K) - Reactive data-binding for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/Binding.scala) (👨‍💻 25 · 🔀 100 · 📋 100 - 37% open · ⏱️ 30.04.2023):

	```
	git clone https://github.com/ThoughtWorksInc/Binding.scala
	```
</details>
<details><summary><b><a href="https://github.com/UdashFramework/udash-core">udash-core</a></b> (🥈20 ·  ⭐ 440) - Scala framework for building beautiful and maintainable web.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/UdashFramework/udash-core) (👨‍💻 37 · 🔀 35 · 📋 110 - 23% open · ⏱️ 09.05.2023):

	```
	git clone https://github.com/UdashFramework/udash-core
	```
</details>
<details><summary><b><a href="https://github.com/skinny-framework/skinny-framework">skinny-framework</a></b> (🥈19 ·  ⭐ 740) - Scala on Rails - A full-stack web app framework for rapid.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/skinny-framework/skinny-framework) (👨‍💻 32 · 🔀 69 · 📥 12K · 📋 150 - 12% open · ⏱️ 14.12.2022):

	```
	git clone https://github.com/skinny-framework/skinny-framework
	```
</details>
<details><summary><b><a href="https://github.com/unfiltered/unfiltered">unfiltered</a></b> (🥉17 ·  ⭐ 710) - A toolkit for servicing HTTP requests in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/unfiltered/unfiltered) (👨‍💻 87 · 🔀 110 · 📋 190 - 21% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/unfiltered/unfiltered
	```
</details>
<details><summary><b><a href="https://github.com/fomkin/korolev">korolev</a></b> (🥉17 ·  ⭐ 580) - Single Page Applications running on the server side. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/fomkin/korolev) (👨‍💻 25 · 🔀 48 · 📋 230 - 5% open · ⏱️ 23.01.2023):

	```
	git clone https://github.com/fomkin/korolev
	```
</details>
<details><summary><b><a href="https://github.com/xitrum-framework/xitrum">xitrum</a></b> (🥉16 ·  ⭐ 450) - Async and clustered Scala web framework and HTTP(S) server. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/xitrum-framework/xitrum) (👨‍💻 31 · 🔀 51 · 📋 660 - 8% open · ⏱️ 28.02.2023):

	```
	git clone https://github.com/xitrum-framework/xitrum
	```
</details>
<details><summary><b><a href="https://github.com/outr/youi">youi</a></b> (🥉16 ·  ⭐ 210) - Next generation user interface and application development in Scala and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/outr/youi) (👨‍💻 11 · 🔀 26 · 📋 52 - 21% open · ⏱️ 07.12.2022):

	```
	git clone https://github.com/outr/youi
	```
</details>
<details><summary><b><a href="https://github.com/splink/pagelets">pagelets</a></b> (🥉8 ·  ⭐ 78 · 💤) - A module for the Play Framework to build highly modular.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/splink/pagelets) (🔀 6 · ⏱️ 31.01.2022):

	```
	git clone https://github.com/splink/pagelets
	```
</details>
<details><summary>Show 6 hidden projects...</summary>

- <b><a href="https://github.com/tumblr/colossus">colossus</a></b> (🥈19 ·  ⭐ 1.1K · 💀) - I/O and Microservice library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/scalatra/scalatra">scalatra</a></b> (🥉18 ·  ⭐ 2.6K) - Tiny Scala high-performance, async web framework, inspired by.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/com-lihaoyi/cask">cask</a></b> (🥉16 ·  ⭐ 450) - Cask: a Scala HTTP micro-framework. <code>❗Unlicensed</code>
- <b><a href="https://github.com/mesosphere/chaos">chaos</a></b> (🥉14 ·  ⭐ 250 · 💀) - A lightweight framework for writing REST services in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/nafg/reactive">reactive</a></b> (🥉12 ·  ⭐ 220 · 💀) - A simple FRP library and a web UI framework built on it. <code>❗Unlicensed</code>
- <b><a href="https://github.com/analogweb/analogweb-scala">analogweb-scala</a></b> (🥉8 ·  ⭐ 13 · 💤) - Tiny High Performance HTTP Server for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Common file format processing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries that handles common file formats including YAML, CSV etc._

<details><summary><b><a href="https://github.com/planet42/Laika">laika</a></b> (🥇19 ·  ⭐ 370) - Site and E-book Generator and Customizable Text Markup Transformer for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/planet42/Laika) (👨‍💻 16 · 🔀 39 · 📋 210 - 3% open · ⏱️ 29.04.2023):

	```
	git clone https://github.com/planet42/Laika
	```
</details>
<details><summary><b><a href="https://github.com/nrinaudo/kantan.csv">kantan.csv</a></b> (🥈15 ·  ⭐ 340) - CSV handling library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/nrinaudo/kantan.csv) (👨‍💻 9 · 🔀 33 · 📋 170 - 21% open · ⏱️ 06.09.2022):

	```
	git clone https://github.com/nrinaudo/kantan.csv
	```
</details>
<details><summary>Show 4 hidden projects...</summary>

- <b><a href="https://github.com/tototoshi/scala-csv">scala-csv</a></b> (🥈14 ·  ⭐ 670) - CSV Reader/Writer for Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/fingo/spata">spata</a></b> (🥉12 ·  ⭐ 13) - Functional, stream-based CSV processor for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/jcazevedo/moultingyaml">moultingyaml</a></b> (🥉10 ·  ⭐ 98 · 💀) - Scala wrapper for SnakeYAML. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/frugalmechanic/fm-flatfile">fm-flatfile</a></b> (🥉6 ·  ⭐ 10 · 💀) - Scala Library for Reading Flat File Data (CSV/TSV/XLS/XLSX). <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
</details>
<br>

## SBT Plugins

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/coursier/coursier">coursier</a></b> (🥇29 ·  ⭐ 2K) - Pure Scala Artifact Fetching. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/coursier/coursier) (👨‍💻 140 · 🔀 280 · 📥 7.2M · 📋 1K - 30% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/coursier/coursier
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-native-packager">sbt-native-packager</a></b> (🥇22 ·  ⭐ 1.6K · 📉) - sbt Native Packager. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-native-packager) (👨‍💻 270 · 🔀 430 · 📋 780 - 16% open · ⏱️ 08.04.2023):

	```
	git clone https://github.com/sbt/sbt-native-packager
	```
</details>
<details><summary><b><a href="https://github.com/lightbend/mima">mima</a></b> (🥇21 ·  ⭐ 430) - A tool for catching binary incompatibility in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lightbend/mima) (👨‍💻 47 · 🔀 62 · 📋 210 - 11% open · ⏱️ 10.05.2023):

	```
	git clone https://github.com/lightbend/mima
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-assembly">sbt-assembly</a></b> (🥇20 ·  ⭐ 1.9K · 📈) - Deploy ber-JARs. Restart processes. (port of.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-assembly) (👨‍💻 78 · 🔀 220 · 📋 340 - 29% open · ⏱️ 12.02.2023):

	```
	git clone https://github.com/sbt/sbt-assembly
	```
</details>
<details><summary><b><a href="https://github.com/scoverage/sbt-scoverage">sbt-scoverage</a></b> (🥇20 ·  ⭐ 620) - sbt plugin for scoverage. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scoverage/sbt-scoverage) (👨‍💻 71 · 🔀 150 · 📋 250 - 13% open · ⏱️ 03.05.2023):

	```
	git clone https://github.com/scoverage/sbt-scoverage
	```
</details>
<details><summary><b><a href="https://github.com/47degrees/sbt-microsites">sbt-microsites</a></b> (🥇20 ·  ⭐ 320) - An sbt plugin to create awesome microsites for your project. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/47degrees/sbt-microsites) (👨‍💻 71 · 🔀 61 · 📋 140 - 12% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/47degrees/sbt-microsites
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-eclipse">sbt-eclipse</a></b> (🥈19 ·  ⭐ 720) - Plugin for sbt to create Eclipse project definitions. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-eclipse) (👨‍💻 39 · 🔀 170 · 📋 280 - 27% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/sbt/sbt-eclipse
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/mdoc">mdoc</a></b> (🥈19 ·  ⭐ 370) - Typechecked markdown documentation for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalameta/mdoc) (👨‍💻 43 · 🔀 69 · 📋 190 - 24% open · ⏱️ 02.05.2023):

	```
	git clone https://github.com/scalameta/mdoc
	```
</details>
<details><summary><b><a href="https://github.com/marcuslonnberg/sbt-docker">sbt-docker</a></b> (🥈18 ·  ⭐ 730) - Create Docker images directly from sbt. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/marcuslonnberg/sbt-docker) (👨‍💻 26 · 🔀 100 · 📋 87 - 20% open · ⏱️ 06.03.2023):

	```
	git clone https://github.com/marcuslonnberg/sbt-docker
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-release">sbt-release</a></b> (🥈18 ·  ⭐ 620) - A release plugin for sbt. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-release) (👨‍💻 64 · 🔀 160 · 📋 170 - 42% open · ⏱️ 12.05.2023):

	```
	git clone https://github.com/sbt/sbt-release
	```
</details>
<details><summary><b><a href="https://github.com/xerial/sbt-sonatype">sbt-sonatype</a></b> (🥈18 ·  ⭐ 310) - A sbt plugin for publishing Scala/Java projects to the Maven.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/xerial/sbt-sonatype) (👨‍💻 28 · 🔀 49 · 📋 95 - 9% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/xerial/sbt-sonatype
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-ci-release">sbt-ci-release</a></b> (🥈18 ·  ⭐ 260) - sbt plugin to automate Sonatype releases from GitHub Actions. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-ci-release) (👨‍💻 54 · 🔀 62 · 📋 68 - 1% open · ⏱️ 02.05.2023):

	```
	git clone https://github.com/sbt/sbt-ci-release
	```
</details>
<details><summary><b><a href="https://github.com/rtimush/sbt-updates">sbt-updates</a></b> (🥈17 ·  ⭐ 720) - sbt plugin that can check Maven and Ivy repositories for dependency.. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/rtimush/sbt-updates) (👨‍💻 29 · 🔀 50 · 📋 77 - 14% open · ⏱️ 05.05.2023):

	```
	git clone https://github.com/rtimush/sbt-updates
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-buildinfo">sbt-buildinfo</a></b> (🥈17 ·  ⭐ 530) - I know this because build.sbt knows this. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-buildinfo) (👨‍💻 48 · 🔀 86 · 📋 100 - 14% open · ⏱️ 28.04.2023):

	```
	git clone https://github.com/sbt/sbt-buildinfo
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-git">sbt-git</a></b> (🥈17 ·  ⭐ 340) - A git plugin for sbt. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-git) (👨‍💻 50 · 🔀 96 · 📋 110 - 24% open · ⏱️ 22.11.2022):

	```
	git clone https://github.com/sbt/sbt-git
	```
</details>
<details><summary><b><a href="https://github.com/albuch/sbt-dependency-check">sbt-dependency-check</a></b> (🥈17 ·  ⭐ 250) - SBT Plugin for OWASP DependencyCheck. Monitor your.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/albuch/sbt-dependency-check) (👨‍💻 18 · 🔀 33 · 📋 81 - 2% open · ⏱️ 06.05.2023):

	```
	git clone https://github.com/albuch/sbt-dependency-check
	```
</details>
<details><summary><b><a href="https://github.com/earldouglas/xsbt-web-plugin">xsbt-web-plugin</a></b> (🥉16 ·  ⭐ 380) - Servlet support for sbt. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/earldouglas/xsbt-web-plugin) (👨‍💻 33 · 🔀 98 · 📋 260 - 4% open · ⏱️ 29.04.2023):

	```
	git clone https://github.com/earldouglas/xsbt-web-plugin
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-header">sbt-header</a></b> (🥉16 ·  ⭐ 190) - sbt-header is an sbt plugin for creating file headers, e.g... <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-header) (👨‍💻 37 · 🔀 52 · 📋 86 - 12% open · ⏱️ 15.11.2022):

	```
	git clone https://github.com/sbt/sbt-header
	```
</details>
<details><summary><b><a href="https://github.com/tkawachi/sbt-doctest">sbt-doctest</a></b> (🥉16 ·  ⭐ 180) - Doctest for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/tkawachi/sbt-doctest) (👨‍💻 26 · 🔀 27 · 📋 60 - 21% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/tkawachi/sbt-doctest
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/sbt-scalafmt">sbt-scalafmt</a></b> (🥉16 ·  ⭐ 160) - sbt plugin for Scalafmt. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalameta/sbt-scalafmt) (👨‍💻 27 · 🔀 35 · 📋 60 - 6% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/scalameta/sbt-scalafmt
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-jmh">sbt-jmh</a></b> (🥉15 ·  ⭐ 760) - Trust no one, bench everything. - sbt plugin for JMH (Java.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-jmh) (👨‍💻 47 · 🔀 85 · 📋 95 - 28% open · ⏱️ 27.02.2023):

	```
	git clone https://github.com/sbt/sbt-jmh
	```
</details>
<details><summary><b><a href="https://github.com/spray/sbt-revolver">sbt-revolver</a></b> (🥉14 ·  ⭐ 820) - An SBT plugin for dangerously fast development turnaround in.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/spray/sbt-revolver) (👨‍💻 16 · 🔀 54 · 📋 83 - 22% open · ⏱️ 08.04.2023):

	```
	git clone https://github.com/spray/sbt-revolver
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-unidoc">sbt-unidoc</a></b> (🥉14 ·  ⭐ 120) - sbt plugin to create a unified Scaladoc or Javadoc API document.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-unidoc) (👨‍💻 23 · 🔀 28 · 📋 57 - 40% open · ⏱️ 09.05.2023):

	```
	git clone https://github.com/sbt/sbt-unidoc
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/sbt-api-mappings">sbt-api-mappings</a></b> (🥉13 ·  ⭐ 87 · 💤) - An Sbt plugin that fills apiMappings for common Scala.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/sbt-api-mappings) (👨‍💻 11 · 🔀 15 · ⏱️ 14.05.2022):

	```
	git clone https://github.com/ThoughtWorksInc/sbt-api-mappings
	```
</details>
<details><summary><b><a href="https://github.com/tek/splain">splain</a></b> (🥉12 ·  ⭐ 370) - better implicit errors for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/tek/splain) (👨‍💻 18 · 🔀 27 · 📥 80 · 📋 51 - 15% open · ⏱️ 07.11.2022):

	```
	git clone https://github.com/tek/splain
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/sbt-scala-js-map">sbt-scala-js-map</a></b> (🥉11 ·  ⭐ 35) - A Sbt plugin that configures source mapping for Scala.js.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/sbt-scala-js-map) (👨‍💻 3 · 🔀 3 · 📋 4 - 50% open · ⏱️ 10.05.2023):

	```
	git clone https://github.com/ThoughtWorksInc/sbt-scala-js-map
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-groll">sbt-groll</a></b> (🥉10 ·  ⭐ 130 · 💤) - sbt plugin to roll the Git history. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-groll) (👨‍💻 8 · 🔀 8 · 📋 5 - 20% open · ⏱️ 17.12.2021):

	```
	git clone https://github.com/sbt/sbt-groll
	```
</details>
<details><summary>Show 9 hidden projects...</summary>

- <b><a href="https://github.com/xerial/sbt-pack">sbt-pack</a></b> (🥉14 ·  ⭐ 470) - A sbt plugin for creating distributable Scala packages. <code>❗Unlicensed</code>
- <b><a href="https://github.com/sbt/sbt-site">sbt-site</a></b> (🥉14 ·  ⭐ 180) - Site generation for sbt. <code>❗Unlicensed</code>
- <b><a href="https://github.com/tpolecat/tut">tut</a></b> (🥉13 ·  ⭐ 580 · 💀) - doc/tutorial generator for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/softwaremill/scala-clippy">scala-clippy</a></b> (🥉13 ·  ⭐ 320 · 💀) - Good advice for Scala compiler errors. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/sbt/sbt-pgp">sbt-pgp</a></b> (🥉13 ·  ⭐ 140) - PGP plugin for sbt. <code>❗Unlicensed</code>
- <b><a href="https://github.com/oleg-py/better-monadic-for">better-monadic-for</a></b> (🥉12 ·  ⭐ 680 · 💀) - Desugaring scala `for` without implicit `withFilter`s. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/JetBrains/sbt-ide-settings">sbt-ide-settings</a></b> (🥉12 ·  ⭐ 56 · 💀) - SBT plugin for tweaking various IDE settings. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/sbt/sbt-ghpages">sbt-ghpages</a></b> (🥉11 ·  ⭐ 94) - git, site and ghpages support for sbt projects. <code>❗Unlicensed</code>
- <b><a href="https://github.com/shmishleniy/sbt-deploy-ssh">sbt-deploy-ssh</a></b> (🥉9 ·  ⭐ 27 · 💀) - SBT deploy plugin. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Toolkits, extensions & ecosystems

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/milessabin/shapeless">shapeless</a></b> (🥇26 ·  ⭐ 3.3K) - Generic programming for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/milessabin/shapeless) (👨‍💻 150 · 🔀 520 · 📦 100 · 📋 410 - 6% open · ⏱️ 06.05.2023):

	```
	git clone https://github.com/milessabin/shapeless
	```
</details>
<details><summary><b><a href="https://github.com/optics-dev/Monocle">Monocle</a></b> (🥇23 ·  ⭐ 1.6K) - Optics library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/optics-dev/Monocle) (👨‍💻 120 · 🔀 200 · 📋 370 - 11% open · ⏱️ 23.04.2023):

	```
	git clone https://github.com/optics-dev/monocle
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/scalameta">scalameta</a></b> (🥇23 ·  ⭐ 1K) - Library to read, analyze, transform and generate Scala programs. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/scalameta/scalameta) (👨‍💻 110 · 🔀 210 · 📋 1.1K - 12% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/scalameta/scalameta
	```
</details>
<details><summary><b><a href="https://github.com/twitter/util">util</a></b> (🥈22 ·  ⭐ 2.6K · 📈) - Wonderful reusable code from Twitter. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/twitter/util) (👨‍💻 320 · 🔀 560 · 📋 120 - 3% open · ⏱️ 09.05.2023):

	```
	git clone https://github.com/twitter/util
	```
</details>
<details><summary><b><a href="https://github.com/fthomas/refined">refined</a></b> (🥈22 ·  ⭐ 1.6K) - Refinement types for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/fthomas/refined) (👨‍💻 76 · 🔀 150 · 📋 210 - 29% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/fthomas/refined
	```
</details>
<details><summary><b><a href="https://github.com/scalalandio/chimney">chimney</a></b> (🥈19 ·  ⭐ 970) - Scala library for boilerplate-free, type-safe data transformations. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalalandio/chimney) (👨‍💻 24 · 🔀 68 · 📋 150 - 32% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/scalalandio/chimney
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/quicklens">quicklens</a></b> (🥈19 ·  ⭐ 770) - Modify deeply nested case class fields. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/softwaremill/quicklens) (👨‍💻 25 · 🔀 48 · 📋 44 - 38% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/softwaremill/quicklens
	```
</details>
<details><summary><b><a href="https://github.com/atnos-org/eff">eff</a></b> (🥈19 ·  ⭐ 550) - Eff monad for cats - https://atnos-org.github.io/eff. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/atnos-org/eff) (👨‍💻 38 · 🔀 79 · 📋 66 - 4% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/atnos-org/eff
	```
</details>
<details><summary><b><a href="https://github.com/outr/scribe">scribe</a></b> (🥈19 ·  ⭐ 460) - The fastest logging library in the world. Built from scratch in Scala and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/outr/scribe) (👨‍💻 17 · 🔀 34 · 📋 140 - 11% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/outr/scribe
	```
</details>
<details><summary><b><a href="https://github.com/scala/scala-async">async</a></b> (🥈18 ·  ⭐ 1.1K) - An asynchronous programming facility for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scala/scala-async) (👨‍💻 28 · 🔀 82 · 📋 88 - 14% open · ⏱️ 21.04.2023):

	```
	git clone https://github.com/scala/scala-async
	```
</details>
<details><summary><b><a href="https://github.com/pathikrit/better-files">better-files</a></b> (🥈17 ·  ⭐ 1.5K · 📉) - Simple, safe and intuitive Scala I/O. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/pathikrit/better-files) (👨‍💻 60 · 🔀 140 · 📋 210 - 16% open · ⏱️ 17.02.2023):

	```
	git clone https://github.com/pathikrit/better-files
	```
</details>
<details><summary><b><a href="https://github.com/lloydmeta/enumeratum">enumeratum</a></b> (🥈17 ·  ⭐ 1.1K) - A type-safe, reflection-free, powerful enumeration implementation for.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/lloydmeta/enumeratum) (👨‍💻 86 · 🔀 140 · 📋 120 - 19% open · ⏱️ 25.03.2023):

	```
	git clone https://github.com/lloydmeta/enumeratum
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/Dsl.scala">Dsl.scala</a></b> (🥈17 ·  ⭐ 260) - A framework to create embedded Domain-Specific Languages in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/Dsl.scala) (👨‍💻 5 · 🔀 29 · 📋 24 - 25% open · ⏱️ 10.05.2023):

	```
	git clone https://github.com/ThoughtWorksInc/Dsl.scala
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/each">each</a></b> (🥈17 ·  ⭐ 250) - A macro library that converts native imperative syntax to scalazs monadic.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/each) (👨‍💻 15 · 🔀 26 · 📋 32 - 12% open · ⏱️ 03.02.2023):

	```
	git clone https://github.com/ThoughtWorksInc/each
	```
</details>
<details><summary><b><a href="https://github.com/lightbend-labs/scala-logging">scala-logging</a></b> (🥉16 ·  ⭐ 890) - Convenient and performant logging library for Scala wrapping.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lightbend-labs/scala-logging) (👨‍💻 45 · 🔀 130 · 📋 120 - 21% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/lightbend-labs/scala-logging
	```
</details>
<details><summary><b><a href="https://github.com/nscala-time/nscala-time">nscala-time</a></b> (🥉16 ·  ⭐ 870) - A new Scala wrapper for Joda Time based on scala-time. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/nscala-time/nscala-time) (👨‍💻 23 · 🔀 81 · 📋 55 - 10% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/nscala-time/nscala-time
	```
</details>
<details><summary><b><a href="https://github.com/scala-graph/scala-graph">scala-graph</a></b> (🥉16 ·  ⭐ 550) - Graph for Scala is intended to provide basic graph functionality.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scala-graph/scala-graph) (👨‍💻 18 · 🔀 69 · 📋 120 - 7% open · ⏱️ 14.05.2023):

	```
	git clone https://github.com/scala-graph/scala-graph
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/simulacrum">simulacrum</a></b> (🥉15 ·  ⭐ 940) - First class syntax support for type classes in Scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/typelevel/simulacrum) (👨‍💻 34 · 🔀 59 · 📋 73 - 38% open · ⏱️ 21.01.2023):

	```
	git clone https://github.com/typelevel/simulacrum
	```
</details>
<details><summary><b><a href="https://github.com/xerial/larray">larray</a></b> (🥉15 ·  ⭐ 400) - Large off-heap arrays and mmap files for Scala and Java. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/xerial/larray) (👨‍💻 11 · 🔀 40 · 📋 53 - 37% open · ⏱️ 25.11.2022):

	```
	git clone https://github.com/xerial/larray
	```
</details>
<details><summary><b><a href="https://github.com/chronoscala/chronoscala">chronoscala</a></b> (🥉14 ·  ⭐ 67) - A JSR-310 port of nscala_time. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/chronoscala/chronoscala) (👨‍💻 10 · 🔀 7 · 📋 15 - 13% open · ⏱️ 17.05.2023):

	```
	git clone https://github.com/chronoscala/chronoscala
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/enableIf.scala">enableIf.scala</a></b> (🥉13 ·  ⭐ 65) - A library that toggles Scala code at compile-time, like #if.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/enableIf.scala) (👨‍💻 5 · 🔀 5 · 📋 7 - 28% open · ⏱️ 10.05.2023):

	```
	git clone https://github.com/ThoughtWorksInc/enableIf.scala
	```
</details>
<details><summary>Show 13 hidden projects...</summary>

- <b><a href="https://github.com/com-lihaoyi/Ammonite">ammonite</a></b> (🥇25 ·  ⭐ 2.6K) - Scala Scripting. <code>❗Unlicensed</code>
- <b><a href="https://github.com/typelevel/cats">cats</a></b> (🥇24 ·  ⭐ 4.9K) - Lightweight, modular, and extensible library for functional.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scalaz/scalaz">scalaz</a></b> (🥈20 ·  ⭐ 4.6K) - Principled Functional Programming in Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/twitter/cassovary">cassovary</a></b> (🥈17 ·  ⭐ 1K · 💀) - Cassovary is a simple big graph processing library for the JVM. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/frees-io/freestyle">freestyle</a></b> (🥈17 ·  ⭐ 620 · 💀) - A cohesive & pragmatic framework of FP centric Scala libraries. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/scala-hamsters/hamsters">hamsters</a></b> (🥉14 ·  ⭐ 290 · 💀) - A mini Scala utility library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/epfldata/squid">squid</a></b> (🥉12 ·  ⭐ 200 · 💀) - Squid type-safe metaprogramming and compilation framework for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/tersesystems/blindsight">blindsight</a></b> (🥉12 ·  ⭐ 80) - Blindsight is a Scala logging API with DSL based structured.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scala-records/scala-records">scala-records</a></b> (🥉11 ·  ⭐ 160 · 💀) - Labeled records for Scala based on structural refinement.. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code>
- <b><a href="https://github.com/Log4s/log4s">log4s</a></b> (🥉10 ·  ⭐ 170 · 💤) - High-performance SLF4J wrapper for Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/Thangiee/Freasy-Monad">Freasy-Monad</a></b> (🥉8 ·  ⭐ 110 · 💀) - Easy way to create Free Monad using Scala macros with first-.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/maxcellent/lamma">lamma</a></b> (🥉7 ·  ⭐ 89 · 💀) - Lamma schedule generator for Scala is a professional schedule.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/ISCPIF/freedsl">freedsl</a></b> (🥉5 ·  ⭐ 37 · 💀) - Practical effect composition library based on abstract wrapping.. <code>❗Unlicensed</code>
</details>
<br>

## Audio, image and video processing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/sksamuel/scrimage">scrimage</a></b> (🥇20 ·  ⭐ 960) - Java, Scala and Kotlin image processing library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sksamuel/scrimage) (👨‍💻 53 · 🔀 130 · 📋 190 - 3% open · ⏱️ 06.05.2023):

	```
	git clone https://github.com/sksamuel/scrimage
	```
</details>
<details><summary><b><a href="https://github.com/unibas-gravis/scalismo">scalismo</a></b> (🥈18 ·  ⭐ 230) - Scalable Image Analysis and Shape Modelling. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/unibas-gravis/scalismo) (👨‍💻 22 · 🔀 61 · 📋 72 - 18% open · ⏱️ 26.03.2023):

	```
	git clone https://github.com/unibas-gravis/scalismo
	```
</details>
<details><summary><b><a href="https://github.com/outr/media4s">media4s</a></b> (🥈10 ·  ⭐ 29) - Scala command-line wrapper around ffmpeg, ffprobe, ImageMagick, and other.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/outr/media4s) (👨‍💻 3 · 🔀 4 · ⏱️ 13.02.2023):

	```
	git clone https://github.com/outr/media4s
	```
</details>
<details><summary>Show 4 hidden projects...</summary>

- <b><a href="https://github.com/Sciss/ScalaCollider">scalacollider</a></b> (🥈10 ·  ⭐ 200 · 💀) - A Scala sound synthesis library based on SuperCollider. <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code>
- <b><a href="https://github.com/bytedeco/sbt-javacv">sbt-javacv</a></b> (🥉9 ·  ⭐ 90 · 💀) - Start using OpenCV in your JVM project in just 1 line, no separate.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/poslegm/scala-phash">scala-phash</a></b> (🥉8 ·  ⭐ 16 · 💀) - Image comparison by hash codes. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/mgdigital/Chromaprint.scala">chromaprint.scala</a></b> (🥉7 ·  ⭐ 85 · 💀) - Chromaprint/AcoustID audio fingerprinting for the JVM. <code>❗Unlicensed</code>
</details>
<br>

## Dependency injection

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/wvlet/airframe">airframe</a></b> (🥇23 ·  ⭐ 600 · 📈) - Essential Building Blocks for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/wvlet/airframe) (👨‍💻 43 · 🔀 59 · 📋 550 - 17% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/wvlet/airframe
	```
</details>
<details><summary><b><a href="https://github.com/7mind/izumi">izumi</a></b> (🥈21 ·  ⭐ 570) - Productivity-oriented collection of lightweight fancy stuff for Scala.. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/7mind/izumi) (👨‍💻 31 · 🔀 54 · 📋 440 - 12% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/7mind/izumi
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/macwire">macwire</a></b> (🥈19 ·  ⭐ 1.2K) - Lightweight and Nonintrusive Scala Dependency Injection Library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/softwaremill/macwire) (👨‍💻 40 · 🔀 69 · 📋 120 - 42% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/softwaremill/macwire
	```
</details>
<details><summary><b><a href="https://github.com/codingwell/scala-guice">scala-guice</a></b> (🥉18 ·  ⭐ 340) - Scala extensions for Google Guice. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/codingwell/scala-guice) (👨‍💻 26 · 🔀 45 · 📋 60 - 18% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/codingwell/scala-guice
	```
</details>
<details><summary><b><a href="https://github.com/scaldi/scaldi">scaldi</a></b> (🥉15 ·  ⭐ 290 · 💤) - Lightweight Scala Dependency Injection Library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scaldi/scaldi) (👨‍💻 13 · 🔀 23 · 📋 67 - 26% open · ⏱️ 08.06.2022):

	```
	git clone https://github.com/scaldi/scaldi
	```
</details>
<details><summary><b><a href="https://github.com/yakivy/jam">jam</a></b> (🥉9 ·  ⭐ 59) - Incredibly simple DI Scala library. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/yakivy/jam) (👨‍💻 4 · 🔀 3 · ⏱️ 12.05.2023):

	```
	git clone https://github.com/yakivy/jam
	```
</details>
<details><summary>Show 2 hidden projects...</summary>

- <b><a href="https://github.com/dickwall/subcut">subcut</a></b> (🥉10 ·  ⭐ 390 · 💀) - Scala Uniquely Bound Classes Under Traits. <code>❗Unlicensed</code>
- <b><a href="https://github.com/xitrum-framework/sclasner">sclasner</a></b> (🥉6 ·  ⭐ 10 · 💀) - Scala classpath scanner. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## HTTP client and servers

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/http4s/http4s">http4s</a></b> (🥇28 ·  ⭐ 2.4K) - A minimal, idiomatic Scala interface for HTTP. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/http4s/http4s) (👨‍💻 440 · 🔀 760 · 📋 1.3K - 16% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/http4s/http4s
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/tapir">tapir</a></b> (🥇26 ·  ⭐ 1.2K) - Declarative, type-safe web endpoints library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/softwaremill/tapir) (👨‍💻 230 · 🔀 340 · 📋 660 - 15% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/softwaremill/tapir
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/sttp">sttp</a></b> (🥈25 ·  ⭐ 1.4K · 📉) - The Scala HTTP client you always wanted!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/softwaremill/sttp) (👨‍💻 190 · 🔀 260 · 📋 390 - 12% open · ⏱️ 17.05.2023):

	```
	git clone https://github.com/softwaremill/sttp
	```
</details>
<details><summary><b><a href="https://github.com/finagle/finch">finch</a></b> (🥈22 ·  ⭐ 1.6K) - Scala combinator library for building Finagle HTTP services. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/finagle/finch) (👨‍💻 130 · 🔀 220 · 📋 400 - 9% open · ⏱️ 05.05.2023):

	```
	git clone https://github.com/finagle/finch
	```
</details>
<details><summary><b><a href="https://github.com/endpoints4s/endpoints4s">endpoints4s</a></b> (🥈20 ·  ⭐ 400) - Describe HTTP endpoints in Scala and derive clients, servers, and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/endpoints4s/endpoints4s) (👨‍💻 59 · 🔀 90 · 📋 190 - 13% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/endpoints4s/endpoints4s
	```
</details>
<details><summary><b><a href="https://github.com/eed3si9n/scalaxb">scalaxb</a></b> (🥈20 ·  ⭐ 330 · 📉) - scalaxb is an XML data binding tool for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/eed3si9n/scalaxb) (👨‍💻 67 · 🔀 150 · 📋 430 - 34% open · ⏱️ 12.03.2023):

	```
	git clone https://github.com/eed3si9n/scalaxb
	```
</details>
<details><summary><b><a href="https://github.com/playframework/play-ws">play-ws</a></b> (🥉18 ·  ⭐ 210) - Standalone Play WS, an async HTTP client with fluent API. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/play-ws) (👨‍💻 47 · 🔀 82 · 📋 140 - 48% open · ⏱️ 08.05.2023):

	```
	git clone https://github.com/playframework/play-ws
	```
</details>
<details><summary><b><a href="https://github.com/scalaj/scalaj-http">scalaj-http</a></b> (🥉15 ·  ⭐ 980 · 💤) - Simple scala wrapper for HttpURLConnection. OAuth included. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalaj/scalaj-http) (👨‍💻 29 · 🔀 120 · 📋 140 - 20% open · ⏱️ 03.04.2022):

	```
	git clone https://github.com/scalaj/scalaj-http
	```
</details>
<details><summary><b><a href="https://github.com/dispatch/reboot">reboot</a></b> (🥉15 ·  ⭐ 430) - Scala wrapper for the Java AsyncHttpClient. <code><a href="http://bit.ly/37RvQcA">❗️LGPL-3.0</a></code></summary>

- [GitHub](https://github.com/dispatch/reboot) (👨‍💻 38 · 🔀 100 · 📋 100 - 4% open · ⏱️ 02.02.2023):

	```
	git clone https://github.com/dispatch/reboot
	```
</details>
<details><summary>Show 7 hidden projects...</summary>

- <b><a href="https://github.com/akka/akka-http">akka-http</a></b> (🥈23 ·  ⭐ 1.3K) - The Streaming-first HTTP server/module of Akka. <code>❗Unlicensed</code>
- <b><a href="https://github.com/com-lihaoyi/requests-scala">requests-scala</a></b> (🥉15 ·  ⭐ 680) - A Scala port of the popular Python Requests HTTP client:.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/daviddenton/fintrospect">fintrospect</a></b> (🥉11 ·  ⭐ 93 · 💀) - Implement fast, type-safe HTTP webservices for Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/criteo/lolhttp">lolhttp</a></b> (🥉11 ·  ⭐ 93 · 💀) - An HTTP Server and Client library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/hmil/RosHTTP">roshttp</a></b> (🥉9 ·  ⭐ 120 · 💀) - Unified Scala.js + Scala HTTP client API. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/outr/jefe">jefe</a></b> (🥉7 ·  ⭐ 8 · 💀) - Manages installation, updating, downloading, launching, error reporting, and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/zero-deps/frontier">frontier</a></b> (🥉5 ·  ⭐ 10) - Fast, efficient, pure-functional, effect-free websocket, http and.. <code>❗Unlicensed</code>
</details>
<br>

## Libraries for testing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/gatling/gatling">gatling</a></b> (🥇26 ·  ⭐ 5.9K) - Modern Load Testing as Code. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/gatling/gatling) (👨‍💻 220 · 🔀 1.1K · 📋 3.6K - 1% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/gatling/gatling
	```
</details>
<details><summary><b><a href="https://github.com/holdenk/spark-testing-base">spark-testing-base</a></b> (🥇23 ·  ⭐ 1.4K) - Base classes to use when writing tests with Spark. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/holdenk/spark-testing-base) (👨‍💻 60 · 🔀 350 · 📦 32 · 📋 200 - 41% open · ⏱️ 02.05.2023):

	```
	git clone https://github.com/holdenk/spark-testing-base
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/scalacheck">scalacheck</a></b> (🥈21 ·  ⭐ 1.9K) - Property-based testing for Scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/typelevel/scalacheck) (👨‍💻 140 · 🔀 380 · 📋 330 - 14% open · ⏱️ 13.05.2023):

	```
	git clone https://github.com/typelevel/scalacheck
	```
</details>
<details><summary><b><a href="https://github.com/scalatest/scalatest">scalatest</a></b> (🥈21 ·  ⭐ 1.1K · 📈) - A testing tool for Scala and Java developers. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalatest/scalatest) (👨‍💻 59 · 🔀 320 · 📋 750 - 56% open · ⏱️ 29.12.2022):

	```
	git clone https://github.com/scalatest/scalatest
	```
</details>
<details><summary><b><a href="https://github.com/agourlay/cornichon">cornichon</a></b> (🥈19 ·  ⭐ 220) - Scala DSL for testing HTTP JSON API. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/agourlay/cornichon) (👨‍💻 18 · 🔀 28 · 📋 150 - 15% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/agourlay/cornichon
	```
</details>
<details><summary><b><a href="https://github.com/paulbutcher/ScalaMock">scalamock</a></b> (🥈18 ·  ⭐ 480) - Native Scala mocking framework. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/paulbutcher/ScalaMock) (👨‍💻 33 · 🔀 89 · 📋 220 - 10% open · ⏱️ 28.04.2023):

	```
	git clone https://github.com/paulbutcher/scalamock
	```
</details>
<details><summary><b><a href="https://github.com/stryker-mutator/stryker4s">stryker4s</a></b> (🥈18 ·  ⭐ 180) - Mutation testing for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/stryker-mutator/stryker4s) (👨‍💻 29 · 🔀 29 · 📋 150 - 21% open · ⏱️ 16.05.2023):

	```
	git clone https://github.com/stryker-mutator/stryker4s
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/munit">munit</a></b> (🥉17 ·  ⭐ 370) - Scala testing library with actionable errors and extensible APIs. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalameta/munit) (👨‍💻 43 · 🔀 69 · 📋 130 - 26% open · ⏱️ 15.05.2023):

	```
	git clone https://github.com/scalameta/munit
	```
</details>
<details><summary><b><a href="https://github.com/testcontainers/testcontainers-scala">testcontainers-scala</a></b> (🥉16 ·  ⭐ 580) - Docker containers for testing in scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/testcontainers/testcontainers-scala) (👨‍💻 74 · 🔀 110 · 📋 96 - 29% open · ⏱️ 16.04.2023):

	```
	git clone https://github.com/testcontainers/testcontainers-scala
	```
</details>
<details><summary><b><a href="https://github.com/mockito/mockito-scala">mockito-scala</a></b> (🥉16 ·  ⭐ 320) - Mockito for Scala language. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/mockito/mockito-scala) (👨‍💻 28 · 🔀 49 · 📋 120 - 19% open · ⏱️ 20.03.2023):

	```
	git clone https://github.com/mockito/mockito-scala
	```
</details>
<details><summary><b><a href="https://github.com/monix/minitest">minitest</a></b> (🥉15 ·  ⭐ 180 · 💤) - The super light testing library for Scala and Scala.js. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/monix/minitest) (👨‍💻 23 · 🔀 30 · ⏱️ 28.11.2021):

	```
	git clone https://github.com/monix/minitest
	```
</details>
<details><summary><b><a href="https://github.com/scalaprops/scalaprops">scalaprops</a></b> (🥉13 ·  ⭐ 270) - property based testing library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/scalaprops/scalaprops) (👨‍💻 12 · 🔀 19 · 📋 19 - 36% open · ⏱️ 18.05.2023):

	```
	git clone https://github.com/scalaprops/scalaprops
	```
</details>
<details><summary>Show 5 hidden projects...</summary>

- <b><a href="https://github.com/etorreborre/specs2">specs2</a></b> (🥈19 ·  ⭐ 730) - Software Specifications for Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/disneystreaming/weaver-test">weaver-test</a></b> (🥉16 ·  ⭐ 370) - A test framework that runs everything in parallel. <code>❗Unlicensed</code>
- <b><a href="https://github.com/com-lihaoyi/utest">utest</a></b> (🥉14 ·  ⭐ 470) - A simple testing framework for Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scalameter/scalameter">scalameter</a></b> (🥉12 ·  ⭐ 500) - Microbenchmarking and performance regression testing.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/xitrum-framework/scalive">scalive</a></b> (🥉11 ·  ⭐ 200 · 💀) - Connect a Scala REPL to running JVM processes without any prior setup. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>

---

## Related Resources

- [**Best-of lists**](https://best-of.org): Discover other best-of lists with awesome open-source projects on all kinds of topics.

## Contribution

Contributions are encouraged and always welcome! If you like to add or update projects, choose one of the following ways:

- Open an issue by selecting one of the provided categories from the [issue page](https://github.com/stkeky/best-of-scala/issues/new/choose) and fill in the requested information.
- Modify the [projects.yaml](https://github.com/stkeky/best-of-scala/blob/main/projects.yaml) with your additions or changes, and submit a pull request. This can also be done directly via the [Github UI](https://github.com/stkeky/best-of-scala/edit/main/projects.yaml).

If you like to contribute to or share suggestions regarding the project metadata collection or markdown generation, please refer to the [best-of-generator](https://github.com/best-of-lists/best-of-generator) repository. If you like to create your own best-of list, we recommend to follow [this guide](https://github.com/best-of-lists/best-of/blob/main/create-best-of-list.md).

For more information on how to add or update projects, please read the [contribution guidelines](https://github.com/stkeky/best-of-scala/blob/main/CONTRIBUTING.md). By participating in this project, you agree to abide by its [Code of Conduct](https://github.com/stkeky/best-of-scala/blob/main/.github/CODE_OF_CONDUCT.md).

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
