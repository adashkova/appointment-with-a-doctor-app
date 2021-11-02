import { combineReducers } from 'redux';

import { doctors as doctorsReducer } from './doctors';

export default combineReducers({ doctorsReducer });
