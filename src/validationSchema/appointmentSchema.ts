import * as yup from 'yup'

export const appointmentSchema = yup
  .object({
    firstName: yup
      .string()
      .required('This field is required')
      .max(20, 'First name must not exceed 20 characters'),
    lastName: yup
      .string()
      .required('This field is required')
      .max(20, 'Last name must not exceed 20 characters'),
    date: yup.string().required('This field is required'),
    time: yup.string().required('This field is required'),
  })
  .required()
