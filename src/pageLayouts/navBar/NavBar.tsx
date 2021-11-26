import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import { Color, Spacing } from '../../styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

export const NavBar: FC = ({ children }) => (
  <Box sx={{ flexGrow: 1 }} data-testid="NavBar">
    <AppBar position="static" style={{ backgroundColor: Color.darkGreen }}>
      <Toolbar>
        <LocalHospitalIcon />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ margin: `0 ${Spacing.sm16}` }}
        >
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
)
