const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const path = require('path')
const app = require('express')()

const webpackConfig = require('./webpack.config')
/**
 *
 * ADd this line for faster webpack build
 */
const config = { ...webpackConfig, mode: 'development' }

const options = {
  // contentBase: path.resolve(__dirname, 'build', 'client'),
  contentBase: './client',
  hot: true,
  compress: true,
  host: 'localhost',
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
// eslint-disable-next-line new-cap
const server = new webpackDevServer(compiler, options)
server.listen(5050, 'localhost', () => {
  //   console.log('dev server listening on port 5000')
  console.log('dev server listening on port 5050')
})
