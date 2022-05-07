import { combineReducers } from 'redux';
import { courseConstants } from '../actions/course/constant';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  name: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case courseConstants.GET_SCHOOL_COURSE_SUCCESS: {
      const data = {};
      action.payload.map((item) => {
        data[item.course_id] = {
          id: item.course_id,
          name: item.course_name,
          no: item.course_no,
          school: item.school_id,
        };
        return item;
      });
      return data;
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case courseConstants.GET_SCHOOL_COURSE_SUCCESS: {
      return action.payload.map((item) => item.course_id);
    }
    // case noteConstants.GET_NOTE_SUCCESS: {
    //   return [...new Set([...action.payload.note.tagIds, ...state])];
    // }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
