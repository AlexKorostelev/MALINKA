import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const initialState = {
  pinSettings: [],
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export {
  store,
  initialState,
};
