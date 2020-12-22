import { combineReducers } from 'redux'
import settingsStateReducer from '../reducers/settingsStateReducer'

const rootReducer = combineReducers({
  pinSettings: settingsStateReducer,
})

export default rootReducer;
