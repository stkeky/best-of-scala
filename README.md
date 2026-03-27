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
    <a href="#Contents" title="Project Count"><img src="https://img.shields.io/badge/projects-400-blue.svg?color=5ac4bf"></a>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fstkeky%2Fbest-of-scala&count_bg=%23FF0000&title_bg=%23555555&icon=scala.svg&icon_color=%23FF0000&title=hits&edge_flat=false"/></a>
    <a href="#Contribution" title="Contributions are welcome"><img src="https://img.shields.io/badge/contributions-welcome-green.svg"></a>
    <a href="https://github.com/stkeky/best-of-scala/releases" title="Best-of Updates"><img src="https://img.shields.io/github/release-date/stkeky/best-of-scala?color=green&label=updated"></a>
</p>

This curated list contains 400 awesome open-source projects with a total of 420K stars grouped into 22 categories. All projects are ranked by a project-quality score, which is calculated based on various metrics automatically collected from GitHub and different package managers. If you like to add or update projects, feel free to open an [issue](https://github.com/stkeky/best-of-scala/issues/new/choose), submit a [pull request](https://github.com/stkeky/best-of-scala/pulls), or directly edit the [projects.yaml](https://github.com/stkeky/best-of-scala/edit/main/projects.yaml). Contributions are very welcome!

> 🧙‍♂️  Discover other [best-of lists](https://best-of.org) or [create your own](https://github.com/best-of-lists/best-of/blob/main/create-best-of-list.md).

## Contents

- [Development Cycle](#development-cycle) _15 projects_
- [Database Clients](#database-clients) _48 projects_
- [JSON](#json) _19 projects_
- [Web Frameworks](#web-frameworks) _18 projects_
- [File Processing](#file-processing) _7 projects_
- [SBT Plugins](#sbt-plugins) _36 projects_
- [Toolkits, Extensions & Ecosystems](#toolkits-extensions--ecosystems) _34 projects_
- [Media Processing](#media-processing) _7 projects_
- [Dependency Injection](#dependency-injection) _9 projects_
- [HTTP](#http) _18 projects_
- [Testing](#testing) _17 projects_
- [Security](#security) _12 projects_
- [Data Handling](#data-handling) _14 projects_
- [Parsers](#parsers) _6 projects_
- [Reactive Programming](#reactive-programming) _12 projects_
- [Development Environment](#development-environment) _9 projects_
- [Templating Engines](#templating-engines) _5 projects_
- [Business Intelligence](#business-intelligence) _26 projects_
- [Big Data](#big-data) _14 projects_
- [Distributed](#distributed) _12 projects_
- [ScalaJS](#scalajs) _7 projects_
- [Logging](#logging) _4 projects_
- [Others](#others) _51 projects_

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
- <img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13">&nbsp; Libraries compatible with ZIO
- <img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13">&nbsp; Libraries spawned from or a part of PlayFramework
- <img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13">&nbsp; Projects compatible with Scala.js
- <img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13">&nbsp; Projects compatible with Scala 3

<br>

## Development Cycle

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Tools for compiling, testing, packaging, formatting, linting, ... your Scala code_

<details><summary><b><a href="https://github.com/sbt/sbt">sbt</a></b> (🥇35 ·  ⭐ 4.9K) - sbt, the interactive build tool. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sbt/sbt) (👨‍💻 550 · 🔀 1K · 📥 31M · 📋 4.6K - 10% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/sbt/sbt
	```
</details>
<details><summary><b><a href="https://github.com/gitbucket/gitbucket">gitbucket</a></b> (🥇34 ·  ⭐ 9.4K) - A Git platform powered by Scala with easy installation, high.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/gitbucket/gitbucket) (👨‍💻 200 · 🔀 1.3K · 📥 470K · 📦 21 · 📋 1.8K - 17% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/gitbucket/gitbucket
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/mill">mill</a></b> (🥈29 ·  ⭐ 2.7K · 📈) - A better build tool for Java, Scala and Kotlin: Simpler than Maven,.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/com-lihaoyi/mill) (👨‍💻 280 · 🔀 440 · 📥 57K · 📋 1.8K - 9% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/com-lihaoyi/mill
	```
</details>
<details><summary><b><a href="https://github.com/scalacenter/bloop">bloop</a></b> (🥈27 ·  ⭐ 940) - Bloop is a build server and CLI tool to compile, test and run.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalacenter/bloop) (👨‍💻 160 · 🔀 210 · 📥 270K · 📋 800 - 11% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/scalacenter/bloop
	```
</details>
<details><summary><b><a href="https://github.com/VirtusLab/scala-cli">scala-cli</a></b> (🥈27 ·  ⭐ 630) - Scala CLI is a command-line tool to interact with the Scala.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/VirtusLab/scala-cli) (👨‍💻 110 · 🔀 160 · 📥 3.5M · 📋 1.2K - 28% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/VirtusLab/scala-cli
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/metals">metals</a></b> (🥈26 ·  ⭐ 2.3K) - Scala language server with rich IDE features. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalameta/metals) (👨‍💻 250 · 🔀 420 · 📥 31 · 📋 2.3K - 10% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/scalameta/metals
	```
</details>
<details><summary><b><a href="https://github.com/foundweekends/giter8">giter8</a></b> (🥉22 ·  ⭐ 1.8K) - a command line tool to apply templates defined on GitHub. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/foundweekends/giter8) (👨‍💻 85 · 🔀 220 · 📋 280 - 17% open · ⏱️ 21.03.2026):

	```
	git clone https://github.com/foundweekends/giter8
	```
</details>
<details><summary><b><a href="https://github.com/wartremover/wartremover">wartremover</a></b> (🥉22 ·  ⭐ 1.1K) - Flexible Scala code linting tool. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/wartremover/wartremover) (👨‍💻 92 · 🔀 120 · 📥 750 · 📋 360 - 28% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/wartremover/wartremover
	```
</details>
<details><summary><b><a href="https://github.com/scalacenter/scalafix">scalafix</a></b> (🥉22 ·  ⭐ 870) - Refactoring and linting tool for Scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalacenter/scalafix) (👨‍💻 120 · 🔀 190 · 📥 39 · 📋 740 - 9% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/scalacenter/scalafix
	```
</details>
<details><summary><b><a href="https://github.com/oyvindberg/bleep">bleep</a></b> (🥉21 ·  ⭐ 170) - A bleeping fast scala build tool!. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/oyvindberg/bleep) (👨‍💻 24 · 🔀 26 · 📥 19K · 📋 130 - 47% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/oyvindberg/bleep
	```
</details>
<details><summary><b><a href="https://github.com/scapegoat-scala/scapegoat">scapegoat</a></b> (🥉20 ·  ⭐ 550) - Scala compiler plugin for static code analysis. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scapegoat-scala/scapegoat) (👨‍💻 69 · 🔀 96 · 📋 260 - 18% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scapegoat-scala/scapegoat
	```
</details>
<details><summary><b><a href="https://github.com/propensive/fury">fury</a></b> (🥉10 ·  ⭐ 86 · 💤) - A build tool for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/propensive/fury) (👨‍💻 1 · 🔀 2 · 📥 1.7K · 📋 57 - 35% open · ⏱️ 27.12.2024):

	```
	git clone https://github.com/propensive/fury
	```
</details>
<details><summary>Show 3 hidden projects...</summary>

- <b><a href="https://github.com/scala-ide/scalariform">scalariform</a></b> (🥉17 ·  ⭐ 520 · 💀) - Scala source code formatter. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/scalastyle/scalastyle">scalastyle</a></b> (🥉16 ·  ⭐ 680 · 💀) - scalastyle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/codacy/codacy-scalameta">codacy-scalameta</a></b> (🥉9 ·  ⭐ 35) - Codacy tool for Scalameta. <code>❗Unlicensed</code>
</details>
<br>

## Database Clients

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for connecting to, operating, and querying databases._

<details><summary><b><a href="https://github.com/Philippus/elastic4s">elastic4s</a></b> (🥇26 ·  ⭐ 1.6K) - Elasticsearch Scala Client - Reactive, Non Blocking, Type.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/Philippus/elastic4s) (👨‍💻 420 · 🔀 680 · 📋 1.2K - 1% open · ⏱️ 24.03.2026):

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
<details><summary><b><a href="https://github.com/typelevel/doobie">doobie</a></b> (🥇25 ·  ⭐ 2.2K) - Functional JDBC layer for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/doobie) (👨‍💻 200 · 🔀 370 · 📋 590 - 21% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/tpolecat/doobie
	```
</details>
<details><summary><b><a href="https://github.com/scalikejdbc/scalikejdbc">scalikejdbc</a></b> (🥇25 ·  ⭐ 1.3K) - A tidy SQL-based DB access library for Scala developers... <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalikejdbc/scalikejdbc) (👨‍💻 120 · 🔀 230 · 📋 490 - 6% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/scalikejdbc/scalikejdbc
	```
- [Maven](https://search.maven.org/artifact/org.scalikejdbc/scalikejdbc_2.13) (📦 27 · ⏱️ 16.08.2025):
	```
	<dependency>
		<groupId>org.scalikejdbc</groupId>
		<artifactId>scalikejdbc_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/slick/slick">slick</a></b> (🥇24 ·  ⭐ 2.7K) - Slick (Scala Language Integrated Connection Kit) is a modern.. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/slick/slick) (👨‍💻 210 · 🔀 620 · 📋 1.4K - 30% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/slick/slick
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/skunk">skunk</a></b> (🥇23 ·  ⭐ 1.6K · 📈) - A data access library for Scala + Postgres. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/skunk) (👨‍💻 97 · 🔀 170 · 📋 170 - 53% open · ⏱️ 20.03.2026):

	```
	git clone https://github.com/typelevel/skunk
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-quill">quill</a></b> (🥈22 ·  ⭐ 2.2K) - Compile-time Language Integrated Queries for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-quill) (👨‍💻 150 · 🔀 350 · 📋 1.1K - 30% open · ⏱️ 06.08.2025):

	```
	git clone https://github.com/zio/zio-quill
	```
</details>
<details><summary><b><a href="https://github.com/ReactiveMongo/ReactiveMongo">ReactiveMongo</a></b> (🥈20 ·  ⭐ 850) - Non-blocking, Reactive MongoDB Driver for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/ReactiveMongo/ReactiveMongo) (👨‍💻 90 · 🔀 230 · 📋 390 - 3% open · ⏱️ 18.03.2026):

	```
	git clone https://github.com/ReactiveMongo/ReactiveMongo
	```
</details>
<details><summary><b><a href="https://github.com/tminglei/slick-pg">slick-pg</a></b> (🥈20 ·  ⭐ 840) - Slick extensions for PostgreSQL. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/tminglei/slick-pg) (👨‍💻 98 · 🔀 180 · 📋 400 - 29% open · ⏱️ 10.03.2026):

	```
	git clone https://github.com/tminglei/slick-pg
	```
</details>
<details><summary><b><a href="https://github.com/scanamo/scanamo">scanamo</a></b> (🥈19 ·  ⭐ 320) - Simpler DynamoDB access for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scanamo/scanamo) (👨‍💻 98 · 🔀 120 · 📋 230 - 24% open · ⏱️ 12.12.2025):

	```
	git clone https://github.com/scanamo/scanamo
	```
</details>
<details><summary><b><a href="https://github.com/playframework/anorm">anorm</a></b> (🥈18 ·  ⭐ 250) - The Anorm database library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/anorm) (👨‍💻 58 · 🔀 76 · 📋 85 - 14% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/playframework/anorm
	```
</details>
<details><summary><b><a href="https://github.com/couchbase/couchbase-jvm-clients">couchbase-jvm-clients</a></b> (🥈18 ·  ⭐ 53) - The Couchbase Monorepo for JVM Clients: Java, Scala,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/couchbase/couchbase-jvm-clients) (👨‍💻 27 · 🔀 44 · 📦 180 · 📋 20 - 5% open · ⏱️ 23.03.2026):

	```
	git clone https://github.com/couchbase/couchbase-jvm-clients
	```
</details>
<details><summary><b><a href="https://github.com/squeryl/squeryl">squeryl</a></b> (🥈17 ·  ⭐ 590) - A Scala DSL for talking with databases with minimum verbosity.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/squeryl/squeryl) (👨‍💻 60 · 🔀 140 · 📋 150 - 25% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/squeryl/squeryl
	```
</details>
<details><summary><b><a href="https://github.com/CleverCloud/pulsar4s">pulsar4s</a></b> (🥈17 ·  ⭐ 230) - Idiomatic, typesafe, and reactive Scala client for Apache Pulsar. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/CleverCloud/pulsar4s) (👨‍💻 30 · 🔀 45 · 📋 74 - 41% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/CleverCloud/pulsar4s
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-redis">zio-redis</a></b> (🥈17 ·  ⭐ 130) - A ZIO-based redis client. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-redis) (👨‍💻 50 · 🔀 68 · 📋 150 - 15% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/zio/zio-redis
	```
</details>
<details><summary><b><a href="https://github.com/takapi327/ldbc">ldbc</a></b> (🥈17 ·  ⭐ 92) - ldbc is Pure functional JDBC layer with Cats Effect 3 and Scala 3. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/takapi327/ldbc) (👨‍💻 6 · 🔀 6 · 📋 33 - 24% open · ⏱️ 23.03.2026):

	```
	git clone https://github.com/takapi327/ldbc
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/zio-elasticsearch">zio-elasticsearch</a></b> (🥈17 ·  ⭐ 61) - ZIO Elasticsearch is a type-safe and streaming-.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lambdaworks/zio-elasticsearch) (👨‍💻 22 · 🔀 21 · 📋 54 - 29% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/lambdaworks/zio-elasticsearch
	```
- [Maven](https://search.maven.org/artifact/io.lambdaworks/zio-elasticsearch_3) (⏱️ 13.01.2026):
	```
	<dependency>
		<groupId>io.lambdaworks</groupId>
		<artifactId>zio-elasticsearch_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-dynamodb">zio-dynamodb</a></b> (🥈17 ·  ⭐ 46) - Simple, type-safe, and efficient access to DynamoDB. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-dynamodb) (👨‍💻 22 · 🔀 23 · 📋 110 - 19% open · ⏱️ 20.03.2026):

	```
	git clone https://github.com/zio/zio-dynamodb
	```
</details>
<details><summary><b><a href="https://github.com/crobox/clickhouse-scala-client">clickhouse-scala-client</a></b> (🥈16 ·  ⭐ 120) - Clickhouse Scala Client with Reactive Streams support. <code><a href="http://bit.ly/37RvQcA">❗️LGPL-3.0</a></code></summary>

- [GitHub](https://github.com/crobox/clickhouse-scala-client) (👨‍💻 22 · 🔀 28 · 📋 38 - 39% open · ⏱️ 27.02.2026):

	```
	git clone https://github.com/crobox/clickhouse-scala-client
	```
</details>
<details><summary><b><a href="https://github.com/neotypes/neotypes">neotypes</a></b> (🥉15 ·  ⭐ 180) - Scala lightweight, type-safe, asynchronous driver for neo4j. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/neotypes/neotypes) (👨‍💻 18 · 🔀 37 · 📋 70 - 18% open · ⏱️ 01.09.2025):

	```
	git clone https://github.com/neotypes/neotypes
	```
</details>
<details><summary><b><a href="https://github.com/lucidsoftware/relate">relate</a></b> (🥉13 ·  ⭐ 160 · 💤) - Performant database access in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lucidsoftware/relate) (👨‍💻 19 · 🔀 15 · 📥 2.6K · 📋 25 - 48% open · ⏱️ 03.02.2025):

	```
	git clone https://github.com/lucidsoftware/relate
	```
</details>
<details><summary><b><a href="https://github.com/laserdisc-io/laserdisc">laserdisc</a></b> (🥉12 ·  ⭐ 100) - A Future-free Fs2 native pure FP Redis client. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/laserdisc-io/laserdisc) (👨‍💻 11 · 🔀 14 · 📋 27 - 59% open · ⏱️ 05.03.2026):

	```
	git clone https://github.com/laserdisc-io/laserdisc
	```
</details>
<details><summary><b><a href="https://github.com/scalamolecule/molecule">molecule</a></b> (🥉11 ·  ⭐ 20) - Scala 3 library to compose domain-tailored data from SQL.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalamolecule/molecule) (⏱️ 19.01.2026):

	```
	git clone https://github.com/scalamolecule/molecule
	```
</details>
<details><summary><b><a href="https://github.com/outr/lucene4s">lucene4s</a></b> (🥉10 ·  ⭐ 54 · 💤) - Light-weight convenience wrapper around Lucene to simplify.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/outr/lucene4s) (👨‍💻 6 · 🔀 19 · 📋 11 - 27% open · ⏱️ 01.02.2025):

	```
	git clone https://github.com/outr/lucene4s
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-sql</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-sql_3) (📦 4 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-sql_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-postgres-driver</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-postgres-driver_3) (📦 2 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-postgres-driver_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-mysql-driver</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-mysql-driver_3) (📦 2 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-mysql-driver_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/sake92/squery">squery</a></b> (🥉9 ·  ⭐ 21) - Simple SQL queries in Scala 3. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sake92/squery) (👨‍💻 1 · 📋 13 - 30% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/sake92/squery
	```
</details>
<details><summary><b><a href="https://github.com/zero-deps/kvs">kvs</a></b> (🥉8 ·  ⭐ 24 · 💤) - Highly available distributed strong eventual consistent and sequentially.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/zero-deps/kvs) (👨‍💻 18 · 🔀 2 · ⏱️ 28.09.2024):

	```
	git clone https://github.com/zero-deps/kvs
	```
</details>
<details><summary>Show 20 hidden projects...</summary>

- <b><a href="https://github.com/outworkers/phantom">phantom</a></b> (🥈19 ·  ⭐ 1K · 💀) - Schema safe, type-safe, reactive Scala driver for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/etaty/rediscala">rediscala</a></b> (🥈16 ·  ⭐ 790 · 💀) - Non-blocking, Reactive Redis driver for Scala (with Sentinel.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/aselab/scala-activerecord">scala-activerecord</a></b> (🥉15 ·  ⭐ 320 · 💀) - ActiveRecord-like ORM library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/debasishg/scala-redis">scala-redis</a></b> (🥉14 ·  ⭐ 1K · 💀) - A scala library for connecting to a redis server, or a.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/Livestream/scredis">scredis</a></b> (🥉13 ·  ⭐ 150 · 💀) - Non-blocking, ultra-fast Scala Redis client built on top of Akka.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ing-bank/scruid">scruid</a></b> (🥉13 ·  ⭐ 120 · 💀) - Scala + Druid: Scruid. A library that allows you to compose.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/finagle/finagle-postgres">finagle-postgres</a></b> (🥉13 ·  ⭐ 81 · 💀) - PostgreSQL protocol support for Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/mongodb/casbah">casbah</a></b> (🥉12 ·  ⭐ 510 · 💀) - Casbah is now officially end-of-life (EOL). <code>❗Unlicensed</code>
- <b><a href="https://github.com/salat/salat">salat</a></b> (🥉12 ·  ⭐ 490 · 💀) - Salat is a simple serialization library for case classes. <code>❗Unlicensed</code>
- <b><a href="https://github.com/lastland/scala-forklift">scala-forklift</a></b> (🥉11 ·  ⭐ 190 · 💀) - Type-safe data migration tool for Slick, Git and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/beloglazov/couchdb-scala">couchdb-scala</a></b> (🥉11 ·  ⭐ 64 · 💀) - A purely functional Scala client for CouchDB. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/longevityframework/longevity">longevity</a></b> (🥉10 ·  ⭐ 100 · 💀) - A Persistence Framework for Scala and NoSQL. <code>❗Unlicensed</code>
- <b><a href="https://github.com/ReactiveCouchbase/reactivecouchbase-rs-core">ReactiveCouchbase-rs-core</a></b> (🥉9 ·  ⭐ 26 · 💀) - New ReactiveCouchbase driver using reactive-streams. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/monix/shade">shade</a></b> (🥉8 ·  ⭐ 110 · 💀) - Memcached client for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/outworkers/morpheus">morpheus</a></b> (🥉8 ·  ⭐ 100 · 💀) - Reactive type-safe Scala driver for SQL databases. <code>❗Unlicensed</code>
- <b><a href="https://github.com/outr/scalarelational">scalarelational</a></b> (🥉8 ·  ⭐ 59 · 💀) - Type-Safe framework for defining, modifying, and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/innFactory/akka-persistence-gcp-datastore">akka-persistence-gcp-datastore</a></b> (🥉8 ·  ⭐ 19 · 💀) - akka-persistence-gcp-datastore is a journal and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/wangzaixiang/scala-sql">scala-sql</a></b> (🥉7 ·  ⭐ 89) - scala SQL api. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/mingchuno/etcd4s">etcd4s</a></b> (🥉7 ·  ⭐ 31 · 💀) - Scala etcd client implementing V3 APIs. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/kostaskougios/mapperdao">mapperdao</a></b> (🥉6 ·  ⭐ 14 · 💀) - A Scala ORM library. <code>❗Unlicensed</code>
</details>
<br>

## JSON

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries that handle JSON format._

<details><summary><b><a href="https://github.com/circe/circe">circe</a></b> (🥇28 ·  ⭐ 2.5K) - Yet another JSON library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/circe/circe) (👨‍💻 300 · 🔀 540 · 📋 580 - 21% open · ⏱️ 23.03.2026):

	```
	git clone https://github.com/circe/circe
	```
- [Maven](https://search.maven.org/artifact/io.circe/circe-core_2.13) (📦 950 · ⏱️ 13.06.2025):
	```
	<dependency>
		<groupId>io.circe</groupId>
		<artifactId>circe-core_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/argonaut-io/argonaut">argonaut</a></b> (🥇23 ·  ⭐ 550) - Purely functional JSON parser and library in scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/argonaut-io/argonaut) (👨‍💻 66 · 🔀 110 · 📋 200 - 14% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/argonaut-io/argonaut
	```
- [Maven](https://search.maven.org/artifact/io.argonaut/argonaut_2.13) (📦 50 · ⏱️ 01.06.2024):
	```
	<dependency>
		<groupId>io.argonaut</groupId>
		<artifactId>argonaut_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/json4s/json4s">json4s</a></b> (🥈22 ·  ⭐ 1.5K) - JSON library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/json4s/json4s) (👨‍💻 160 · 🔀 320 · 📋 430 - 36% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/json4s/json4s
	```
</details>
<details><summary><b><a href="https://github.com/plokhotnyuk/jsoniter-scala">jsoniter-scala</a></b> (🥈21 ·  ⭐ 810) - Scala macros for compile-time generation of safe and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/plokhotnyuk/jsoniter-scala) (👨‍💻 34 · 🔀 110 · 📦 1 · 📋 380 - 25% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/plokhotnyuk/jsoniter-scala
	```
</details>
<details><summary><b><a href="https://github.com/zio/zio-json">zio-json</a></b> (🥈19 ·  ⭐ 430) - Fast, secure JSON library with tight ZIO integration. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://zio.dev/img/navbar_brand.png" style="display:inline;" width="13" height="13"></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio-json) (👨‍💻 75 · 🔀 150 · 📋 200 - 38% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/zio/zio-json
	```
</details>
<details><summary><b><a href="https://github.com/FasterXML/jackson-module-scala">jackson-module-scala</a></b> (🥈18 ·  ⭐ 510) - Add-on module for Jackson.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/FasterXML/jackson-module-scala) (👨‍💻 59 · 🔀 140 · 📋 550 - 10% open · ⏱️ 24.02.2026):

	```
	git clone https://github.com/FasterXML/jackson-module-scala
	```
</details>
<details><summary><b><a href="https://github.com/playframework/play-json">play-json</a></b> (🥈18 ·  ⭐ 370) - The Play JSON library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/play-json) (👨‍💻 70 · 🔀 140 · 📋 160 - 31% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/playframework/play-json
	```
</details>
<details><summary><b><a href="https://github.com/gnieh/diffson">diffson</a></b> (🥉17 ·  ⭐ 330) - A scala diff/patch library for Json. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/gnieh/diffson) (👨‍💻 35 · 🔀 51 · 📋 62 - 22% open · ⏱️ 15.03.2026):

	```
	git clone https://github.com/gnieh/diffson
	```
</details>
<details><summary><b><a href="https://github.com/sirthias/borer">borer</a></b> (🥉12 ·  ⭐ 240) - Efficient CBOR and JSON (de)serialization in Scala. <code><a href="http://bit.ly/3postzC">MPL-2.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sirthias/borer) (👨‍💻 11 · 🔀 16 · 📋 130 - 8% open · ⏱️ 12.01.2026):

	```
	git clone https://github.com/sirthias/borer
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-serde-json</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-serde-json_3) (📦 3 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-serde-json_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/nrktkt/ninny-json">ninny-json</a></b> (🥉9 ·  ⭐ 21) - JSON typeclasses that know the difference between null and.. <code><a href="http://bit.ly/3rvuUlR">Unlicense</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/nrktkt/ninny-json) (👨‍💻 6 · 🔀 8 · 📋 14 - 57% open · ⏱️ 30.07.2025):

	```
	git clone https://github.com/nrktkt/ninny-json
	```
</details>
<details><summary>Show 8 hidden projects...</summary>

- <b><a href="https://github.com/spray/spray-json">spray-json</a></b> (🥈21 ·  ⭐ 2.5K · 💀) - A lightweight, clean and simple JSON implementation in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/typelevel/jawn">jawn</a></b> (🥉16 ·  ⭐ 440) - Jawn is for parsing jay-sawn (JSON). <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scala-jsonapi/scala-jsonapi">scala-jsonapi</a></b> (🥉12 ·  ⭐ 110 · 💀) - Scala support library for integrating the JSON API spec with.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/gzoller/ScalaJack">ScalaJack</a></b> (🥉10 ·  ⭐ 110) - Fast JSON parser/generator for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/fomkin/pushka">pushka</a></b> (🥉10 ·  ⭐ 81 · 💀) - ABANDONED Pure Scala serialization library with annotations. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/sake92/tupson">tupson</a></b> (🥉10 ·  ⭐ 8) - Stupid simple Scala 3 library for writing and reading JSON. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/battermann/sbt-json">sbt-json</a></b> (🥉8 ·  ⭐ 31 · 💀) - sbt plugin that generates Scala case classes for easy, statically typed.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/nestorpersist/json">json</a></b> (🥉3 ·  ⭐ 11 · 💀) - Persist-Json, a Fast Json Parser Written in Scala. <code>❗Unlicensed</code>
</details>
<br>

## Web Frameworks

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/playframework/playframework">playframework</a></b> (🥇33 ·  ⭐ 13K) - The Community Maintained High Velocity Web Framework.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/playframework) (👨‍💻 990 · 🔀 4.1K · 📥 1.1K · 📦 21 · 📋 3.9K - 12% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/playframework/playframework
	```
- [Maven](https://search.maven.org/artifact/com.typesafe.play/play_3) (📦 68 · ⏱️ 22.12.2025):
	```
	<dependency>
		<groupId>com.typesafe.play</groupId>
		<artifactId>play_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/lift/framework">framework</a></b> (🥇23 ·  ⭐ 1.3K) - Lift Framework. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/lift/framework) (👨‍💻 120 · 🔀 280 · 📋 1.5K - 8% open · ⏱️ 18.03.2026):

	```
	git clone https://github.com/lift/framework
	```
</details>
<details><summary><b><a href="https://github.com/twitter/finatra">finatra</a></b> (🥈21 ·  ⭐ 2.3K) - Fast, testable, Scala services built on TwitterServer and Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/twitter/finatra) (👨‍💻 260 · 🔀 400 · 📋 330 - 6% open · ⏱️ 18.08.2025):

	```
	git clone https://github.com/twitter/finatra
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/Binding.scala">Binding.scala</a></b> (🥈19 ·  ⭐ 1.6K · 💤) - Reactive data-binding for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/Binding.scala) (👨‍💻 25 · 🔀 100 · 📋 100 - 39% open · ⏱️ 31.03.2025):

	```
	git clone https://github.com/ThoughtWorksInc/Binding.scala
	```
</details>
<details><summary><b><a href="https://github.com/UdashFramework/udash-core">udash-core</a></b> (🥈19 ·  ⭐ 450) - Scala framework for building beautiful and maintainable web.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/UdashFramework/udash-core) (👨‍💻 44 · 🔀 38 · 📦 2 · 📋 120 - 27% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/UdashFramework/udash-core
	```
</details>
<details><summary><b><a href="https://github.com/unfiltered/unfiltered">unfiltered</a></b> (🥉18 ·  ⭐ 710) - A toolkit for servicing HTTP requests in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/unfiltered/unfiltered) (👨‍💻 98 · 🔀 110 · 📋 220 - 34% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/unfiltered/unfiltered
	```
</details>
<details><summary><b><a href="https://github.com/outr/youi">youi</a></b> (🥉17 ·  ⭐ 210) - Next generation user interface and application development in Scala and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/outr/youi) (👨‍💻 12 · 🔀 29 · 📋 63 - 34% open · ⏱️ 10.03.2026):

	```
	git clone https://github.com/outr/youi
	```
</details>
<details><summary><b><a href="https://github.com/sake92/sharaf">sharaf</a></b> (🥉14 ·  ⭐ 63) - Minimalistic Scala 3 web framework. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sake92/sharaf) (👨‍💻 3 · 🔀 2 · 📋 36 - 22% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/sake92/sharaf
	```
</details>
<details><summary>Show 10 hidden projects...</summary>

- <b><a href="https://github.com/scalatra/scalatra">scalatra</a></b> (🥈19 ·  ⭐ 2.7K) - Tiny Scala high-performance, async web framework, inspired.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/tumblr/colossus">colossus</a></b> (🥈19 ·  ⭐ 1.1K · 💀) - I/O and Microservice library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/skinny-framework/skinny-framework">skinny-framework</a></b> (🥈19 ·  ⭐ 740 · 💀) - Scala on Rails - A full-stack web app framework for rapid.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/fomkin/korolev">korolev</a></b> (🥉16 ·  ⭐ 580 · 💀) - Single Page Applications running on the server side. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/xitrum-framework/xitrum">xitrum</a></b> (🥉16 ·  ⭐ 450 · 💀) - Async and clustered Scala web framework and HTTP(S) server. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/com-lihaoyi/cask">cask</a></b> (🥉15 ·  ⭐ 590) - Cask: a Scala HTTP micro-framework. Cask makes it easy to.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/d2iq-archive/chaos">chaos</a></b> (🥉14 ·  ⭐ 250 · 💀) - A lightweight framework for writing REST services in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/nafg/reactive">reactive</a></b> (🥉11 ·  ⭐ 220 · 💀) - A simple FRP library and a web UI framework built on it. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/splink/pagelets">pagelets</a></b> (🥉7 ·  ⭐ 76 · 💀) - A module for the Play Framework to build highly modular.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/analogweb/analogweb-scala">analogweb-scala</a></b> (🥉7 ·  ⭐ 13 · 💀) - Tiny High Performance HTTP Server for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## File Processing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries that handle common file formats including YAML, CSV, etc._

<details><summary><b><a href="https://github.com/typelevel/Laika">laika</a></b> (🥇18 ·  ⭐ 450) - Site and E-book Generator and Customizable Text Markup.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/Laika) (👨‍💻 27 · 🔀 54 · 📋 240 - 5% open · ⏱️ 09.09.2025):

	```
	git clone https://github.com/typelevel/Laika
	```
</details>
<details><summary><b><a href="https://github.com/nrinaudo/kantan.csv">kantan.csv</a></b> (🥈14 ·  ⭐ 350 · 💤) - CSV handling library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/nrinaudo/kantan.csv) (👨‍💻 11 · 🔀 38 · 📋 190 - 28% open · ⏱️ 12.04.2025):

	```
	git clone https://github.com/nrinaudo/kantan.csv
	```
</details>
<details><summary><b><a href="https://github.com/norbert-radyk/spoiwo">spoiwo</a></b> (🥉13 ·  ⭐ 180) - Scala POI Wrapper for the spreadsheet generation in Excel:. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/norbert-radyk/spoiwo) (👨‍💻 21 · 🔀 48 · 📋 33 - 36% open · ⏱️ 14.06.2025):

	```
	git clone https://github.com/norbert-radyk/spoiwo
	```
</details>
<details><summary><b><a href="https://github.com/sovt/spata">spata</a></b> (🥉12 ·  ⭐ 36) - Functional, stream-based CSV processor for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sovt/spata) (👨‍💻 5 · 🔀 8 · ⏱️ 28.01.2026):

	```
	git clone https://github.com/fingo/spata
	```
</details>
<details><summary>Show 3 hidden projects...</summary>

- <b><a href="https://github.com/tototoshi/scala-csv">scala-csv</a></b> (🥈14 ·  ⭐ 700) - CSV Reader/Writer for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/jcazevedo/moultingyaml">moultingyaml</a></b> (🥉10 ·  ⭐ 100 · 💀) - Scala wrapper for SnakeYAML. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/tpunder/fm-flatfile">fm-flatfile</a></b> (🥉6 ·  ⭐ 11 · 💀) - Scala Library for Reading Flat File Data.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## SBT Plugins

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/coursier/coursier">coursier</a></b> (🥇29 ·  ⭐ 2.1K · 📈) - Pure Scala Artifact Fetching. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/coursier/coursier) (👨‍💻 160 · 🔀 330 · 📥 18M · 📋 1.3K - 36% open · ⏱️ 20.03.2026):

	```
	git clone https://github.com/coursier/coursier
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-native-packager">sbt-native-packager</a></b> (🥇23 ·  ⭐ 1.6K) - sbt Native Packager. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-native-packager) (👨‍💻 280 · 🔀 450 · 📋 830 - 18% open · ⏱️ 22.02.2026):

	```
	git clone https://github.com/sbt/sbt-native-packager
	```
</details>
<details><summary><b><a href="https://github.com/scoverage/sbt-scoverage">sbt-scoverage</a></b> (🥇21 ·  ⭐ 650) - sbt plugin for scoverage. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scoverage/sbt-scoverage) (👨‍💻 80 · 🔀 160 · 📋 270 - 14% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scoverage/sbt-scoverage
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-assembly">sbt-assembly</a></b> (🥇20 ·  ⭐ 2K) - Deploy ber-JARs. Restart processes. (port of codahale/assembly-sbt). <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-assembly) (👨‍💻 86 · 🔀 220 · 📋 370 - 29% open · ⏱️ 20.02.2026):

	```
	git clone https://github.com/sbt/sbt-assembly
	```
</details>
<details><summary><b><a href="https://github.com/lightbend-labs/mima">mima</a></b> (🥇20 ·  ⭐ 480) - A tool for catching binary incompatibility in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lightbend-labs/mima) (👨‍💻 51 · 🔀 72 · 📋 220 - 12% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/lightbend/mima
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/mdoc">mdoc</a></b> (🥇20 ·  ⭐ 400) - Typechecked markdown documentation for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalameta/mdoc) (👨‍💻 58 · 🔀 86 · 📋 220 - 28% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/scalameta/mdoc
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-eclipse">sbt-eclipse</a></b> (🥈19 ·  ⭐ 710) - Plugin for sbt to create Eclipse project definitions. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-eclipse) (👨‍💻 41 · 🔀 170 · 📋 280 - 27% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/sbt/sbt-eclipse
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-release">sbt-release</a></b> (🥈19 ·  ⭐ 650) - A release plugin for sbt. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-release) (👨‍💻 66 · 🔀 160 · 📋 190 - 46% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/sbt/sbt-release
	```
</details>
<details><summary><b><a href="https://github.com/rtimush/sbt-updates">sbt-updates</a></b> (🥈18 ·  ⭐ 780) - sbt plugin that can check Maven and Ivy repositories for dependency.. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/rtimush/sbt-updates) (👨‍💻 30 · 🔀 58 · 📋 79 - 15% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/rtimush/sbt-updates
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-ci-release">sbt-ci-release</a></b> (🥈18 ·  ⭐ 300) - sbt plugin to automate Sonatype releases from GitHub Actions. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-ci-release) (👨‍💻 67 · 🔀 77 · 📋 96 - 4% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/sbt/sbt-ci-release
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/sbt-scalafmt">sbt-scalafmt</a></b> (🥈18 ·  ⭐ 230) - sbt plugin for Scalafmt. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalameta/sbt-scalafmt) (👨‍💻 33 · 🔀 49 · 📋 75 - 2% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/scalameta/sbt-scalafmt
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-jmh">sbt-jmh</a></b> (🥈17 ·  ⭐ 800) - Trust no one, bench everything. - sbt plugin for JMH (Java.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-jmh) (👨‍💻 52 · 🔀 87 · 📋 100 - 28% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/sbt/sbt-jmh
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-buildinfo">sbt-buildinfo</a></b> (🥈17 ·  ⭐ 560) - I know this because build.sbt knows this. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-buildinfo) (👨‍💻 51 · 🔀 91 · 📋 110 - 11% open · ⏱️ 21.02.2026):

	```
	git clone https://github.com/sbt/sbt-buildinfo
	```
</details>
<details><summary><b><a href="https://github.com/earldouglas/sbt-war">xsbt-web-plugin</a></b> (🥈17 ·  ⭐ 380) - Package and run WAR files from sbt. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code></summary>

- [GitHub](https://github.com/earldouglas/sbt-war) (👨‍💻 33 · 🔀 100 · 📋 290 - 0% open · ⏱️ 28.02.2026):

	```
	git clone https://github.com/earldouglas/xsbt-web-plugin
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-git">sbt-git</a></b> (🥈17 ·  ⭐ 360) - A git plugin for sbt. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-git) (👨‍💻 58 · 🔀 100 · 📋 120 - 27% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/sbt/sbt-git
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-header">sbt-header</a></b> (🥈17 ·  ⭐ 190) - sbt-header is an sbt plugin for creating file headers, e.g... <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-header) (👨‍💻 40 · 🔀 58 · 📋 92 - 14% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/sbt/sbt-header
	```
</details>
<details><summary><b><a href="https://github.com/sbt/sbt-unidoc">sbt-unidoc</a></b> (🥈17 ·  ⭐ 130) - sbt plugin to create a unified Scaladoc or Javadoc API document.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sbt/sbt-unidoc) (👨‍💻 23 · 🔀 26 · 📋 61 - 39% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/sbt/sbt-unidoc
	```
</details>
<details><summary><b><a href="https://github.com/sbt-doctest/sbt-doctest">sbt-doctest</a></b> (🥉16 ·  ⭐ 190) - Doctest for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/sbt-doctest/sbt-doctest) (👨‍💻 26 · 🔀 28 · 📋 62 - 14% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/tkawachi/sbt-doctest
	```
</details>
<details><summary><b><a href="https://github.com/marcus-drake/sbt-docker">sbt-docker</a></b> (🥉15 ·  ⭐ 730 · 💤) - Create Docker images directly from sbt. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/marcus-drake/sbt-docker) (👨‍💻 31 · 🔀 110 · 📋 91 - 24% open · ⏱️ 12.12.2024):

	```
	git clone https://github.com/marcuslonnberg/sbt-docker
	```
</details>
<details><summary><b><a href="https://github.com/tek/splain">splain</a></b> (🥉15 ·  ⭐ 370) - better implicit errors for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/tek/splain) (👨‍💻 21 · 🔀 28 · 📥 1.2K · 📋 68 - 13% open · ⏱️ 16.01.2026):

	```
	git clone https://github.com/tek/splain
	```
</details>
<details><summary><b><a href="https://github.com/xerial/sbt-sonatype">sbt-sonatype</a></b> (🥉15 ·  ⭐ 340) - A sbt plugin for publishing Scala/Java projects to the Maven.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/xerial/sbt-sonatype) (👨‍💻 38 · 🔀 65 · 📋 120 - 20% open · ⏱️ 02.01.2026):

	```
	git clone https://github.com/xerial/sbt-sonatype
	```
</details>
<details><summary><b><a href="https://github.com/albuch/sbt-dependency-check">sbt-dependency-check</a></b> (🥉14 ·  ⭐ 270) - SBT Plugin for OWASP DependencyCheck. Monitor your.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/albuch/sbt-dependency-check) (👨‍💻 18 · 🔀 46 · 📋 90 - 4% open · ⏱️ 11.10.2025):

	```
	git clone https://github.com/albuch/sbt-dependency-check
	```
</details>
<details><summary><b><a href="https://github.com/ThoughtWorksInc/sbt-api-mappings">sbt-api-mappings</a></b> (🥉14 ·  ⭐ 90) - An Sbt plugin that fills apiMappings for common Scala.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ThoughtWorksInc/sbt-api-mappings) (👨‍💻 12 · 🔀 17 · 📋 20 - 70% open · ⏱️ 24.02.2026):

	```
	git clone https://github.com/ThoughtWorksInc/sbt-api-mappings
	```
</details>
<details><summary><b><a href="https://github.com/JetBrains/sbt-ide-settings">sbt-ide-settings</a></b> (🥉13 ·  ⭐ 69) - SBT plugin for tweaking various IDE settings. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/JetBrains/sbt-ide-settings) (👨‍💻 8 · 🔀 7 · 📋 16 - 56% open · ⏱️ 02.03.2026):

	```
	git clone https://github.com/Jetbrains/sbt-ide-settings
	```
</details>
<details><summary><b><a href="https://github.com/spray/sbt-revolver">sbt-revolver</a></b> (🥉12 ·  ⭐ 860 · 💤) - An SBT plugin for dangerously fast development turnaround.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/spray/sbt-revolver) (👨‍💻 17 · 🔀 55 · 📋 92 - 29% open · ⏱️ 18.10.2024):

	```
	git clone https://github.com/spray/sbt-revolver
	```
</details>
<details><summary>Show 11 hidden projects...</summary>

- <b><a href="https://github.com/47degrees/sbt-microsites">sbt-microsites</a></b> (🥈17 ·  ⭐ 320 · 💀) - An sbt plugin to create awesome microsites for your.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/xerial/sbt-pack">sbt-pack</a></b> (🥉14 ·  ⭐ 500) - A sbt plugin for creating distributable Scala packages. <code>❗Unlicensed</code>
- <b><a href="https://github.com/sbt/sbt-pgp">sbt-pgp</a></b> (🥉14 ·  ⭐ 150) - PGP plugin for sbt. <code>❗Unlicensed</code>
- <b><a href="https://github.com/tpolecat/tut">tut</a></b> (🥉13 ·  ⭐ 600 · 💀) - doc/tutorial generator for scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/softwaremill/scala-clippy">scala-clippy</a></b> (🥉13 ·  ⭐ 310 · 💀) - Good advice for Scala compiler errors. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/sbt/sbt-site">sbt-site</a></b> (🥉13 ·  ⭐ 180 · 💀) - Site generation for sbt. <code>❗Unlicensed</code>
- <b><a href="https://github.com/oleg-py/better-monadic-for">better-monadic-for</a></b> (🥉12 ·  ⭐ 710 · 💀) - Desugaring scala `for` without implicit `withFilter`s. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/sbt/sbt-ghpages">sbt-ghpages</a></b> (🥉11 ·  ⭐ 92) - git, site and ghpages support for sbt projects. <code>❗Unlicensed</code>
- <b><a href="https://github.com/sbt/sbt-groll">sbt-groll</a></b> (🥉10 ·  ⭐ 130 · 💀) - sbt plugin to roll the Git history. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ThoughtWorksInc/sbt-scala-js-map">sbt-scala-js-map</a></b> (🥉10 ·  ⭐ 37 · 💀) - A Sbt plugin that configures source mapping for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/shmishleniy/sbt-deploy-ssh">sbt-deploy-ssh</a></b> (🥉10 ·  ⭐ 28 · 💀) - SBT deploy plugin. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Toolkits, Extensions & Ecosystems

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Extensions and platforms that provide various abstractions._

<details><summary><b><a href="https://github.com/zio/zio">zio</a></b> (🥇33 ·  ⭐ 4.4K) - ZIO A type-safe, composable library for async and concurrent.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zio/zio) (👨‍💻 760 · 🔀 1.5K · 📋 2.8K - 5% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/zio/zio
	```
- [Maven](https://search.maven.org/artifact/dev.zio/zio_2.13) (📦 1.3K · ⏱️ 28.12.2025):
	```
	<dependency>
		<groupId>dev.zio</groupId>
		<artifactId>zio_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/scalameta">scalameta</a></b> (🥇27 ·  ⭐ 1.2K) - Library to read, analyze, transform and generate Scala programs. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalameta/scalameta) (👨‍💻 130 · 🔀 240 · 📦 3 · 📋 1.3K - 8% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/scalameta/scalameta
	```
</details>
<details><summary><b><a href="https://github.com/milessabin/shapeless">shapeless</a></b> (🥇26 ·  ⭐ 3.4K) - Generic programming for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/milessabin/shapeless) (👨‍💻 160 · 🔀 530 · 📦 150 · 📋 410 - 7% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/milessabin/shapeless
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/Ammonite">ammonite</a></b> (🥈25 ·  ⭐ 2.6K) - Scala Scripting. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/com-lihaoyi/Ammonite) (👨‍💻 150 · 🔀 370 · 📥 670K · 📋 870 - 17% open · ⏱️ 24.02.2026):

	```
	git clone https://github.com/com-lihaoyi/ammonite
	```
</details>
<details><summary><b><a href="https://github.com/fthomas/refined">refined</a></b> (🥈22 ·  ⭐ 1.7K) - Refinement types for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/fthomas/refined) (👨‍💻 79 · 🔀 150 · 📋 220 - 32% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/fthomas/refined
	```
</details>
<details><summary><b><a href="https://github.com/optics-dev/Monocle">Monocle</a></b> (🥈22 ·  ⭐ 1.7K) - Optics library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/optics-dev/Monocle) (👨‍💻 130 · 🔀 200 · 📋 390 - 13% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/optics-dev/monocle
	```
</details>
<details><summary><b><a href="https://github.com/scalalandio/chimney">chimney</a></b> (🥈21 ·  ⭐ 1.2K) - Scala library for boilerplate-free, type-safe data.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalalandio/chimney) (👨‍💻 47 · 🔀 110 · 📋 230 - 9% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scalalandio/chimney
	```
</details>
<details><summary><b><a href="https://github.com/twitter/util">util</a></b> (🥈20 ·  ⭐ 2.7K) - Wonderful reusable code from Twitter. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/twitter/util) (👨‍💻 330 · 🔀 580 · 📋 130 - 11% open · ⏱️ 08.12.2025):

	```
	git clone https://github.com/twitter/util
	```
</details>
<details><summary><b><a href="https://github.com/lloydmeta/enumeratum">enumeratum</a></b> (🥈20 ·  ⭐ 1.2K) - A type-safe, reflection-free, powerful enumeration.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lloydmeta/enumeratum) (👨‍💻 97 · 🔀 150 · 📋 160 - 7% open · ⏱️ 07.03.2026):

	```
	git clone https://github.com/lloydmeta/enumeratum
	```
</details>
<details><summary><b><a href="https://github.com/outr/scribe">scribe</a></b> (🥈20 ·  ⭐ 550) - The fastest logging library in the world. Built from scratch in.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/outr/scribe) (👨‍💻 22 · 🔀 44 · 📋 170 - 7% open · ⏱️ 12.03.2026):

	```
	git clone https://github.com/outr/scribe
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/ox">ox</a></b> (🥈20 ·  ⭐ 500) - Safe direct-style streaming, concurrency and resiliency for Scala on.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/softwaremill/ox) (👨‍💻 28 · 🔀 33 · 📋 66 - 13% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/softwaremill/ox
	```
</details>
<details><summary><b><a href="https://github.com/scala/scala-async">async</a></b> (🥈19 ·  ⭐ 1.2K) - An asynchronous programming facility for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scala/scala-async) (👨‍💻 28 · 🔀 90 · 📋 88 - 13% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scala/scala-async
	```
</details>
<details><summary><b><a href="https://github.com/atnos-org/eff">eff</a></b> (🥈19 ·  ⭐ 590) - Eff monad for cats - https://atnos-org.github.io/eff. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/atnos-org/eff) (👨‍💻 43 · 🔀 79 · 📋 68 - 4% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/atnos-org/eff
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/quicklens">quicklens</a></b> (🥉17 ·  ⭐ 850) - Modify deeply nested case class fields. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/softwaremill/quicklens) (👨‍💻 27 · 🔀 53 · 📋 73 - 52% open · ⏱️ 30.10.2025):

	```
	git clone https://github.com/softwaremill/quicklens
	```
</details>
<details><summary><b><a href="https://github.com/nscala-time/nscala-time">nscala-time</a></b> (🥉16 ·  ⭐ 870) - A new Scala wrapper for Joda Time based on scala-time. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/nscala-time/nscala-time) (👨‍💻 26 · 🔀 78 · 📋 56 - 10% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/nscala-time/nscala-time
	```
</details>
<details><summary><b><a href="https://github.com/chronoscala/chronoscala">chronoscala</a></b> (🥉13 ·  ⭐ 69) - A JSR-310 port of nscala_time. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/chronoscala/chronoscala) (👨‍💻 10 · 🔀 8 · ⏱️ 20.03.2026):

	```
	git clone https://github.com/chronoscala/chronoscala
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-all</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-all_3) (⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-all_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary>Show 17 hidden projects...</summary>

- <b><a href="https://github.com/typelevel/cats">cats</a></b> (🥇26 ·  ⭐ 5.4K) - Lightweight, modular, and extensible library for.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scalaz/scalaz">scalaz</a></b> (🥈20 ·  ⭐ 4.7K) - Principled Functional Programming in Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/twitter/cassovary">cassovary</a></b> (🥉17 ·  ⭐ 1.1K · 💀) - Cassovary is a simple big graph processing library for the JVM. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/frees-io/freestyle">freestyle</a></b> (🥉17 ·  ⭐ 620 · 💀) - A cohesive & pragmatic framework of FP centric Scala.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/pathikrit/better-files">better-files</a></b> (🥉16 ·  ⭐ 1.5K · 💀) - Simple, safe and intuitive Scala I/O. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/typelevel/simulacrum">simulacrum</a></b> (🥉15 ·  ⭐ 930 · 💀) - First class syntax support for type classes in Scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scala-graph/scala-graph">scala-graph</a></b> (🥉15 ·  ⭐ 580) - Graph for Scala is intended to provide basic graph.. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/xerial/larray">larray</a></b> (🥉15 ·  ⭐ 400 · 💀) - Large off-heap arrays and mmap files for Scala and Java. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ThoughtWorksInc/each">each</a></b> (🥉15 ·  ⭐ 260 · 💀) - A macro library that converts native imperative syntax to.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/ThoughtWorksInc/Dsl.scala">Dsl.scala</a></b> (🥉15 ·  ⭐ 260 · 💀) - A framework to create embedded Domain-Specific.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scala-hamsters/hamsters">hamsters</a></b> (🥉14 ·  ⭐ 290 · 💀) - A mini Scala utility library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/epfldata/squid">squid</a></b> (🥉12 ·  ⭐ 200 · 💀) - Squid type-safe metaprogramming and compilation framework for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ThoughtWorksInc/enableIf.scala">enableIf.scala</a></b> (🥉12 ·  ⭐ 68 · 💀) - A library that toggles Scala code at compile-time, like.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/scala-records/scala-records">scala-records</a></b> (🥉11 ·  ⭐ 160 · 💀) - Labeled records for Scala based on structural.. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/Thangiee/Freasy-Monad">Freasy-Monad</a></b> (🥉8 ·  ⭐ 120 · 💀) - Easy way to create Free Monad using Scala macros with.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/ISCPIF/freedsl">freedsl</a></b> (🥉8 ·  ⭐ 39 · 💀) - Practical effect composition library based on abstract wrapping.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/maxcellent/lamma">lamma</a></b> (🥉6 ·  ⭐ 93 · 💀) - Lamma schedule generator for Scala is a professional schedule.. <code>❗Unlicensed</code>
</details>
<br>

## Media Processing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for audio, image, and video handling and processing_

<details><summary><b><a href="https://github.com/sksamuel/scrimage">scrimage</a></b> (🥇21 ·  ⭐ 1.2K) - JVM - Java, Kotlin, Scala image processing library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/sksamuel/scrimage) (👨‍💻 62 · 🔀 140 · 📋 220 - 4% open · ⏱️ 20.03.2026):

	```
	git clone https://github.com/sksamuel/scrimage
	```
</details>
<details><summary><b><a href="https://github.com/outr/media4s">media4s</a></b> (🥉10 ·  ⭐ 36 · 💤) - Scala command-line wrapper around ffmpeg, ffprobe, ImageMagick, and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/outr/media4s) (👨‍💻 3 · 🔀 7 · ⏱️ 21.12.2024):

	```
	git clone https://github.com/outr/media4s
	```
</details>
<details><summary>Show 5 hidden projects...</summary>

- <b><a href="https://github.com/unibas-gravis/scalismo">scalismo</a></b> (🥈16 ·  ⭐ 270 · 💀) - Scalable Image Analysis and Shape Modelling. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/sciss/scalacollider">scalacollider</a></b> (🥈11 ·  ⭐ 190 · 💀) - A Scala sound synthesis library based on SuperCollider. <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/bytedeco/sbt-javacv">sbt-javacv</a></b> (🥉9 ·  ⭐ 93 · 💀) - Start using OpenCV in your JVM project in just 1 line, no separate.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/poslegm/scala-phash">scala-phash</a></b> (🥉9 ·  ⭐ 22 · 💀) - Image comparison by hash codes. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/mgdigital/Chromaprint.scala">chromaprint.scala</a></b> (🥉6 ·  ⭐ 87 · 💀) - Chromaprint/AcoustID audio fingerprinting for the JVM. <code>❗Unlicensed</code>
</details>
<br>

## Dependency Injection

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/wvlet/airframe">airframe</a></b> (🥇20 ·  ⭐ 660) - Essential Building Blocks for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/wvlet/airframe) (👨‍💻 72 · 🔀 68 · 📋 670 - 16% open · ⏱️ 25.02.2026):

	```
	git clone https://github.com/wvlet/airframe
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/macwire">macwire</a></b> (🥈19 ·  ⭐ 1.3K) - Zero-cost, compile-time, type-safe dependency injection.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/softwaremill/macwire) (👨‍💻 46 · 🔀 80 · 📋 130 - 42% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/softwaremill/macwire
	```
</details>
<details><summary><b><a href="https://github.com/7mind/izumi">izumi</a></b> (🥈19 ·  ⭐ 630 · 📉) - Productivity-oriented collection of lightweight fancy stuff.. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/7mind/izumi) (👨‍💻 34 · 🔀 71 · 📋 480 - 14% open · ⏱️ 27.02.2026):

	```
	git clone https://github.com/7mind/izumi
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-runtime</a></b> (🥉11 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-runtime_3) (📦 15 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-runtime_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary>Show 5 hidden projects...</summary>

- <b><a href="https://github.com/codingwell/scala-guice">scala-guice</a></b> (🥈15 ·  ⭐ 340 · 💀) - Scala extensions for Google Guice. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scaldi/scaldi">scaldi</a></b> (🥉14 ·  ⭐ 290 · 💀) - Lightweight Scala Dependency Injection Library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/dickwall/subcut">subcut</a></b> (🥉10 ·  ⭐ 400 · 💀) - Scala Uniquely Bound Classes Under Traits. <code>❗Unlicensed</code>
- <b><a href="https://github.com/yakivy/jam">jam</a></b> (🥉8 ·  ⭐ 61 · 💀) - Incredibly simple DI Scala library. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/xitrum-framework/sclasner">sclasner</a></b> (🥉6 ·  ⭐ 11) - Scala classpath scanner. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## HTTP

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_HTTP clients and servers_

<details><summary><b><a href="https://github.com/http4s/http4s">http4s</a></b> (🥇27 ·  ⭐ 2.6K) - A minimal, idiomatic Scala interface for HTTP. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/http4s/http4s) (👨‍💻 480 · 🔀 810 · 📋 1.5K - 23% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/http4s/http4s
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/tapir">tapir</a></b> (🥇26 ·  ⭐ 1.5K) - Rapid development of self-documenting APIs. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/softwaremill/tapir) (👨‍💻 350 · 🔀 460 · 📋 1K - 19% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/softwaremill/tapir
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/sttp">sttp</a></b> (🥈25 ·  ⭐ 1.5K) - The Scala HTTP client you always wanted!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/softwaremill/sttp) (👨‍💻 240 · 🔀 330 · 📋 490 - 5% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/softwaremill/sttp
	```
</details>
<details><summary><b><a href="https://github.com/finagle/finch">finch</a></b> (🥈20 ·  ⭐ 1.6K) - Scala combinator library for building Finagle HTTP services. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/finagle/finch) (👨‍💻 130 · 🔀 220 · 📋 410 - 11% open · ⏱️ 14.09.2025):

	```
	git clone https://github.com/finagle/finch
	```
</details>
<details><summary><b><a href="https://github.com/eed3si9n/scalaxb">scalaxb</a></b> (🥈19 ·  ⭐ 340) - scalaxb is an XML data binding tool for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/eed3si9n/scalaxb) (👨‍💻 72 · 🔀 160 · 📋 450 - 35% open · ⏱️ 19.02.2026):

	```
	git clone https://github.com/eed3si9n/scalaxb
	```
</details>
<details><summary><b><a href="https://github.com/playframework/play-ws">play-ws</a></b> (🥈19 ·  ⭐ 220) - Standalone Play WS, an async HTTP client with fluent API. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.playframework.com/assets/images/logos/1d627942f0b2f115f8638936a212244a-play_icon_full_color.png" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/play-ws) (👨‍💻 50 · 🔀 89 · 📋 160 - 49% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/playframework/play-ws
	```
</details>
<details><summary><b><a href="https://github.com/apache/pekko-http">pekko-http</a></b> (🥉18 ·  ⭐ 190) - The Streaming-first HTTP server/module of Apache Pekko. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/apache/pekko-http) (👨‍💻 370 · 🔀 50 · 📋 130 - 29% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/apache/incubator-pekko-http
	```
</details>
<details><summary><b><a href="https://github.com/endpoints4s/endpoints4s">endpoints4s</a></b> (🥉17 ·  ⭐ 420 · 💤) - Describe HTTP endpoints in Scala and derive clients,.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/endpoints4s/endpoints4s) (👨‍💻 64 · 🔀 96 · 📋 230 - 24% open · ⏱️ 25.03.2025):

	```
	git clone https://github.com/endpoints4s/endpoints4s
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia-codec-http</a></b> (🥉10 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-codec-http_3) (📦 2 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-codec-http_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary>Show 9 hidden projects...</summary>

- <b><a href="https://github.com/akka/akka-http">akka-http</a></b> (🥈22 ·  ⭐ 1.3K) - The Streaming-first HTTP server/module of Akka. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/dispatch/reboot">reboot</a></b> (🥉17 ·  ⭐ 430 · 💀) - Scala wrapper for the Java AsyncHttpClient. <code><a href="http://bit.ly/37RvQcA">❗️LGPL-3.0</a></code>
- <b><a href="https://github.com/com-lihaoyi/requests-scala">requests-scala</a></b> (🥉16 ·  ⭐ 740) - A Scala port of the popular Python Requests HTTP.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scalaj/scalaj-http">scalaj-http</a></b> (🥉15 ·  ⭐ 980 · 💀) - Simple scala wrapper for HttpURLConnection. OAuth included. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/daviddenton/fintrospect">fintrospect</a></b> (🥉11 ·  ⭐ 91 · 💀) - Implement fast, type-safe HTTP webservices for Finagle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/hmil/RosHTTP">roshttp</a></b> (🥉10 ·  ⭐ 130 · 💀) - Unified Scala.js + Scala HTTP client API. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/criteo/lolhttp">lolhttp</a></b> (🥉10 ·  ⭐ 94 · 💀) - An HTTP Server and Client library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/zero-deps/frontier">frontier</a></b> (🥉7 ·  ⭐ 9 · 💤) - A lightweight HTTP/WebSocket server built with ZIO. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/outr/jefe">jefe</a></b> (🥉6 ·  ⭐ 8 · 💀) - Manages installation, updating, downloading, launching, error reporting, and.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Testing

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries and frameworks for various types of code testing_

<details><summary><b><a href="https://github.com/gatling/gatling">gatling</a></b> (🥇28 ·  ⭐ 6.9K) - Modern Load Testing as Code. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/gatling/gatling) (👨‍💻 250 · 🔀 1.2K · 📦 23 · 📋 3.8K - 0% open · ⏱️ 20.03.2026):

	```
	git clone https://github.com/gatling/gatling
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/scalacheck">scalacheck</a></b> (🥇22 ·  ⭐ 2K) - Property-based testing for Scala. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/scalacheck) (👨‍💻 150 · 🔀 400 · 📋 360 - 17% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/typelevel/scalacheck
	```
</details>
<details><summary><b><a href="https://github.com/holdenk/spark-testing-base">spark-testing-base</a></b> (🥇22 ·  ⭐ 1.5K · 📈) - Base classes to use when writing tests with Spark. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/holdenk/spark-testing-base) (👨‍💻 61 · 🔀 360 · 📦 45 · 📋 220 - 38% open · ⏱️ 22.12.2025):

	```
	git clone https://github.com/holdenk/spark-testing-base
	```
