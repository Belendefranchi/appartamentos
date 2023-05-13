import { Grid } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const Filter = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <FilterAltIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default Filter
