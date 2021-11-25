import { FC, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { RootState } from '../../store'
import { IDoctor } from '../../api'
import { getDoctors, clearFilters } from '../../store/actions'
import Grid from '@mui/material/Grid'
import { Button } from '../../components/Button'
import { DoctorItem } from '../../components/DoctorItem'

const ListOfDoctors: FC = () => {
  const doctorsState = useSelector((state: RootState) => state.doctors)
  const dispatch = useDispatch()

  const { doctors, filteredDoctors } = doctorsState

  let visibleDoctors = []

  filteredDoctors.length > 0
    ? (visibleDoctors = filteredDoctors)
    : (visibleDoctors = doctors)

  useEffect(() => {
    dispatch(getDoctors())
  }, [dispatch])

  const handleClick = () => {
    dispatch(clearFilters())
  }

  return (
    <Grid container direction="column" data-testid="listOfDoctors">
      {visibleDoctors.length > 0 &&
        visibleDoctors.map((doctor: IDoctor) => {
          return <DoctorItem doctor={doctor} key={doctor.id} />
        })}
      {filteredDoctors.length > 0 && (
        <Button
          variant="contained"
          onClick={handleClick}
          data-testid="btnListOfDoctors"
        >
          Show All
        </Button>
      )}
    </Grid>
  )
}

export default connect()(ListOfDoctors)