</details>
<details><summary><b><a href="https://github.com/scalatest/scalatest">scalatest</a></b> (🥇22 ·  ⭐ 1.2K) - A testing tool for Scala and Java developers. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalatest/scalatest) (👨‍💻 69 · 🔀 340 · 📋 880 - 60% open · ⏱️ 14.11.2025):

	```
	git clone https://github.com/scalatest/scalatest
	```
</details>
<details><summary><b><a href="https://github.com/scalameta/munit">munit</a></b> (🥈20 ·  ⭐ 460) - Scala testing library with actionable errors and extensible.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalameta/munit) (👨‍💻 68 · 🔀 100 · 📋 180 - 22% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/scalameta/munit
	```
</details>
<details><summary><b><a href="https://github.com/agourlay/cornichon">cornichon</a></b> (🥈20 ·  ⭐ 230) - Testing tool in Scala for HTTP JSON API. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/agourlay/cornichon) (👨‍💻 19 · 🔀 31 · 📋 160 - 3% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/agourlay/cornichon
	```
</details>
<details><summary><b><a href="https://github.com/stryker-mutator/stryker4s">stryker4s</a></b> (🥈20 ·  ⭐ 210) - Mutation testing for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/stryker-mutator/stryker4s) (👨‍💻 37 · 🔀 36 · 📋 170 - 17% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/stryker-mutator/stryker4s
	```
</details>
<details><summary><b><a href="https://github.com/scalamock/scalamock">scalamock</a></b> (🥉19 ·  ⭐ 550) - Native Scala mocking framework. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalamock/scalamock) (👨‍💻 42 · 🔀 100 · 📋 260 - 1% open · ⏱️ 01.03.2026):

	```
	git clone https://github.com/paulbutcher/scalamock
	```
</details>
<details><summary><b><a href="https://github.com/mockito/mockito-scala">mockito-scala</a></b> (🥉18 ·  ⭐ 360) - Mockito for Scala language. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/mockito/mockito-scala) (👨‍💻 32 · 🔀 58 · 📋 130 - 18% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/mockito/mockito-scala
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/utest">utest</a></b> (🥉17 ·  ⭐ 510) - A simple testing framework for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/com-lihaoyi/utest) (👨‍💻 57 · 🔀 86 · 📋 150 - 11% open · ⏱️ 22.01.2026):

	```
	git clone https://github.com/com-lihaoyi/utest
	```
</details>
<details><summary><b><a href="https://github.com/testcontainers/testcontainers-scala">testcontainers-scala</a></b> (🥉16 ·  ⭐ 660) - Docker containers for testing in scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/testcontainers/testcontainers-scala) (👨‍💻 91 · 🔀 130 · 📋 140 - 43% open · ⏱️ 23.12.2025):

	```
	git clone https://github.com/testcontainers/testcontainers-scala
	```
</details>
<details><summary><b><a href="https://github.com/scalaprops/scalaprops">scalaprops</a></b> (🥉14 ·  ⭐ 280) - property based testing library for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalaprops/scalaprops) (👨‍💻 12 · 🔀 21 · 📋 22 - 45% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scalaprops/scalaprops
	```
</details>
<details><summary>Show 5 hidden projects...</summary>

- <b><a href="https://github.com/etorreborre/specs2">specs2</a></b> (🥈21 ·  ⭐ 740) - Software Specifications for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/disneystreaming/weaver-test">weaver-test</a></b> (🥉15 ·  ⭐ 440) - A test framework that runs everything in parallel. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/monix/minitest">minitest</a></b> (🥉14 ·  ⭐ 180 · 💀) - The super light testing library for Scala and Scala.js. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scalameter/scalameter">scalameter</a></b> (🥉13 ·  ⭐ 510 · 💀) - Microbenchmarking and performance regression testing.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/xitrum-framework/scalive">scalive</a></b> (🥉11 ·  ⭐ 200 · 💀) - Connect a Scala REPL to running JVM processes without any prior setup. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Security

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for security, authentication, and cryptography_

<details><summary><b><a href="https://github.com/nulab/scala-oauth2-provider">scala-oauth2-provider</a></b> (🥇17 ·  ⭐ 540) - OAuth 2.0 server-side implementation written in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/nulab/scala-oauth2-provider) (👨‍💻 28 · 🔀 99 · 📋 67 - 5% open · ⏱️ 16.02.2026):

	```
	git clone https://github.com/nulab/scala-oauth2-provider
	```
