import { combineReducers } from 'redux';
import settingsStateReducer from './settingsStateReducer';
import homesReducer from './homesReducer';

const rootReducer = combineReducers({
  pinSettings: settingsStateReducer,
  homes: homesReducer,
});

export default rootReducer;
