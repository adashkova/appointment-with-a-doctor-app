import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const NavBar: FC = ({ children }) => (
  <Box sx={{ flexGrow: 1 }} data-testid="NavBar">
    <AppBar position="static" style={{ backgroundColor: '#8acab5' }}>
      <Toolbar>
        <LocalHospitalIcon />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ margin: '0 15px' }}
        >
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
