import { ActionTypes } from '../../constants/constants'
import { IDoctor } from '../../api'
import { doctors as listOfDoctors } from '../../stabs'

const {
  SHOW_DOCTORS_BY_SPECIALITY,
  GET_DOCTORS,
  SHOW_DOCTORS_BY_NAME,
  CLEAR_FILTERS,
  IS_DOCTOR_BY_NAME,
} = ActionTypes

export const getDoctors = (doctors: IDoctor[] = listOfDoctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
})

export const showDoctorsBySpeciality = (speciality: string) => ({
  type: SHOW_DOCTORS_BY_SPECIALITY,
  payload: speciality,
})

export const showDoctorsByName = (name: string) => ({
  type: SHOW_DOCTORS_BY_NAME,
  payload: name,
})
export const isDoctorByName = () => ({
  type: IS_DOCTOR_BY_NAME,
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
})
