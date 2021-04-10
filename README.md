# react-ogp

🌐 The ultimate React OpenGraph component.

## Features

- Automatically sets `url` / `secure_url` for images and videos.
- TypeScript support

## Install

```sh
pnpm i react react-ogp
```

## Usage

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
