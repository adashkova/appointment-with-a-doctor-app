import { FC } from 'react';
import { IDoctor } from '../../interfaces/interfaces';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AppointmentForm from '../AppointmentForm';

interface IDoctorProfileProps {
  doctor: IDoctor;
}

const DoctorProfile: FC<IDoctorProfileProps> = ({ doctor }) => (
  <Grid container justifyContent="center">
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      xl={2}
      style={{ backgroundColor: '#addfd4' }}
      justifyContent="center"
      p={2}
    >
      <Grid container justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src={doctor && doctor.avatar}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />

        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <Typography variant="h5" component="div" mb={2}>
              {doctor && doctor.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Description. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12} md={9} sm={8} xl={8} p={4}>
      <Grid container justifyContent="center">
        <Typography variant="subtitle1" gutterBottom component="div" mb={2}>
          Please, choose a day and time of an appointment
        </Typography>

        <AppointmentForm />
      </Grid>
    </Grid>
  </Grid>
);

export default DoctorProfile;
