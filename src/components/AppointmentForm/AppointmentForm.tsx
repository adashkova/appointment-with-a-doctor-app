import { FC, useState } from 'react'
import { IClient } from '../../api'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { appointmentSchema } from '../../validationSchema/appointmentSchema'
import { Spacing, Color } from '../../styles'
import Grid from '@mui/material/Grid'
import { Button } from '../Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import DatePicker from '@material-ui/lab/DatePicker'
import TimePicker from '@material-ui/lab/TimePicker'
import { ModalSuccess } from '../ModalSuccess'
import SendIcon from '@mui/icons-material/Send'

export const AppointmentForm: FC = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IClient>({
    resolver: yupResolver(appointmentSchema),
    mode: 'onChange',
  })

  // Todo type = Date
  const [date, setDate] = useState<any>(null)
  const [time, setTime] = useState<any>(null)
  const [client, setClient] = useState<IClient>({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
  })
  const { push } = useHistory()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const handleOpen = () => setIsModalOpen(true)

  const onSubmit = (data: IClient) => {
    setClient(data)
    handleOpen()
    setTimeout(() => {
      push('/')
    }, 5000)
  }

  return (
    <Grid container justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)} data-testid="appointmentForm">
        <Grid item xs={12} mb={Spacing.sm8}>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={() => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select date"
                  value={date}
                  onChange={(value) => {
                    setDate(value)
                    setValue('date', value)
                  }}
                  renderInput={(params: any) => (
                    <TextField {...params} data-testid="datePicker" />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          {errors.date && (
            <Typography color={Color.red} mt={Spacing.sm8}>
              {errors.date.message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} mb={Spacing.sm8}>
          <Controller
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Select time"
                  value={time}
                  onChange={(value) => {
                    setTime(value)
                    setValue('time', value)
                  }}
                  renderInput={(params: any) => (
                    <TextField {...params} data-testid="timePicker" />
                  )}
                  minTime={new Date(0, 0, 0, 8)}
                  maxTime={new Date(0, 0, 0, 18, 45)}
                />
              </LocalizationProvider>
            )}
            name="time"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          {errors.time && (
            <Typography color={Color.red} mt={Spacing.sm8}>
              {errors.time.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                className="materialUITextField"
                placeholder="First Name"
                style={{ width: 265 }}
                data-testid="firstNameInput"
              />
            )}
            name="firstName"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          {errors.firstName && (
            <Typography color={Color.red} mt={Spacing.sm8}>
              {errors.firstName.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                className="materialUITextField"
                placeholder="Last Name"
                style={{ width: 265 }}
                data-testid="lastNameInput"
              />
            )}
            name="lastName"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={12} mb={Spacing.sm8}>
          {errors.lastName && (
            <Typography color={Color.red} mt={Spacing.sm8}>
              {errors.lastName.message}
            </Typography>
          )}
        </Grid>

        <Button fullWidth type="submit" disabled={!isValid}>
          Submit
          <SendIcon style={{ marginLeft: Spacing.sm8 }} />
        </Button>
      </form>
      <ModalSuccess isModalOpen={isModalOpen} client={client} />
    </Grid>
  )
}