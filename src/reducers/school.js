import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
import { commonConstants } from '../actions/common/constant';
import { schoolConstants } from '../actions/school/constant';

const prototype = {
  id: null,
  name: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case commonConstants.SEARCH_SCHOOLS_SUCCESS: {
      const data = {};
      action.payload.schools.map((school) => {
        data[school.school_id] = {
          id: school.school_id,
          name: school.school_name,
        };
        return school;
      });
      return {
        ...state,
        ...data,
      };
    }
    case schoolConstants.BROWSE_SCHOOL_SUCCESS: {
      const data = {};
      action.payload.map((item) => {
        data[item.school_id] = {
          id: item.school_id,
          name: item.school_name,
        };
        return item;
      });
      return data;
    }

    case schoolConstants.GET_SCHOOL_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          name: action.payload.name,
        },
      };
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case schoolConstants.BROWSE_SCHOOL_SUCCESS: {
      return action.payload.map((item) => item.school_id);
    }
    case schoolConstants.GET_SCHOOL_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
