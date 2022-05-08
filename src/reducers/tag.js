import { combineReducers } from 'redux';
import { tagConstants } from '../actions/tag/constant';
import { noteConstants } from '../actions/note/constant';

const prototype = {
  id: null,
  name: null,
};

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

    case noteConstants.GET_NOTE_SUCCESS: {
      const data = {};
      action.payload.tag.map((item) => {
        data[item.tag_id] = {
          id: item.tag_id,
          name: item.tag_name,
        };
        return item;
      });
      return {
        ...state,
        ...data,
      };
    }

    case tagConstants.GET_TAG_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          name: action.payload.name,
        },
      };
    }

    case tagConstants.ADD_TAG_SUCCESS: {
      const { id, name } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          name,
        },
      };
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
    case noteConstants.GET_NOTE_SUCCESS: {
      return [...new Set([...action.payload.note.tagIds, ...state])];
    }
    case tagConstants.GET_TAG_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }
    case tagConstants.ADD_TAG_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
