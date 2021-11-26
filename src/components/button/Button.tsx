import React, { FC } from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'

export const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => (
  <MuiButton variant={variant} {...rest}>
    {children}
  </MuiButton>
)

export default Button
