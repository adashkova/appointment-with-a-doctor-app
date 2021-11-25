import { styled } from '@mui/material/styles'
import { Color, Spacing } from '../../styles'
import { Link as RouterLink } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 60,
  lineHeight: '60px',
  marginBottom: Spacing.sm16,
  backgroundColor: Color.lightGreen,
}))

export const StyledDoctorLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  color: Color.darkGray,
  textDecoration: 0,
}))

export const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  ...theme.typography.fontWeightBold?.toString,
  textAlign: 'center',
  color: theme.palette.common.white,
  textDecoration: 0,
}))