</details>
<details><summary><b><a href="https://github.com/pac4j/play-pac4j">play-pac4j</a></b> (🥇17 ·  ⭐ 410) - Security library for Play framework 2 in Java and Scala: OAuth,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/pac4j/play-pac4j) (👨‍💻 55 · 🔀 100 · ⏱️ 26.03.2026):

	```
	git clone https://github.com/pac4j/play-pac4j
	```
</details>
<details><summary><b><a href="https://github.com/guardian/play-googleauth">play-googleauth</a></b> (🥇17 ·  ⭐ 37) - Simple play module for authenticating against Google. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/guardian/play-googleauth) (👨‍💻 87 · 🔀 11 · ⏱️ 26.03.2026):

	```
	git clone https://github.com/guardian/play-googleauth
	```
</details>
<details><summary><b><a href="https://github.com/polyvariant/sttp-oauth2">sttp-oauth2</a></b> (🥉14 ·  ⭐ 80) - OAuth2 client library implemented in Scala using sttp. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/polyvariant/sttp-oauth2) (👨‍💻 16 · 🔀 25 · 📋 35 - 34% open · ⏱️ 29.12.2025):

	```
	git clone https://github.com/ocadotechnology/sttp-oauth2
	```
- [Maven](https://search.maven.org/artifact/com.ocadotechnology/sttp-oauth2_2.13) (📦 4 · ⏱️ 12.05.2024):
	```
	<dependency>
		<groupId>com.ocadotechnology</groupId>
		<artifactId>sttp-oauth2_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary>Show 8 hidden projects...</summary>

- <b><a href="https://github.com/jaliss/securesocial">securesocial</a></b> (🥇17 ·  ⭐ 1.2K · 💀) - A module that provides OAuth, OAuth2 and OpenID.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/softwaremill/akka-http-session">akka-http-session</a></b> (🥈16 ·  ⭐ 440 · 💀) - Web & mobile client-side akka-http sessions, with.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/t2v/play2-auth">play2-auth</a></b> (🥉15 ·  ⭐ 610 · 💀) - Play2.x Authentication and Authorization module. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/jmcardon/tsec">tsec</a></b> (🥉15 ·  ⭐ 350 · 💀) - Type-safe general-cryptography library -.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/input-output-hk/scrypto">scrypto</a></b> (🥉14 ·  ⭐ 200 · 💤) - Cryptographic primitives for Scala. <code><a href="https://tldrlegal.com/search?q=CC0-1.0">❗️CC0-1.0</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/ticofab/aws-request-signer">aws-request-signer</a></b> (🥉9 ·  ⭐ 21 · 💀) - Scala library to sign HTTP requests to AWS services. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/blackdoor/jose">jose</a></b> (🥉9 ·  ⭐ 16 · 💀) - Extensible JOSE library for Scala. <code><a href="http://bit.ly/3rvuUlR">Unlicense</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/zalando-stups/OAuth2-mock-play">OAuth2-mock-play</a></b> (🥉7 ·  ⭐ 25 · 💀) - An implementation of an OAuth2 server designed for.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
</details>
<br>

## Data Handling

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for data binding, validation, and serialization_

<details><summary><b><a href="https://github.com/scalapb/ScalaPB">scalapb</a></b> (🥇26 ·  ⭐ 1.3K) - Protocol buffer compiler for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalapb/ScalaPB) (👨‍💻 140 · 🔀 290 · 📥 650K · 📋 640 - 8% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scalapb/scalapb
	```
</details>
<details><summary><b><a href="https://github.com/scodec/scodec">scodec</a></b> (🥇19 ·  ⭐ 820) - Scala combinator library for working with binary data. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scodec/scodec) (👨‍💻 63 · 🔀 110 · 📋 78 - 6% open · ⏱️ 02.02.2026):

	```
	git clone https://github.com/scodec/scodec
	```
