import { combineReducers } from 'redux';
import { schoolConstants } from '../actions/school/constant';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  name: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
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
