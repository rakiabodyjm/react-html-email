import { ThemeProvider, CssBaseline } from '@material-ui/core'
// import OrderEmail from '@client/src/pages/OrderEmail'
import OrderEmail from './pages/OrderEmail'
import theme from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderEmail />
    </ThemeProvider>
  )
}

export default App
