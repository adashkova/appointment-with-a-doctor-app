import { ActionTypes } from '../../constants/constants';
import { IDoctor } from '../../interfaces/interfaces';
import { doctors as listOfDoctors } from '../../doctors';

const {
  SHOW_DOCTORS_BY_SPECIALITY,
  GET_DOCTORS,
  SHOW_DOCTORS_BY_NAME,
  CLEAR_FILTERS,
} = ActionTypes;

export const getDoctors = (doctors: IDoctor[] = listOfDoctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
});

export const showDoctorsBySpeciality = (speciality: string) => ({
  type: SHOW_DOCTORS_BY_SPECIALITY,
  payload: speciality,
});

export const showDoctorsByName = (name: string) => ({
  type: SHOW_DOCTORS_BY_NAME,
  payload: name,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
