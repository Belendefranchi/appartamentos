import { Grid } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const Whatsapp = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <WhatsAppIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default Whatsapp
