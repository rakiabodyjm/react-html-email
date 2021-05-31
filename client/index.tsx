// eslint-disable-next-line no-use-before-define
import { hydrate, render } from 'react-dom'
// import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/core'
import './global.css'
import React from 'react'
import App from './src/App'
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

// render(sheets.collect(<App />), document.getElementById('root'))
hydrate(sheets.collect(<App />), document.getElementById('root'))

// eslint-disable-next-line no-undef
interface NodeModuleHot extends NodeModule {
  hot?: {
    // eslint-disable-next-line no-unused-vars
    accept?: (arg1?: string, arg2?: () => void) => void
  }
  // eslint-disable-next-line no-unused-vars
}

const webpackHotModule: NodeModuleHot = module
if (webpackHotModule?.hot?.accept) {
  webpackHotModule.hot.accept()
}
