import { FC } from 'react';
import Grid from '@mui/material/Grid';
import NavBarLogo from '../NavBarLogo';
import NavBar from '../NavBar';

const Layout: FC = ({ children }) => (
  <Grid item container direction="column">
    <NavBar>
      <NavBarLogo path="/">BOOKDOC</NavBarLogo>
    </NavBar>

    <Grid item xs={12} container>
      <Grid item xs={1} />
      <Grid item xs={10} style={{ padding: '15px' }}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </Grid>
);

export default Layout;
