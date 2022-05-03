import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import note from './note';

export default combineReducers({
  common,
  note,
  user,
});
