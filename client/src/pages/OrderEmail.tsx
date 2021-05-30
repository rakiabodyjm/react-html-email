import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
// import RealmLogo from '@client/assets/images/realm1000.png'
// import Realm1000 from '@client/assets/images/realm1000.png'
// import OrderEmailCopy from '@client/src/pages/OrderEmailCopy'
// import image from '@client/assets/'
import image from '../../assets/images/realm1000.png'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    background: theme.palette.secondary.main,
    margin: 'auto',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
  image: {
    height: '100%',
  },
}))
const OrderEmail = () => {
  console.log('image', image)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div
        style={{
          height: 60,
          width: 60,
          // background: 'red',
          // background: 'url(/public/images/realm1000.png)',
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />
    </div>
  )
}

export default OrderEmail
