import { FC, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { RootState } from '../../store/store';
import { IDoctor } from '../../interfaces/interfaces';
import { getDoctors, clearFilters } from '../../store/actions/actions';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DoctorItem from '../DoctorItem';

const ListOfDoctors: FC = () => {
  const doctorsState = useSelector((state: RootState) => state.doctors);
  const dispatch = useDispatch();

  const { doctors, filteredDoctors } = doctorsState;

  let visibleDoctors = [];

  filteredDoctors.length
    ? (visibleDoctors = filteredDoctors)
    : (visibleDoctors = doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(clearFilters());
  };

  return (
    <Grid container direction="column">
      {visibleDoctors.length &&
        visibleDoctors.map((doctor: IDoctor, idx: number) => {
          return <DoctorItem doctor={doctor} idx={idx} key={doctor.id} />;
        })}
      {filteredDoctors.length !== 0 && (
        <Button variant="contained" onClick={handleClick}>
          Show All
        </Button>
      )}
    </Grid>
  );
};

export default connect()(ListOfDoctors);
