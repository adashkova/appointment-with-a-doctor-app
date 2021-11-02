import * as yup from 'yup';

export const appointmentSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
  })
  .required();
