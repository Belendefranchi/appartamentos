import { createTheme } from '@mui/material'

const COLOR = {
  PRIMARY: '#000',
  SECONDARY: '#ff385c',
  LIGHT_SHADOW: '#f7f7f9',
  DARK_SHADOW: '#000'
}

export const themeAppartamentos = createTheme({
  palette: {
    primary: {
      main: COLOR.PRIMARY
    },
    secondary: {
      main: COLOR.SECONDARY
    }
  }
})
