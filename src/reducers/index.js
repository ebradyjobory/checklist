import { combineReducers } from 'redux';
import reducer from './reducer';

// Your reducers will be imported and placed into this object with their names as keys
const reducers = {
  reducer
};

export default combineReducers({...reducers})