</details>
<details><summary><b><a href="https://github.com/twitter/scrooge">scrooge</a></b> (🥇19 ·  ⭐ 800 · 💤) - A Thrift parser/generator. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/twitter/scrooge) (👨‍💻 230 · 🔀 250 · 📋 190 - 23% open · ⏱️ 02.04.2025):

	```
	git clone https://github.com/twitter/scrooge
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/upickle">upickle</a></b> (🥇19 ·  ⭐ 760) - uPickle: a simple, fast, dependency-free JSON & Binary.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/com-lihaoyi/upickle) (👨‍💻 67 · 🔀 180 · 📋 320 - 8% open · ⏱️ 14.02.2026):

	```
	git clone https://github.com/com-lihaoyi/upickle
	```
</details>
<details><summary><b><a href="https://github.com/sksamuel/avro4s">avro4s</a></b> (🥇19 ·  ⭐ 730) - Avro schema generation and serialization / deserialization for.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sksamuel/avro4s) (👨‍💻 110 · 🔀 240 · 📋 400 - 7% open · ⏱️ 28.01.2026):

	```
	git clone https://github.com/sksamuel/avro4s
	```
</details>
<details><summary><b><a href="https://github.com/zero-deps/proto">proto</a></b> (🥉12 ·  ⭐ 33) - Lightweight and fast serialization library for Scala 2/3 based on.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/zero-deps/proto) (👨‍💻 9 · 🔀 3 · ⏱️ 06.03.2026):

	```
	git clone https://github.com/zero-deps/proto
	```
</details>
<details><summary>Show 8 hidden projects...</summary>

- <b><a href="https://github.com/twitter/chill">chill</a></b> (🥈17 ·  ⭐ 620 · 💀) - Scala extensions for the Kryo serialization library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/wix-incubator/accord">accord</a></b> (🥉12 ·  ⭐ 530 · 💀) - Accord: A sane validation library for Scala. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/krzemin/octopus">octopus</a></b> (🥉10 ·  ⭐ 150 · 💀) - Scala library for boilerplate-free validation. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/jap-company/fields">fields</a></b> (🥉8 ·  ⭐ 50 · 💀) - Scala validation library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/msgpack/msgpack-scala">msgpack-scala</a></b> (🥉7 ·  ⭐ 93 · 💀) - MessagePack serializer implementation for Scala /.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/yakivy/dupin">dupin</a></b> (🥉7 ·  ⭐ 44 · 💀) - Minimal, idiomatic, customizable validation Scala library. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/malcolmgreaves/avro-codegen">avro-codegen</a></b> (🥉7 ·  ⭐ 9 · 💀) - Scala code generator for Avro schemas. <code>❗Unlicensed</code>
- <b><a href="https://github.com/splink/veto">veto</a></b> (🥉4 ·  ⭐ 6 · 💀) - If you dont agree with the data. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
</details>
<br>

## Parsers

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for creating custom parsers_

<details><summary><b><a href="https://github.com/scala/scala-parser-combinators">scala-parser-combinators</a></b> (🥇19 ·  ⭐ 680) - simple combinator-based parsing for Scala. formerly.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scala/scala-parser-combinators) (👨‍💻 72 · 🔀 130 · 📋 120 - 19% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scala/scala-parser-combinators
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/fastparse">fastparse</a></b> (🥈18 ·  ⭐ 1.1K) - Writing Fast Parsers Fast in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/com-lihaoyi/fastparse) (👨‍💻 55 · 🔀 170 · 📋 160 - 14% open · ⏱️ 14.01.2026):

	```
	git clone https://github.com/com-lihaoyi/fastparse
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/cats-parse">cats-parse</a></b> (🥈16 ·  ⭐ 240) - A parsing library for the cats ecosystem. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/cats-parse) (👨‍💻 46 · 🔀 54 · 📋 98 - 23% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/typelevel/cats-parse
	```
</details>
<details><summary><b><a href="https://github.com/epfl-lara/scallion">scallion</a></b> (🥉9 ·  ⭐ 61) - LL(1) parser combinators in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/epfl-lara/scallion) (👨‍💻 9 · 🔀 14 · 📥 2.4K · 📋 5 - 60% open · ⏱️ 02.09.2025):

	```
	git clone https://github.com/epfl-lara/scallion
	```
</details>
<details><summary>Show 2 hidden projects...</summary>

- <b><a href="https://github.com/sirthias/parboiled2">parboiled2</a></b> (🥉14 ·  ⭐ 720) - A macro-based PEG parser generator for Scala 2.10+. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/tpolecat/atto">atto</a></b> (🥉14 ·  ⭐ 360 · 💀) - friendly little parsers. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## Reactive Programming

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Reactive programming libraries (streams, observables...)_

<details><summary><b><a href="https://github.com/monix/monix">monix</a></b> (🥇20 ·  ⭐ 1.9K) - Asynchronous, Reactive Programming for Scala and Scala.js. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/monix/monix) (👨‍💻 110 · 🔀 240 · 📋 700 - 17% open · ⏱️ 26.01.2026):

	```
	git clone https://github.com/monix/monix
	```
</details>
<details><summary><b><a href="https://github.com/rescala-lang/REScala">rescala</a></b> (🥉12 ·  ⭐ 98) - REScala - distributed and reactive programming embedded in.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/rescala-lang/REScala) (👨‍💻 30 · 🔀 29 · ⏱️ 16.06.2025):

	```
	git clone https://github.com/rescala-lang/rescala
	```
</details>
<details><summary><b><a href="https://github.com/otavia-projects/otavia">otavia</a></b> (🥉11 ·  ⭐ 50 · 💤) - Your shiny new IO & Actor programming model!. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/otavia-projects/otavia) (👨‍💻 1 · 🔀 4 · ⏱️ 21.10.2024):

	```
	git clone https://github.com/otavia-projects/otavia
	```
- [Maven](https://search.maven.org/artifact/cc.otavia/otavia-runtime_3) (📦 15 · ⏱️ 15.09.2024):
	```
	<dependency>
		<groupId>cc.otavia</groupId>
		<artifactId>otavia-runtime_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary>Show 9 hidden projects...</summary>

