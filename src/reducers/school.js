import { combineReducers } from 'redux';
import { schoolConstants } from '../actions/school/constant';
// import { commonConstants } from '../actions/common/constant';

// const prototype = {
//   id: null,
//   name: null,
// };

// const initialById = {
//   1: { id: 1, name: 'National Taiwan University' },
//   2: { id: 2, name: 'National Tsing Hua University' },
//   3: { id: 3, name: 'National Chengchi University' },
// };

// const initialAllId = [1, 2, 3];

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


    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case schoolConstants.BROWSE_SCHOOL_SUCCESS: {
      return action.payload.map((item) => item.school_id);
    }
    // case noteConstants.GET_NOTE_SUCCESS: {
    //   return [...new Set([...action.payload.note.tagIds, ...state])];
    // }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
