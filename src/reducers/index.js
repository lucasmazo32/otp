import { combineReducers } from 'redux';
import filterReducer from './filter';
import optionsReducer from './options';

export default combineReducers({
  filterReducer,
  optionsReducer,
});