- <b><a href="https://github.com/typelevel/fs2">fs2</a></b> (🥇24 ·  ⭐ 2.4K) - Compositional, streaming I/O library for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/ReactiveX/RxScala">rxscala</a></b> (🥈16 ·  ⭐ 890 · 💀) - RxScala Reactive Extensions for Scala a library for composing.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/reactiverse/vertx-lang-scala">vertx-lang-scala</a></b> (🥈15 ·  ⭐ 120 · 💤) - Vert.x for Scala. <code>❗Unlicensed</code>
- <b><a href="https://github.com/travisbrown/iteratee">iteratee</a></b> (🥈14 ·  ⭐ 180 · 💀) - Iteratees for Cats. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/spring-attic/reactor-scala-extensions">reactor-scala-extensions</a></b> (🥉13 ·  ⭐ 52 · 💀) - A scala extension for Project Reactors Flux and Mono. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/lihaoyi/scala.rx">scala.rx</a></b> (🥉12 ·  ⭐ 990 · 💀) - An experimental library for Functional Reactive.. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/Primetalk/SynapseGrid">synapsegrid</a></b> (🥉8 ·  ⭐ 120 · 💀) - SynapseGrid is a framework for constructing dynamic low.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/storm-enroute/reactors">reactors</a></b> (🥉7 ·  ⭐ 4 · 💀) - A concurrent reactive programming framework. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code>
- <b><a href="https://github.com/wireapp/wire-signals">wire-signals</a></b> (🥉5 ·  ⭐ 12 · 💀) - A small and effective event-handling library for Scala. <code><a href="http://bit.ly/2M0xdwT">❗️GPL-3.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## Development Environment

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Various tooling libraries that help with the overall Scala programming environment_

