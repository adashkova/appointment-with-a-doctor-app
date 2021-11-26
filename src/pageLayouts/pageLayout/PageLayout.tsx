import { FC } from 'react'
import Grid from '@mui/material/Grid'
import { NavBarLogo } from '../../components/navBarLogo'
import { NavBar } from '../navBar'
import { Spacing } from '../../styles'

export const Layout: FC = ({ children }) => (
  <Grid item container direction="column">
    <NavBar>
      <NavBarLogo path="/">BOOKDOC</NavBarLogo>
    </NavBar>

    <Grid item xs={12} container>
      <Grid item xs={1} />
      <Grid item xs={10} style={{ padding: Spacing.sm16 }}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </Grid>
)
