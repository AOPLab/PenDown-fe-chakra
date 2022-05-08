import { combineReducers } from 'redux';
import { courseConstants } from '../actions/course/constant';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  name: null,
  no: null,
  school: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case courseConstants.GET_SCHOOL_COURSE_SUCCESS: {
      const data = {};
      action.payload.map((item) => {
        data[item.course_id] = {
          // ...prototype,
          // ...state[item.course_id],
          // ...item,
          id: item.course_id,
          name: item.course_name,
          no: item.course_no,
          school: item.school_id,
        };
        return item;
      });
      return {
        ...state,
        ...data,
      };
    }

    case courseConstants.GET_COURSE_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          name: action.payload.name,
          no: action.payload.no,
          school: action.payload.school,
        },
      };
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
    case courseConstants.GET_COURSE_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }

    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
