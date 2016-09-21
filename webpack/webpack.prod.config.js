var path = require('path')
var webpack = require('webpack')
var _ = require('lodash')

var defaults = require('./webpack.base.config')

module.exports = _.merge({}, defaults, {
  devtool: 'source-map',

  entry: [
    './client/index'
  ],

  output: {
    path: path.join('./', 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
