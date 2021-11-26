import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, connect, useDispatch } from 'react-redux'
import { getDoctors } from '../../store/actions/actions'
import { RootState } from '../../store'
import { IDoctor } from '../../api'
import Grid from '@mui/material/Grid'
import { Layout } from '../../pageLayouts/pageLayout'
import { DoctorProfile } from '../../components/doctorProfile'

const DoctorPage: FC = () => {
  const { name } = useParams<{ name: string }>()

  const doctorsState = useSelector((state: RootState) => state.doctors)
  const dispatch = useDispatch()

  const doctor = doctorsState.doctors.filter(
    (doctor: IDoctor) => doctor.name === name,
  )

  useEffect(() => {
    dispatch(getDoctors())
  }, [dispatch])

  return (
    <Layout>
      <Grid container>{doctor && <DoctorProfile doctor={doctor[0]} />}</Grid>
    </Layout>
  )
}

export default connect()(DoctorPage)