<details><summary><b><a href="https://github.com/marianobarrios/dregex">dregex</a></b> (🥇13 ·  ⭐ 51) - dregex is a Java library that implements a regular expression engine using.. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/marianobarrios/dregex) (👨‍💻 5 · 🔀 7 · 📋 6 - 16% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/marianobarrios/dregex
	```
</details>
<details><summary><b><a href="https://github.com/plokhotnyuk/fast-string-interpolator">fast-string-interpolator</a></b> (🥈11 ·  ⭐ 94 · 💤) - Scala macro that generates ultra-fast string.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/plokhotnyuk/fast-string-interpolator) (👨‍💻 7 · 🔀 7 · 📋 16 - 68% open · ⏱️ 18.03.2025):

	```
	git clone https://github.com/plokhotnyuk/fast-string-interpolator
	```
</details>
<details><summary>Show 7 hidden projects...</summary>

- <b><a href="https://github.com/Atry/fastring">fastring</a></b> (🥈11 ·  ⭐ 130 · 💀) - Extremely fast string formatting. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/lihaoyi/Scalatex">scalatex</a></b> (🥈10 ·  ⭐ 290 · 💀) - Programmable, Typesafe Document Generation. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/JohnReedLOL/scala-trace-debug">scala-trace-debug</a></b> (🥉9 ·  ⭐ 110 · 💀) - Macro based print debugging. Locates log statements in.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/BotTech/scala2plantuml">scala2plantuml</a></b> (🥉9 ·  ⭐ 25 · 💀) - Scala2PlantUML generates PlantUML diagrams from Scala code. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/JohnReedLOL/pos">pos</a></b> (🥉7 ·  ⭐ 23 · 💀) - Macro based print debugging for Scala code. Locates debug statements in.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/sake92/stone">stone</a></b> (🥉7 ·  ⭐ 5 · 💀) - URL (de)construct. Withers. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/sake92/scalajs-router">scalajs-router</a></b> (🥉4 ·  ⭐ 5 · 💀) - ScalaJS frontend router. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## Templating Engines

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/playframework/twirl">twirl</a></b> (🥇19 ·  ⭐ 560) - Twirl is Plays default template engine. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/playframework/twirl) (👨‍💻 57 · 🔀 120 · 📋 130 - 27% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/playframework/twirl
	```
</details>
<details><summary><b><a href="https://github.com/scalate/scalate">scalate</a></b> (🥈16 ·  ⭐ 610) - Scalate is a Scala based template engine which supports HAML,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/scalate/scalate) (👨‍💻 74 · 🔀 100 · 📋 73 - 52% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/scalate/scalate
	```
</details>
<details><summary><b><a href="https://github.com/sake92/hepek">hepek</a></b> (🥉12 ·  ⭐ 110) - Typesafe HTML templates and static site generator in pure Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sake92/hepek) (👨‍💻 6 · 🔀 10 · 📋 47 - 40% open · ⏱️ 05.11.2025):

	```
	git clone https://github.com/sake92/hepek
	```
</details>
<details><summary>Show 2 hidden projects...</summary>

- <b><a href="https://github.com/com-lihaoyi/scalatags">scalatags</a></b> (🥉14 ·  ⭐ 770) - ScalaTags is a small XML/HTML construction library.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/zalando/beard">beard</a></b> (🥉10 ·  ⭐ 120 · 💀) - A lightweight, logicless templating engine, written in Scala and.. <code>❗Unlicensed</code>
</details>
<br>

## Business Intelligence

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for data analysis, machine learning, and AI_

<details><summary><b><a href="https://github.com/JohnSnowLabs/spark-nlp">spark-nlp</a></b> (🥇29 ·  ⭐ 4.1K) - State of the Art Natural Language Processing. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/JohnSnowLabs/spark-nlp) (👨‍💻 120 · 🔀 740 · 📦 620 · 📋 910 - 1% open · ⏱️ 10.03.2026):

	```
	git clone https://github.com/johnsnowlabs/spark-nlp
	```
</details>
<details><summary><b><a href="https://github.com/snowplow/snowplow">Snowplow</a></b> (🥇28 ·  ⭐ 7K) - The leader in Customer Data Infrastructure. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/snowplow/snowplow) (👨‍💻 110 · 🔀 1.2K · 📥 7.6K · 📦 21 · 📋 4K - 1% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/snowplow/snowplow
	```
</details>
<details><summary><b><a href="https://github.com/intel/ipex-llm">bigdl</a></b> (🥈24 ·  ⭐ 8.7K) - Accelerate local LLM inference and finetuning (LLaMA, Mistral,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/intel/ipex-llm) (👨‍💻 120 · 🔀 1.4K · 📥 730 · 📋 3K - 40% open · ⏱️ 28.01.2026):

	```
	git clone https://github.com/intel-analytics/bigdl
	```
</details>
<details><summary><b><a href="https://github.com/apache/zeppelin">zeppelin</a></b> (🥈21 ·  ⭐ 6.6K) - Web-based notebook that enables data-driven, interactive data.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/apache/zeppelin) (👨‍💻 580 · 🔀 2.8K · ⏱️ 17.03.2026):

	```
	git clone https://github.com/apache/zeppelin
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/spire">spire</a></b> (🥈21 ·  ⭐ 1.8K) - Powerful new number types and numeric abstractions for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/spire) (👨‍💻 110 · 🔀 240 · 📋 430 - 36% open · ⏱️ 07.06.2025):

	```
	git clone https://github.com/typelevel/spire
	```
</details>
<details><summary><b><a href="https://github.com/scalanlp/breeze">breeze</a></b> (🥈19 ·  ⭐ 3.5K) - Breeze is/was a numerical processing library for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scalanlp/breeze) (👨‍💻 150 · 🔀 690 · 📋 540 - 16% open · ⏱️ 04.10.2025):

	```
	git clone https://github.com/scalanlp/breeze
	```
</details>
<details><summary><b><a href="https://github.com/openmole/openmole">openmole</a></b> (🥈19 ·  ⭐ 150) - Workflow engine for exploration of simulation models using high.. <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code></summary>

- [GitHub](https://github.com/openmole/openmole) (👨‍💻 49 · 🔀 47 · 📋 470 - 20% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/openmole/openmole
	```
</details>
<details><summary><b><a href="https://github.com/cequence-io/openai-scala-client">openai-scala-client</a></b> (🥈18 ·  ⭐ 240) - Scala client for OpenAI API and other major LLM.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/cequence-io/openai-scala-client) (👨‍💻 9 · 🔀 37 · 📋 57 - 10% open · ⏱️ 19.03.2026):

	```
	git clone https://github.com/cequence-io/openai-scala-client
	```
