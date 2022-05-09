import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import note from './note/note';
import tag from './tag/tag';
import school from './school/school';
import course from './course/course';

export default combineReducers({
  common,
  user,
  note,
  tag,
  school,
  course,
});
