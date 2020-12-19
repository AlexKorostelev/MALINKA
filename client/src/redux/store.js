import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const initialState = {
  pinSettings: [],
}

const store = createStore(
  rootReducer,
  initialState,
)

export {
  store,
  initialState
} 
