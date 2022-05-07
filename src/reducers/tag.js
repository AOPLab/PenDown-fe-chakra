import { combineReducers } from 'redux';
import { tagConstants } from '../actions/tag/constant';
import { noteConstants } from '../actions/note/constant';
import { commonConstants } from '../actions/common/constant';

// const prototype = {
//   id: null,
//   name: null,
// };

const byId = (state = {}, action) => {
  switch (action.type) {
    case commonConstants.SEARCH_TAGS_SUCCESS: {
      const data = {};
      action.payload.tags.map((tag) => {
        data[tag.tag_id] = {
          id: tag.tag_id,
          name: tag.tag_name,
        };
        return tag;
      });
      return {
        ...state,
        ...data,
      };
    }
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
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
