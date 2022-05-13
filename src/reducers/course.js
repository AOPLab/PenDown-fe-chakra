import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
import { commonConstants } from '../actions/common/constant';
import { courseConstants } from '../actions/course/constant';

const prototype = {
  id: null,
  school_id: null,
  school_name: null,
  name: null,
  no: null,
  note_cnt: null,
  last_updated_time: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case commonConstants.SEARCH_COURSES_SUCCESS: {
      const data = {};
      action.payload.courses.map((course) => {
        data[course.course_id] = {
          id: course.course_id,
          name: course.course_name,
          no: course.course_no,
          school_id: course.school_id,
          school_name: course.school_name,
          note_cnt: course.note_cnt,
          last_updated_time: course.last_updated_time,
        };
        return course;
      });
      return {
        ...state,
        ...data,
      };
    }

    case courseConstants.GET_SCHOOL_COURSE_SUCCESS: {
      const data = {};
      action.payload.map((item) => {
        data[item.course_id] = {
          ...prototype,
          // ...state[item.course_id],
          // ...item,
          id: item.course_id,
          name: item.course_name,
          no: item.course_no,
          school_id: item.school_id,
          note_cnt: item.note_cnt,
          last_updated_time: item.last_updated_time,
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
          id: action.payload.id,
          name: action.payload.name,
          no: action.payload.no,
          school_id: action.payload.school_id,
          note_cnt: action.payload.note_cnt,
          last_updated_time: action.payload.last_updated_time,
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
      return [...new Set([...action.payload.map((item) => item.course_id), ...state])];
    }
    case courseConstants.GET_COURSE_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }

    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
