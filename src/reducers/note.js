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
    case noteConstants.GET_NOTE_SUCCESS: {
      return {
        ...state,
        [action.payload.note.id]: {
          ...prototype,
          ...state[action.payload.note.id],
          ...action.payload.note,
        },
      };
    }
    case noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS: {
      const { notes } = action.payload;
      const data = {};
      notes.map((item) => {
        data[item.id] = {
          ...prototype,
          ...state[item.id],
          ...item,
        };
        return item;
      });
      return {
        ...state,
        ...data,
      };
    }
    case noteConstants.BROWSE_NOTES_HOT_SUCCESS: {
      const { notes } = action.payload;
      const data = {};
      notes.map((item) => {
        data[item.id] = {
          ...prototype,
          ...state[item.id],
          ...item,
        };
        return item;
      });
      return {
        ...state,
        ...data,
      };
    }
    case noteConstants.ADD_NOTE_SAVED_SUCCESS: {
      return {
        ...state,
        [action.payload]: {
          ...prototype,
          ...state[action.payload],
          is_saved: true,
        },
      };
    }
    case noteConstants.REMOVE_NOTE_SAVED_SUCCESS: {
      return {
        ...state,
        [action.payload]: {
          ...prototype,
          ...state[action.payload],
          is_saved: false,
        },
      };
    }
    case noteConstants.BUY_NOTE_SUCCESS: {
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
    case noteConstants.GET_NOTE_SUCCESS: {
      return [...new Set([action.payload.note.id, ...state])];
    }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
