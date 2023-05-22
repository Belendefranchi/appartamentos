import { Grid } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const Location = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <LocationOnIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default Location