- [Maven](https://search.maven.org/artifact/io.cequence/openai-scala-client_2.13) (📦 8 · ⏱️ 06.03.2026):
	```
	<dependency>
		<groupId>io.cequence</groupId>
		<artifactId>openai-scala-client_2.13</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/typelevel/squants">squants</a></b> (🥉16 ·  ⭐ 930) - The Scala API for Quantities, Units of Measure and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/typelevel/squants) (👨‍💻 66 · 🔀 120 · 📋 160 - 38% open · ⏱️ 17.03.2026):

	```
	git clone https://github.com/typelevel/squants
	```
</details>
<details><summary><b><a href="https://github.com/vagmcs/Optimus">optimus</a></b> (🥉14 ·  ⭐ 150) - Optimus is a mathematical programming library for Scala. <code><a href="http://bit.ly/37RvQcA">❗️LGPL-3.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/vagmcs/Optimus) (👨‍💻 10 · 🔀 28 · 📥 2.2K · 📋 24 - 4% open · ⏱️ 13.01.2026):

	```
	git clone https://github.com/vagmcs/optimus
	```
</details>
<details><summary><b><a href="https://github.com/EmergentOrder/onnx-scala">onnx-scala</a></b> (🥉13 ·  ⭐ 140) - An ONNX (Open Neural Network eXchange) API and.. <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/EmergentOrder/onnx-scala) (👨‍💻 4 · 🔀 9 · 📋 11 - 18% open · ⏱️ 17.02.2026):

	```
	git clone https://github.com/emergentorder/onnx-scala
	```
</details>
<details><summary><b><a href="https://github.com/botkop/numsca">numsca</a></b> (🥉11 ·  ⭐ 190 · 💤) - numsca is numpy for scala. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code></summary>

- [GitHub](https://github.com/botkop/numsca) (🔀 19 · 📋 10 - 30% open · ⏱️ 24.05.2025):

	```
	git clone https://github.com/botkop/numsca
	```
</details>
<details><summary><b><a href="https://github.com/anskarl/LoMRF">lomrf</a></b> (🥉9 ·  ⭐ 87 · 💤) - LoMRF is an open-source implementation of Markov Logic Networks. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/anskarl/LoMRF) (👨‍💻 9 · 🔀 17 · ⏱️ 07.09.2024):

	```
	git clone https://github.com/anskarl/lomrf
	```
</details>
<details><summary>Show 13 hidden projects...</summary>

- <b><a href="https://github.com/haifengl/smile">smile</a></b> (🥇28 ·  ⭐ 6.4K · 📈) - Statistical Machine Intelligence & Learning Engine. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/spark-notebook/spark-notebook">spark-notebook</a></b> (🥈21 ·  ⭐ 3.1K · 💀) - Interactive and Reactive Data Science using Scala and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/twitter/algebird">algebird</a></b> (🥈21 ·  ⭐ 2.3K · 💀) - Abstract Algebra for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/charles-river-analytics/figaro">figaro</a></b> (🥉17 ·  ⭐ 760 · 💀) - Figaro Programming Language and Core Libraries. <code>❗Unlicensed</code>
- <b><a href="https://github.com/eaplatanios/tensorflow_scala">tensorflow_scala</a></b> (🥉16 ·  ⭐ 940 · 💀) - TensorFlow API for the Scala Programming Language. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/picnicml/doddle-model">doddle-model</a></b> (🥉12 ·  ⭐ 140 · 💀) - doddle-model: machine learning in Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/to-ithaca/libra">libra</a></b> (🥉9 ·  ⭐ 200 · 💀) - A dimensional analysis library based on dependent types. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/Clustering4Ever/Clustering4Ever">clustering4ever</a></b> (🥉9 ·  ⭐ 130 · 💀) - C4E, a JVM friendly library written in Scala for both.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/PoslavskySV/rings">rings</a></b> (🥉9 ·  ⭐ 79 · 💀) - Rings: efficient JVM library for polynomial rings. <code>❗Unlicensed</code>
- <b><a href="https://github.com/openmole/mgo">mgo</a></b> (🥉9 ·  ⭐ 74) - Purely functional genetic algorithms for multi-objective.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/pingel-org/axle">axle</a></b> (🥉9 ·  ⭐ 68 · 💀) - Axle Domain Specific Language for Scientific Cloud Computing and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/mrdimosthenis/Synapses">synapses</a></b> (🥉7 ·  ⭐ 73 · 💀) - A group of neural-network libraries for functional and mainstream.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/SciScala/NDScala">ndscala</a></b> (🥉6 ·  ⭐ 47 · 💀) - N-dimensional / multi-dimensional arrays (tensors) in Scala 3... <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code>
</details>
<br>

## Big Data

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for processing and handling big data sets_

<details><summary><b><a href="https://github.com/apache/spark">spark</a></b> (🥇29 ·  ⭐ 43K) - Apache Spark - A unified analytics engine for large-scale data processing. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/apache/spark) (👨‍💻 3.4K · 🔀 29K · 📋 300 - 98% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/apache/spark
	```
</details>
<details><summary><b><a href="https://github.com/apache/flink">flink</a></b> (🥇29 ·  ⭐ 26K) - Apache Flink. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/apache/flink) (👨‍💻 2.1K · 🔀 14K · 📦 21 · ⏱️ 26.03.2026):

	```
	git clone https://github.com/apache/flink
	```
</details>
<details><summary><b><a href="https://github.com/spotify/scio">scio</a></b> (🥈26 ·  ⭐ 2.6K) - A Scala API for Apache Beam and Google Cloud Dataflow. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/spotify/scio) (👨‍💻 260 · 🔀 520 · 📥 12K · 📋 1.3K - 9% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/spotify/scio
	```
</details>
<details><summary><b><a href="https://github.com/TouK/nussknacker">nussknacker</a></b> (🥈21 ·  ⭐ 710) - Low-code tool for automating actions on real time data | Stream.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/TouK/nussknacker) (👨‍💻 90 · 🔀 100 · 📥 620 · 📋 480 - 15% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/touk/nussknacker
	```
</details>
<details><summary><b><a href="https://github.com/openmole/gridscale">gridscale</a></b> (🥉11 ·  ⭐ 29) - Scala library for accessing various file, batch systems, job.. <code><a href="http://bit.ly/3pwmjO5">❗️AGPL-3.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/openmole/gridscale) (👨‍💻 5 · 🔀 8 · 📋 12 - 33% open · ⏱️ 21.03.2026):

	```
	git clone https://github.com/openmole/gridscale
	```
</details>
<details><summary>Show 9 hidden projects...</summary>

- <b><a href="https://github.com/twitter/scalding">scalding</a></b> (🥈22 ·  ⭐ 3.5K · 💀) - A Scala API for Cascading. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/twitter/summingbird">summingbird</a></b> (🥈20 ·  ⭐ 2.1K · 💀) - Streaming MapReduce with Scalding and Storm. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/akka/alpakka-kafka">alpakka-kafka</a></b> (🥈20 ·  ⭐ 1.4K) - Alpakka Kafka connector - Alpakka is a Reactive.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/Stratio/sparta">sparta</a></b> (🥉19 ·  ⭐ 530 · 💀) - Real Time Analytics and Data Pipelines based on Spark Streaming. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/BIDData/BIDMach">bidmach</a></b> (🥉18 ·  ⭐ 920 · 💀) - CPU and GPU-accelerated Machine Learning Library. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code>
- <b><a href="https://github.com/vegas-viz/Vegas">vegas</a></b> (🥉16 ·  ⭐ 730 · 💀) - The missing MatPlotLib for Scala + Spark. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/indix/schemer">schemer</a></b> (🥉9 ·  ⭐ 120 · 💀) - Schema registry for CSV, TSV, JSON, AVRO and Parquet schema... <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/galliaproject/gallia-core">gallia-core</a></b> (🥉9 ·  ⭐ 89 · 💀) - A schema-aware Scala library for data transformation. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/indix/sparkplug">sparkplug</a></b> (🥉9 ·  ⭐ 29 · 💀) - Spark package to plug holes in data using SQL based rules. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
</details>
<br>

## Distributed

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries and frameworks for building and maintaining distributed systems and fault-tolerant applications._

<details><summary><b><a href="https://github.com/apache/kafka">kafka</a></b> (🥇29 ·  ⭐ 32K) - Apache Kafka - A distributed event streaming platform. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/apache/kafka) (👨‍💻 1.7K · 🔀 15K · 📦 25 · ⏱️ 26.03.2026):

	```
	git clone https://github.com/apache/kafka
	```
</details>
<details><summary><b><a href="https://github.com/twitter/finagle">finagle</a></b> (🥈26 ·  ⭐ 8.9K) - A fault tolerant, protocol-agnostic RPC system. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/twitter/finagle) (👨‍💻 540 · 🔀 1.4K · 📦 21 · 📋 420 - 15% open · ⏱️ 02.02.2026):

	```
	git clone https://github.com/twitter/finagle
	```
</details>
<details><summary><b><a href="https://github.com/apache/pekko">pekko</a></b> (🥈23 ·  ⭐ 1.5K) - Build highly concurrent, distributed, and resilient message-driven.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/apache/pekko) (👨‍💻 1.1K · 🔀 190 · 📋 540 - 29% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/apache/incubator-pekko
	```
</details>
<details><summary><b><a href="https://github.com/xitrum-framework/glokka">glokka</a></b> (🥉9 ·  ⭐ 55) - Library to register and lookup actors by names in an Akka cluster. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/xitrum-framework/glokka) (👨‍💻 3 · 🔀 4 · 📋 30 - 13% open · ⏱️ 21.06.2025):

	```
	git clone https://github.com/xitrum-framework/glokka
	```
</details>
<details><summary>Show 8 hidden projects...</summary>

- <b><a href="https://github.com/akka/akka-core">akka</a></b> (🥇29 ·  ⭐ 13K) - A platform to build and run apps that are elastic, agile, and.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/lagom/lagom">lagom</a></b> (🥈21 ·  ⭐ 2.6K · 💀) - Reactive Microservices for the JVM. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/zalando-incubator/remora">Remora</a></b> (🥉14 ·  ⭐ 200 · 💀) - Kafka consumer lag-checking application for monitoring, written in.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/stephenmcd/curiodb">curiodb</a></b> (🥉11 ·  ⭐ 510 · 💀) - Distributed NoSQL Database. <code><a href="http://bit.ly/3rqEWVr">BSD-2</a></code>
- <b><a href="https://github.com/levkhomich/akka-tracing">akka-tracing</a></b> (🥉11 ·  ⭐ 320 · 💀) - A distributed tracing extension for Akka. Provides.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/parapet-io/parapet">parapet</a></b> (🥉11 ·  ⭐ 140 · 💀) - A purely functional library to build distributed and event-driven.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/yakivy/poppet">poppet</a></b> (🥉8 ·  ⭐ 27 · 💀) - Minimal, type-safe RPC Scala library. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/annetteplatform/annette">annette</a></b> (🥉7 ·  ⭐ 19 · 💀) - Platform to build distributed, scalable, enterprise-wide business.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
</details>
<br>

## ScalaJS

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries purely built for Scala.js_

<details><summary><b><a href="https://github.com/scala-js/scala-js">scala-js</a></b> (🥇25 ·  ⭐ 4.7K) - Scala.js, the Scala to JavaScript compiler. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scala-js/scala-js) (👨‍💻 110 · 🔀 400 · 📋 2.3K - 2% open · ⏱️ 15.03.2026):

	```
	git clone https://github.com/scala-js/scala-js
	```
</details>
<details><summary><b><a href="https://github.com/japgolly/scalajs-react">scalajs-react</a></b> (🥈22 ·  ⭐ 1.7K) - Facebooks React on Scala.JS. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/japgolly/scalajs-react) (👨‍💻 83 · 🔀 230 · 📋 540 - 5% open · ⏱️ 19.02.2026):

	```
	git clone https://github.com/japgolly/scalajs-react
	```
</details>
<details><summary><b><a href="https://github.com/raquo/Laminar">Laminar</a></b> (🥉15 ·  ⭐ 830) - Simple, expressive, and safe UI library for Scala.js. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/raquo/Laminar) (👨‍💻 20 · 🔀 57 · 📋 120 - 21% open · ⏱️ 08.03.2026):

	```
	git clone https://github.com/raquo/Laminar
	```
</details>
<details><summary>Show 4 hidden projects...</summary>

- <b><a href="https://github.com/scala-js/scala-js-dom">scala-js-dom</a></b> (🥈16 ·  ⭐ 330) - Statically typed DOM API for Scala.js. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/greencatsoft/scalajs-angular">scalajs-angular</a></b> (🥉14 ·  ⭐ 260 · 💀) - AngularJS Binding for Scala.js. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scalacenter/scalajs-bundler">scalajs-bundler</a></b> (🥉14 ·  ⭐ 240 · 💀) -  <code>❗Unlicensed</code>
- <b><a href="https://github.com/scalajs-io/nodejs">nodejs</a></b> (🥉14 ·  ⭐ 160 · 💀) - This project provides Scala.js type-safe bindings for Node.js.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## Logging

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

_Libraries for working with and generating logs._

<details><summary><b><a href="https://github.com/tinylog-org/tinylog">tinylog</a></b> (🥇25 ·  ⭐ 770) - tinylog is a lightweight logging framework for Java, Kotlin, Scala,.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/tinylog-org/tinylog) (👨‍💻 23 · 🔀 84 · 📥 87K · 📦 1.8K · 📋 260 - 14% open · ⏱️ 10.03.2026):

	```
	git clone https://github.com/tinylog-org/tinylog
	```
</details>
<details><summary><b><a href="https://github.com/lightbend-labs/scala-logging">scala-logging</a></b> (🥈16 ·  ⭐ 930) - Convenient and performant logging library for Scala.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lightbend-labs/scala-logging) (👨‍💻 46 · 🔀 130 · 📋 130 - 20% open · ⏱️ 30.01.2026):

	```
	git clone https://github.com/lightbend-labs/scala-logging
	```
</details>
<details><summary>Show 2 hidden projects...</summary>

- <b><a href="https://github.com/Log4s/log4s">log4s</a></b> (🥉11 ·  ⭐ 180) - High-performance SLF4J wrapper for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/tersesystems/blindsight">blindsight</a></b> (🥉9 ·  ⭐ 91 · 💀) - Blindsight is a Scala logging API with DSL based.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
</details>
<br>

## Others

<a href="#contents"><img align="right" width="15" height="15" src="https://git.io/JtehR" alt="Back to top"></a>

<details><summary><b><a href="https://github.com/ACINQ/eclair">eclair</a></b> (🥇25 ·  ⭐ 1.3K) - A scala implementation of the Lightning Network. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/ACINQ/eclair) (👨‍💻 54 · 🔀 270 · 📥 49K · 📋 790 - 5% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/acinq/eclair
	```
</details>
<details><summary><b><a href="https://github.com/sangria-graphql/sangria">sangria</a></b> (🥇24 ·  ⭐ 2K) - Scala GraphQL implementation. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sangria-graphql/sangria) (👨‍💻 71 · 🔀 220 · 📋 480 - 13% open · ⏱️ 22.03.2026):

	```
	git clone https://github.com/sangria-graphql/sangria
	```
