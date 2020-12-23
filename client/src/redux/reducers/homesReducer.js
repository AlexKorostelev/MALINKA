import * as TYPES from '../action-types/types';

export default function home(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_HOMES:
      return action.payload;
    default:
      return state;
  }
}
