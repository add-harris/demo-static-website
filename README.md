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

Generate web-site as content in the `/dist` directory.

```bash
$ npm run generate
```

## Test Serve

Makes use of nuxt test server to serve static contents of `/dist` directory on `localhost:3000`.
Does not have hot reloading. Contents must be generated with `npm run generate` before serving, 
and must be regenerated to load changes.

```bash
$ npm run start
```

## Deployment to Firebase

Login to firebase with [firebase-cli](https://firebase.google.com/docs/cli#install-cli-mac-linux). 
This requires a google account to authenticate & logs you in under that account.

```bash
$ firebase login
```

Deploy static contents of dist directory to firebase hosting.

```bash
$ firebase deploy
```

Deployment is configured through the `.firebaserc` & `firebase.json` files.
- `.firebaserc` specifies the firebase project to deploy to.
- `firebase.json` specifies what files to upload i.e. contents of `/dist`.

The google account you are logged in as with in firebase-cli must be associated with the firebase project
and have permission to deploy.