</details>
<details><summary><b><a href="https://github.com/softwaremill/bootzooka">bootzooka</a></b> (🥇20 ·  ⭐ 780) - Template project to quickly start developing a Scala-based.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/softwaremill/bootzooka) (👨‍💻 79 · 🔀 150 · 📋 140 - 15% open · ⏱️ 26.03.2026):

	```
	git clone https://github.com/softwaremill/bootzooka
	```
</details>
<details><summary><b><a href="https://github.com/pureconfig/pureconfig">pureconfig</a></b> (🥇19 ·  ⭐ 1.5K) - A boilerplate-free library for loading configuration files. <code><a href="http://bit.ly/3postzC">MPL-2.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/pureconfig/pureconfig) (👨‍💻 92 · 🔀 180 · 📋 310 - 15% open · ⏱️ 19.03.2026):

	```
	git clone https://github.com/pureconfig/pureconfig
	```
</details>
<details><summary><b><a href="https://github.com/laserdisc-io/fs2-aws">fs2-aws</a></b> (🥇18 ·  ⭐ 200) - fs2 utilities to interact with AWS. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/laserdisc-io/fs2-aws) (👨‍💻 31 · 🔀 51 · 📋 76 - 28% open · ⏱️ 18.03.2026):

	```
	git clone https://github.com/laserdisc-io/fs2-aws
	```
</details>
<details><summary><b><a href="https://github.com/ruippeixotog/scala-scraper">scala-scraper</a></b> (🥈17 ·  ⭐ 730) - A Scala library for scraping content from HTML pages. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/ruippeixotog/scala-scraper) (👨‍💻 16 · 🔀 100 · 📋 65 - 13% open · ⏱️ 19.03.2026):

	```
	git clone https://github.com/ruippeixotog/scala-scraper
	```
</details>
<details><summary><b><a href="https://github.com/scallop/scallop">scallop</a></b> (🥈17 ·  ⭐ 680) - a simple Scala CLI parsing library. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/scallop/scallop) (👨‍💻 27 · 🔀 58 · 📋 200 - 5% open · ⏱️ 30.11.2025):

	```
	git clone https://github.com/scallop/scallop
	```
</details>
<details><summary><b><a href="https://github.com/bkirwi/decline">decline</a></b> (🥈17 ·  ⭐ 670) - A composable command-line parser for Scala. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/bkirwi/decline) (👨‍💻 38 · 🔀 75 · 📋 90 - 27% open · ⏱️ 16.03.2026):

	```
	git clone https://github.com/bkirwi/decline
	```
</details>
<details><summary><b><a href="https://github.com/erikvanoosten/metrics-scala">metrics-scala</a></b> (🥈17 ·  ⭐ 430) - The scala API for Dropwizards Metrics. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/erikvanoosten/metrics-scala) (👨‍💻 90 · 🔀 61 · 📋 75 - 1% open · ⏱️ 05.02.2026):

	```
	git clone https://github.com/erikvanoosten/metrics-scala
	```
</details>
<details><summary><b><a href="https://github.com/com-lihaoyi/PPrint">pprint</a></b> (🥈16 ·  ⭐ 250) - Pretty-printing value, types and type-signatures in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/com-lihaoyi/PPrint) (👨‍💻 21 · 🔀 42 · 📋 45 - 42% open · ⏱️ 04.12.2025):

	```
	git clone https://github.com/com-lihaoyi/pprint
	```
</details>
<details><summary><b><a href="https://github.com/hagay3/skuber">skuber</a></b> (🥈14 ·  ⭐ 89) - A Scala Kubernetes client library. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/hagay3/skuber) (👨‍💻 67 · 🔀 34 · 📋 62 - 59% open · ⏱️ 11.08.2025):

	```
	git clone https://github.com/hagay3/skuber
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/scountries">scountries</a></b> (🥈14 ·  ⭐ 22) - Scala library that provides an enumeration of ISO 3166 codes.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lambdaworks/scountries) (👨‍💻 6 · 🔀 3 · 📋 6 - 50% open · ⏱️ 24.03.2026):

	```
	git clone https://github.com/lambdaworks/scountries
	```
- [Maven](https://search.maven.org/artifact/io.lambdaworks/scountries_3) (⏱️ 13.01.2026):
	```
	<dependency>
		<groupId>io.lambdaworks</groupId>
		<artifactId>scountries_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/plokhotnyuk/rtree2d">rtree2d</a></b> (🥈13 ·  ⭐ 140) - RTree2D is a 2D immutable R-tree for ultra-fast nearest and.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/plokhotnyuk/rtree2d) (👨‍💻 6 · 🔀 11 · 📋 18 - 44% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/plokhotnyuk/rtree2d
	```
</details>
<details><summary><b><a href="https://github.com/stac-utils/stac4s">stac4s</a></b> (🥈13 ·  ⭐ 17) - A Scala library with primitives to build applications using the.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/stac-utils/stac4s) (👨‍💻 16 · 🔀 9 · 📋 51 - 39% open · ⏱️ 25.03.2026):

	```
	git clone https://github.com/stac-utils/stac4s
	```
</details>
<details><summary><b><a href="https://github.com/lambdaworks/scurl-detector">scurl-detector</a></b> (🥉12 ·  ⭐ 16) - Scala library that detects and extracts URLs from text. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/lambdaworks/scurl-detector) (👨‍💻 11 · 🔀 2 · ⏱️ 24.03.2026):

	```
	git clone https://github.com/lambdaworks/scurl-detector
	```
- [Maven](https://search.maven.org/artifact/io.lambdaworks/scurl-detector_3) (⏱️ 13.01.2026):
	```
	<dependency>
		<groupId>io.lambdaworks</groupId>
		<artifactId>scurl-detector_3</artifactId>
		<version>[VERSION]</version>
	</dependency>
	```
</details>
<details><summary><b><a href="https://github.com/azavea/franklin">franklin</a></b> (🥉11 ·  ⭐ 84) - A STAC/OGC API Features Web Service. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/azavea/franklin) (👨‍💻 13 · 🔀 18 · 📋 210 - 51% open · ⏱️ 31.10.2025):

	```
	git clone https://github.com/azavea/franklin
	```
</details>
<details><summary><b><a href="https://github.com/marconilanna/REPLesent">replesent</a></b> (🥉10 ·  ⭐ 400) - A neat little tool to build presentations using the Scala REPL. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code></summary>

- [GitHub](https://github.com/marconilanna/REPLesent) (👨‍💻 9 · 🔀 34 · ⏱️ 05.03.2026):

	```
	git clone https://github.com/marconilanna/replesent
	```
</details>
<details><summary><b><a href="https://github.com/ColOfAbRiX/figlet4s">figlet4s</a></b> (🥉10 ·  ⭐ 38) - ASCII-art banners in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/ColOfAbRiX/figlet4s) (👨‍💻 1 · 🔀 2 · 📋 26 - 46% open · ⏱️ 02.02.2026):

	```
	git clone https://github.com/colofabrix/figlet4s
	```
</details>
<details><summary><b><a href="https://github.com/xitrum-framework/scaposer">scaposer</a></b> (🥉8 ·  ⭐ 38) - GNU Gettext .po file loader for Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code></summary>

- [GitHub](https://github.com/xitrum-framework/scaposer) (👨‍💻 9 · 🔀 7 · 📋 18 - 22% open · ⏱️ 21.06.2025):

	```
	git clone https://github.com/xitrum-framework/scaposer
	```
</details>
<details><summary><b><a href="https://github.com/sirthias/spliff">spliff</a></b> (🥉6 ·  ⭐ 61) - Efficient diffing in Scala. <code><a href="http://bit.ly/3postzC">MPL-2.0</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/sirthias/spliff) (👨‍💻 3 · 🔀 2 · 📋 2 - 50% open · ⏱️ 03.11.2025):

	```
	git clone https://github.com/sirthias/spliff
	```
</details>
<details><summary><b><a href="https://github.com/outr/mailgun4s">mailgun4s</a></b> (🥉6 ·  ⭐ 17) - Mailgun API implementation in Scala. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code></summary>

- [GitHub](https://github.com/outr/mailgun4s) (👨‍💻 6 · 🔀 7 · ⏱️ 18.03.2026):

	```
	git clone https://github.com/outr/mailgun4s
	```
</details>
<details><summary>Show 30 hidden projects...</summary>

- <b><a href="https://github.com/locationtech/geotrellis">geotrellis</a></b> (🥇18 ·  ⭐ 1.4K) - GeoTrellis is a geographic data processing engine for high.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scopt/scopt">scopt</a></b> (🥈17 ·  ⭐ 1.4K) - command line options parsing for Scala. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scalafx/scalafx">scalafx</a></b> (🥈17 ·  ⭐ 700) - ScalaFX simplifies creation of JavaFX-based user interfaces.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/iheartradio/play-swagger">play-swagger</a></b> (🥈17 ·  ⭐ 410 · 💀) - Swagger spec generator for play framework. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ciren/cilib">cilib</a></b> (🥈16 ·  ⭐ 120 · 💀) - Typesafe, purely functional Computational Intelligence. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/com-lihaoyi/fansi">fansi</a></b> (🥈15 ·  ⭐ 240) - Scala/Scala.js library for manipulating Fancy Ansi colored.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/scala-android/sbt-android">sbt-android</a></b> (🥈14 ·  ⭐ 740 · 💀) - An easy-to-use sbt plugin for working with all Android.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/pocorall/scaloid">scaloid</a></b> (🥈13 ·  ⭐ 2.1K · 💀) - Scaloid makes your Android code easy to understand and.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/banana-rdf/banana-rdf">banana-rdf</a></b> (🥈13 ·  ⭐ 300 · 💀) - Banana RDF. <code>❗Unlicensed</code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/SpinGo/op-rabbit">op-rabbit</a></b> (🥈13 ·  ⭐ 230 · 💀) - The Opinionated RabbitMQ Library for Scala and Akka. <code>❗Unlicensed</code>
- <b><a href="https://github.com/enragedginger/akka-quartz-scheduler">akka-quartz-scheduler</a></b> (🥉12 ·  ⭐ 560 · 💀) - Quartz Extension and utilities for cron-style.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/nbronson/scala-stm">scala-stm</a></b> (🥉12 ·  ⭐ 250 · 💀) - A library-based Software Transactional Memory (STM) for Scala,.. <code><a href="http://bit.ly/3aKzpTv">BSD-3</a></code>
- <b><a href="https://github.com/sirthias/scala-ssh">scala-ssh</a></b> (🥉12 ·  ⭐ 230 · 💀) - Remote shell access via SSH for your Scala applications. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/com-lihaoyi/mainargs">mainargs</a></b> (🥉12 ·  ⭐ 210 · 📉) - A small, convenient, dependency-free library for.. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code> <code><img src="https://www.scala-js.org/assets/img/scala-js-logo.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/simplexspatial/osm4scala">osm4scala</a></b> (🥉12 ·  ⭐ 87 · 💀) - Scala and Spark library focused on reading OpenStreetMap Pbf files. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/phenoscape/scowl">scowl</a></b> (🥉11 ·  ⭐ 60 · 💀) - A Scala DSL for programming with the OWL API. <code><a href="http://bit.ly/34MBwT8">MIT</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/miniboxing/miniboxing-plugin">miniboxing-plugin</a></b> (🥉10 ·  ⭐ 120 · 💀) - Miniboxing is a program transformation that improves.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/scalafiddle/scalafiddle-editor">scalafiddle-editor</a></b> (🥉10 ·  ⭐ 110 · 💀) - Web user interface for ScalaFiddle. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/dvgica/managerial">managerial</a></b> (🥉10 ·  ⭐ 14) - A zero-dependency Scala library for managing resources.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/backuity/clist">clist</a></b> (🥉8 ·  ⭐ 100 · 💀) - Command Line Interface Scala Toolkit. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/ScalaWilliam/xs4s">xs4s</a></b> (🥉8 ·  ⭐ 61 · 💀) - XML Streaming for Scala including FS2/cats support. <code>❗Unlicensed</code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/marianogappa/ostinato">ostinato</a></b> (🥉8 ·  ⭐ 53 · 💀) - A chess library that runs on the server (Scala) and on the browser.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/xitrum-framework/scala-xgettext">scala-xgettext</a></b> (🥉8 ·  ⭐ 26 · 💀) - Scala compiler plugin that acts like GNU xgettext command to.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/aptusproject/aptus-core">aptus-core</a></b> (🥉8 ·  ⭐ 10) - A utility library aiming to simplify the Scala coding.. <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code> <code><img src="https://scalac.io/wp-content/uploads/2021/02/image-125-1.svg" style="display:inline;" width="13" height="13"></code>
- <b><a href="https://github.com/aws4s/aws4s">aws4s</a></b> (🥉7 ·  ⭐ 87 · 💀) - Non-blocking AWS SDK for Scala exposing strongly-typed APIs built on top.. <code><a href="http://bit.ly/34MBwT8">MIT</a></code>
- <b><a href="https://github.com/locationtech/sfcurve">sfcurve</a></b> (🥉6 ·  ⭐ 87 · 💀) - LocationTech SFCurve is a Scala library for the creation,.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/eckerdcollege/google-api-scala">google-api-scala</a></b> (🥉5 ·  ⭐ 18 · 💀) - This API is a wrapper for the google java libraries... <code><a href="http://bit.ly/3nYMfla">Apache-2</a></code>
- <b><a href="https://github.com/allawala/service-chassis">service-chassis</a></b> (🥉5 ·  ⭐ 7) - A scala chassis to get your applications and services.. <code>❗Unlicensed</code>
- <b><a href="https://github.com/gonearewe/SevenZ4S">sevenz4s</a></b> (🥉4 ·  ⭐ 37 · 💀) - SevenZip library for Scala, easy to use. <code><a href="https://tldrlegal.com/search?q=LGPL-2.1">❗️LGPL-2.1</a></code>
- <b><a href="https://github.com/toknapp/google4s">google4s</a></b> (🥉3 ·  ⭐ 11 · 💀) - A lean, functional library for Google Cloud Services in Scala. <code>❗Unlicensed</code>
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
