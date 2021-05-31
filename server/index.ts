import express from 'express'
import { config } from 'dotenv'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'

// interface WebPackConfigType extends Configuration {
//   [x: string]: any
// }

const compiler = webpack({ ...webpackConfig, mode: 'development' })
// import apphtml from './client/app'
// import apphtml from './client/index'
// eslint-disable-next-line import/extensions

config()

const app = express()

// app.get('/', (req, res) => {
//   // console.log(htmlMarkup)
//   res.send(apphtml)
// })

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.listen(process.env.PORT || 6000, () => {
  console.log(`Listening at PORT: ${process.env.PORT}`)
})
