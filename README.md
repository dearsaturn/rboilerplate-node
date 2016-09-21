# rchat
>A BREW (Babel, Express, React, Webpack) pipeline for small single-page apps in Node.

### Building and running in production (npm start)
`npm start` launches the server in production mode, which causes the following to happen:
* Transpiled files/bundles from the following two steps are purged.
* All of the server-side, bleeding-edge es6 code in `lib/` is transpiled to `dist/`.
* `webpack` transpiles all of the client-side code, bundles it and places it in `public`.

Optionally, the server can be started using `foreman`, and the listening port can be supplied like so: `PORT=xxxx npm start`


### Building and running in development (npm run dev-server)
`npm run dev-server` launches the server in development mode, which causes the following to happen:

* `nodemon` runs `babel-node` on `lib/server.js`, which automatically restarts the server when changes are made and does not require transpilation.
* `webpack`'s dev middleware is added to the server, allowing hot-reloading.
* `public` and `dist` are not generated (no transpilation occurs).
