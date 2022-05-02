import { combineReducers } from 'redux';
import { noteConstants } from '../actions/note/constant';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  account_id: null,
  username: null,
  title: null,
  description: null,
  is_template: false,
  course_name: null,
  course_id: null,
  course_no: null,
  school_name: null,
  school_id: null,
  note_type: null,
  bean: null,
  preview_filename: null,
  preview_url: null,
  pdf_filename: null,
  notability_filename: null,
  goodnotes_filename: null,
  view_cnt: null,
  saved_cnt: null,
  created_at: null,
  tagIds: [], // only ids
  is_saved: false,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case noteConstants.READ_NOTE_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case noteConstants.READ_NOTE_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
