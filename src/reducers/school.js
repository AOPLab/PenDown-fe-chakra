import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  name: null,
};

const initialById = {
  1: { id: 1, name: 'National Taiwan University' },
  2: { id: 2, name: 'National Tsing Hua University' },
  3: { id: 3, name: 'National Chengchi University' },
};

const initialAllId = [1, 2, 3];

const byId = (state = initialById, action) => {
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
    default:
      return state;
  }
};

const allIds = (state = initialAllId, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
