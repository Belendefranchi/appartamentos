import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const Search = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <SearchIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default Search
