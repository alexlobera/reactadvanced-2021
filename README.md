# Demos React Advanced 2021

# Reative Map, Vue, Nextjs

## Get started

`git clone git@github.com:alexlbr/reactadvanced-2021.git`

Make sure you are in the `main` branch.

`yarn`

`yarn start`

## Examples

- http://localhost:8889 React profile app
- http://localhost:8888 React chat app
- http://localhost:8887 Vue chat app
- http://localhost:3001 Nextjs app that hosts the microfrontends

To mount the Vue chat app in http://localhost:3001/chat, replace the port number `8888` with `8887` in`microfrontends/host/components/MountMicroFrontend.tsx`. Example:

```ts
<MountMicroFrontend url="http://localhost:8888/remoteEntry.js" name="chat" />
```

with

```ts
<MountMicroFrontend url="http://localhost:8887/remoteEntry.js" name="chat" />
```

then reload the page.

# Benchmark

`git checkout benchmark`

`yarn`

`yarn start`

Navigate to http://localhost:8880.
