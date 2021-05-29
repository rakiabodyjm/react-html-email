import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.secondary.main,
    margin: 'auto',
  },
  image: {
    maxHeight: 80,
  },
}))
const OrderEmail = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        alt="REALM1000"
        src="https://realm1000.com/_next/image?url=%2Fassets%2Fnavbar%2Frealm-logo.png&w=3840&q=75"
      />
    </div>
  )
}

export default OrderEmail
