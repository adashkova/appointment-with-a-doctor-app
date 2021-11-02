import { FC, useState } from 'react';
import { IClient } from '../../interfaces/interfaces';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '../../validationSchema/appointmentSchema';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import TimePicker from '@material-ui/lab/TimePicker';
import ModalSuccess from '../ModalSuccess';

const AppointmentForm: FC = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IClient>({
    resolver: yupResolver(appointmentSchema),
  });
  // Todo type = Date
  const [date, setDate] = useState<any>(null);
  const [time, setTime] = useState<any>(null);
  const [client, setClient] = useState<IClient>({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const onSubmit = (data: IClient) => {
    setClient(data);
    handleOpen();
    setTimeout(() => {
      handleClose();
    }, 5000);
  };

  return (
    <Grid container justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} mb={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                className="materialUITextField"
                placeholder="First Name"
                style={{ width: 265 }}
              />
            )}
            name="firstName"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={12} mb={2}>
          {errors.firstName && (
            <Typography color="red" mt={2}>
              {errors.firstName.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} mb={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                className="materialUITextField"
                placeholder="Last Name"
                style={{ width: 265 }}
              />
            )}
            name="lastName"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={12} mb={2}>
          {errors.lastName && (
            <Typography color="red" mt={2}>
              {errors.lastName.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} mb={2}>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={() => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select date"
                  value={date}
                  onChange={value => {
                    setDate(value);
                    setValue('date', value);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>

        <Grid item xs={12} mb={2}>
          {errors.date && (
            <Typography color="red" mt={2}>
              {errors.date.message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} mb={2}>
          <Controller
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Select time"
                  value={time}
                  onChange={value => {
                    setTime(value);
                    setValue('time', value);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
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
        <Grid item xs={12} mb={2}>
          {errors.time && (
            <Typography color="red" mt={2}>
              {errors.time.message}
            </Typography>
          )}
        </Grid>

        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
      <ModalSuccess isOpen={isModalOpen} client={client} />
    </Grid>
  );
};

export default AppointmentForm;
