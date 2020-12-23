import { combineReducers } from 'redux';
import settingsStateReducer from './settingsStateReducer';
import homesReducer from './homesReducer';
import userReducer from './userReduser';

const rootReducer = combineReducers({
  pinSettings: settingsStateReducer,
  homes: homesReducer,
  user: userReducer,
});

export default rootReducer;
