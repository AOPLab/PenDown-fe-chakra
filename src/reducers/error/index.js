import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import note from './note/note';
import tag from './tag/tag';

export default combineReducers({
  common,
  user,
  note,
  tag,
});
