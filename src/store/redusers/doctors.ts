import { IAction } from '../../interfaces/interfaces';
import { ActionTypes } from '../../constants/constants';
import { IDoctor } from '../../interfaces/interfaces';

const {
  GET_DOCTORS,
  GET_DOCTORS_ERROR,
  GET_DOCTORS_STARTED,
  GET_DOCTORS_SUCCESS,
  SHOW_DOCTORS_BY_SPECIALITY,
  SHOW_DOCTORS_BY_NAME,
  CLEAR_FILTERS,
} = ActionTypes;

const initialState = {
  doctors: [],
  filteredDoctors: [],
  isLoading: false,
  isError: undefined,
};

interface IInitialState {
  doctors: IDoctor[];
  filteredDoctors: IDoctor[];
  isLoading: boolean;
  isError: undefined;
}

export const doctors = (
  state: IInitialState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };

    case SHOW_DOCTORS_BY_SPECIALITY:
      return {
        ...state,
        filteredDoctors: state.doctors.filter(
          doctor => doctor.speciality === action.payload
        ),
      };

    case SHOW_DOCTORS_BY_NAME:
      return {
        ...state,
        filteredDoctors: state.doctors.filter(
          doctor =>
            doctor.name.toLocaleLowerCase().split(' ')[0] ===
              action.payload.toLocaleLowerCase().split(' ')[0] ||
            doctor.name.toLocaleLowerCase().split(' ')[1] ===
              action.payload.toLocaleLowerCase().split(' ')[0]
        ),
      };

    case GET_DOCTORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        doctors: action.payload,
      };

    case GET_DOCTORS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filteredDoctors: [],
      };

    case GET_DOCTORS_ERROR:
      return {
        ...state,
        error: 'error',
      };

    default:
      return state;
  }
};
