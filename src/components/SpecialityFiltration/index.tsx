import React, { FC, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { RootState } from '../../store/store';
import { IDoctor } from '../../interfaces/interfaces';
import { showDoctorsBySpeciality } from '../../store/actions/actions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SpecialityFiltration: FC = () => {
  const doctorsState = useSelector((state: RootState) => state.doctors);
  const [speciality, setSpeciality] = useState<string>('');

  const dispatch = useDispatch();

  const { doctors } = doctorsState;

  const handleChange = (event: any) => {
    setSpeciality(event.target.value);
    dispatch(showDoctorsBySpeciality(event.target.value));
  };

  return (
    <FormControl variant="standard" sx={{ mb: 3, minWidth: 300 }}>
      <InputLabel id="demo-simple-select-standard-label">Speciality</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={speciality}
        onChange={e => handleChange(e)}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {doctors.map((doctor: IDoctor) => (
          <MenuItem value={doctor.speciality} key={doctor.id}>
            {doctor.speciality}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default connect()(SpecialityFiltration);
