import { Grid } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const EMail = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <MailOutlineIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default EMail
