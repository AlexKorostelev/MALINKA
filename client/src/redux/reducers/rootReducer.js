import { combineReducers } from 'redux';
import settingsStateReducer from './settingsStateReducer';

const rootReducer = combineReducers({
  pinSettings: settingsStateReducer,
});

export default rootReducer;
