import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import note from './note';
import tag from './tag';

export default combineReducers({
  common,
  note,
  user,
  tag,
});
