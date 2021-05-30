const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config')

const options = {
  contentBase: './build',
  hot: true,
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
