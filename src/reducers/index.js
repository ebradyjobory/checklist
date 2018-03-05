import { combineReducers } from 'redux';
import exampleReducer from './example-reducer';

// Your reducers will be imported and placed into this object with their names as keys
const reducers = {
  exampleReducer
};

export default combineReducers({...reducers})