import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import accounts from './accounts';
import course from './course';
import school from './school';
import note from './note';
import search from './search';
import tag from './tag';
import tagNotes from './tagNote';
import courseNotes from './courseNote';
import hotNotes from './hotNote';
import loading from './loading/index';
import error from './error/index';

export default combineReducers({
  auth,
  user,
  accounts,
  course,
  school,
  note,
  search,
  tag,
  loading,
  error,
  tagNotes,
  hotNotes,
  courseNotes,
});
