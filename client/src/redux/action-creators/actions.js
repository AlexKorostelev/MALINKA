/* eslint-disable import/prefer-default-export */
import * as TYPES from '../action-types/types';

function addPinSettings(arr) {
  return {
    type: TYPES.ADD_PIN_SETTINGS,
    payload: arr,
  };
}

function addHomes(arr) {
  return {
    type: TYPES.ADD_HOMES,
    payload: arr,
  };
}

export {
  addPinSettings,
  addHomes,
};
