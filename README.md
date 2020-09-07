# demo-static-website

## Build Setup

Install dependencies.

```bash
$ npm install
```

## Development Mode 

Served on localhost:3000 with hot loading.

```bash
$ npm run dev
```

## Generate Content

Generate web-site as content in the dist directory.

```bash
$ npm run generate
```

## Test Serve

Makes use of nuxt test server to serve static contents of dist directory on localhost:3000.
Does not have hot reloading. Contents must be generated with `npm run generate` before serving, 
and must be regenerated to load changes.

```bash
$ npm run start
```

## Deployment to Firebase

Login to firebase with [firebase-cli](https://firebase.google.com/docs/cli#install-cli-mac-linux)

```bash
$ firebase login
```

Deploy static contents of dist directory to firebase hosting.

```bash
$ firebase deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
