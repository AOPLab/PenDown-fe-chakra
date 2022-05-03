import { combineReducers } from 'redux';
import { tagConstants } from '../actions/tag/constant';

// const prototype = {
//   id: null,
//   name: null,
// };

const byId = (state = {}, action) => {
  switch (action.type) {
    case tagConstants.BROWSE_TAG_SUCCESS: {
      const data = {};
      action.payload.map((item) => {
        data[item.tag_id] = {
          id: item.tag_id,
          name: item.tag_name,
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
    case tagConstants.BROWSE_TAG_SUCCESS: {
      return action.payload.map((item) => item.tag_id);
    }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
