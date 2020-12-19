import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  pinSettings: [],
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
)

export {
  store,
  initialState,
} 
