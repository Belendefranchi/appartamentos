import { createTheme } from '@mui/material'

const COLOR = {
  PRIMARY: '#25d366',
  SECONDARY: '#ff385c',
  LIGHT_SHADOW: '#f7f7f9',
  DARK_SHADOW: '#d9d9d9'
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
