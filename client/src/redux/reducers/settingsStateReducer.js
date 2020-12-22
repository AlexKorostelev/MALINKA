import * as TYPES from '../action-types/types';

export default function settingsStateReducer(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_PIN_SETTINGS:
      return action.payload;
    default:
      return state;
  }
}
