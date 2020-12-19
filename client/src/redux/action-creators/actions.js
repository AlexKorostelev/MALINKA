import * as TYPES from '../action-types/types';

function addPinSettings(arr) {
  return {
    type: TYPES.ADD_PIN_SETTINGS,
    payload: arr
  }
}

export {
  addPinSettings
}
