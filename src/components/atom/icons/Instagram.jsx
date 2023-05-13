import { Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const Instagram = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <InstagramIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default Instagram
