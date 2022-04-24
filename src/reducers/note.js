import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  account_id: null,
  title: null,
  description: null,
  is_template: false,
  course_id: null,
  school_id: null,
  note_type: null,
  bean: null,
  preview_filename: null,
  pdf_filename: null,
  notability_filename: null,
  goodnote_filename: null,
  view_cnt: null,
  saved_cnt: null,
  created_at: null,
  tagIds: [], // only ids
  is_saved: false,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
