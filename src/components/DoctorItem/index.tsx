import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IDoctor } from '../../interfaces/interfaces';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 60,
  lineHeight: '60px',
  marginBottom: 15,
  backgroundColor: '#dce7e2',
}));

const StyledDoctorLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  color: '#333232',
  textDecoration: 0,
}));

interface IDoctorItemProps {
  doctor: IDoctor;
  idx: number;
}

const DoctorItem: FC<IDoctorItemProps> = ({ doctor, idx }) => (
  <Item>
    <Grid container justifyContent="center">
      <Grid item xs={2} md={1} style={{ margin: '10px 0' }}>
        <StyledDoctorLink to={`/doctors/${doctor.name}`}>
          <Avatar
            alt="Remy Sharp"
            src={doctor && doctor.avatar}
            sx={{ width: 40, height: 40 }}
          />
        </StyledDoctorLink>
      </Grid>
      <Grid item xs={5} md={2} lg={2}>
        <StyledDoctorLink
          to={`/doctors/${doctor.name}`}
          data-testid="DoctorLink"
        >
          {doctor.name} ({doctor.speciality})
        </StyledDoctorLink>
      </Grid>
    </Grid>
  </Item>
);

export default DoctorItem;
