import { FC, useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { RootState } from '../../store'
import { IDoctor } from '../../api'
import { Spacing } from '../../styles'
import { showDoctorsBySpeciality } from '../../store/actions/actions'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const SpecialityFiltration: FC = () => {
  const doctorsState = useSelector((state: RootState) => state.doctors)
  const [speciality, setSpeciality] = useState<string>('')

  const dispatch = useDispatch()

  const { doctors, filteredDoctors } = doctorsState

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSpeciality(event.target.value)
    dispatch(showDoctorsBySpeciality(event.target.value))
  }

  return (
    <FormControl variant="standard" sx={{ mb: Spacing.md40, minWidth: 300 }}>
      <InputLabel id="demo-simple-select-standard-label">Speciality</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={filteredDoctors.length === 0 ? '' : speciality}
        onChange={handleChange}
        data-testid="specialityFiltration"
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {doctors.length > 0 &&
          doctors.map((doctor: IDoctor) => (
            <MenuItem value={doctor.speciality} key={doctor.id}>
              {doctor.speciality}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default connect()(SpecialityFiltration)
