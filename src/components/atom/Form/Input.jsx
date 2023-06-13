import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({name, label}) => {
  return (
    <TextField fullWidth label={label} id={name} />
  )
}
