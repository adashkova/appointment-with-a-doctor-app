import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IDoctor } from '../../interfaces/interfaces';
import { styled } from '@mui/material/styles';
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
  textAlign: 'center',
  color: '#333232',
  textDecoration: 0,
}));

interface IDoctorItemProps {
  doctor: IDoctor;
  idx: number;
}

const DoctorItem: FC<IDoctorItemProps> = ({ doctor, idx }) => (
  <Item>
    <StyledDoctorLink to={`/doctors/${doctor.name}`} data-testid="DoctorLink">
      {idx + 1}. {doctor.name} ({doctor.speciality})
    </StyledDoctorLink>
  </Item>
);

export default DoctorItem;
