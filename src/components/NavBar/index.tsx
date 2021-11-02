import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

const NavBar: FC = ({ children }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: '#8acab5' }}>
      <Toolbar>
        <Icon>home</Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
