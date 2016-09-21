var path = require('path')
var webpack = require('webpack')
var _ = require('lodash')

var defaults = require('./webpack.base.config')

module.exports  = _.merge({}, defaults, {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/index'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
})
