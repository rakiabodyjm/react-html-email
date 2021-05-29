import express from 'express'
import { config } from 'dotenv'
// import apphtml from './client/app'
// import apphtml from './client/index'
// eslint-disable-next-line import/extensions

config()
const app = express()

// app.get('/', (req, res) => {
//   // console.log(htmlMarkup)
//   res.send(apphtml)
// })

app.listen(process.env.PORT || 6000, () => {
  console.log(`Listening at PORT: ${process.env.PORT}`)
})
