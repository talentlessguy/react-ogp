<p align="center">
  <img src="logo.svg" height="200px" />
</p>

# react-ogp

![Top lang][top-lang-badge-url]
![Vulnerabilities][vulns-badge-url]
[![Version][v-badge-url]][npm-url]
![Last commit][last-commit-badge-url]
![Minified size][size-badge-url] [![Downloads][dl-badge-url]][npm-url]

🌐 The ultimate React OpenGraph component.

## Features

- Automatically sets `url` / `secure_url` for images and videos.
- TypeScript support
- Forcing to complete _all_ properties for an object not to forget to fill some fields

## Install

```sh
pnpm i react react-ogp
```

## Usage

### Next.js

```jsx
import React from 'react'
import { OGP } from 'react-ogp'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <OGP
          url="https://example.com"
          title="My website"
          description="This is my website"
          siteName="example.com"
          image="http://example.com/cover.jpg"
        />
      </Head>
    </>
  )
}
```

### [React Helmet](https://github.com/nfl/react-helmet)

```jsx
import React from 'react'
import { OGP } from 'react-ogp'
import { Helmet as Head } from 'react-helmet'

export default function Index() {
  return (
    <>
      <Head>
        <OGP
          url="https://example.com"
          title="My website"
          description="This is my website"
          siteName="example.com"
          image="http://example.com/cover.jpg"
        />
      </Head>
    </>
  )
}
```

[top-lang-badge-url]: https://img.shields.io/github/languages/top/talentlessguy/react-ogp.svg?style=flat-square
[vulns-badge-url]: https://img.shields.io/snyk/vulnerabilities/npm/react-ogp.svg?style=flat-square
[v-badge-url]: https://img.shields.io/npm/v/react-ogp.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-ogp
[last-commit-badge-url]: https://img.shields.io/github/last-commit/talentlessguy/react-ogp.svg?style=flat-square
[size-badge-url]: https://img.shields.io/bundlephobia/min/react-ogp.svg?style=flat-square
[dl-badge-url]: https://img.shields.io/npm/dt/react-ogp?style=flat-square
