import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack/webpack.dev.config.js'

const compiler = webpack(config)

const dev_middlewares = [
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),

  webpackHotMiddleware(compiler, {
    log: console.log, //eslint-disable-line no-console
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000, //eslint-disable-line no-magic-numbers
  })
]

export default dev_middlewares
