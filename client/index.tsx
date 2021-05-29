// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core'
import theme from './src/utils/theme'
import OrderEmail from './src/pages/OrderEmail'
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

// export default `<!DOCTYPE HTML> ${stringHtml} <style>${stringCss}</style>`

const sheets = new ServerStyleSheets()
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <OrderEmail />
    </ThemeProvider>
  )
}

ReactDOM.render(sheets.collect(<App />), document.getElementById('#root'))
// ReactDOM.render(sheets.collect(<App />), '#root')
