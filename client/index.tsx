// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { render } from 'react-dom'
// import ReactDOMServer from 'react-dom/server'
import { CssBaseline, ServerStyleSheets, ThemeProvider } from '@material-ui/core'
import theme from './src/utils/theme'
import OrderEmail from './src/pages/OrderEmail'
import './global.css'
// const App = React.createElement('h1', {}, 'hello world')

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <OrderEmail />
//     </ThemeProvider>
//   )
// }

// const sheets = new ServerStyleSheets()
// const stringHtml = ReactDOMServer.renderToString(sheets.collect(<App />))
// const stringCss = sheets.toString()

// // console.log(sheets.toString())

const sheets = new ServerStyleSheets()
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderEmail />
    </ThemeProvider>
  )
}

render(sheets.collect(<App />), document.getElementById('root'))
// const stringHtml = ReactDOMServer.renderToString(sheets.collect(<App />))
// document.getElementById('root')?.append(stringHtml, sheets.toString())
// ReactDOM.render(sheets.collect(<App />), '#root')
