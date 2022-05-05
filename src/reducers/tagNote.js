import { combineReducers } from 'redux';
import { noteConstants } from '../actions/note/constant';

const initialState = {
  tag_id: null,
  noteType: null, // all, notability, goodnotes
  filter: null, // popular, recent
  noteIds: {},
};

// {
//   0: [1,14,16,3,10,7]
//   6: [2,5,4,6]
// }

const tagNotes = (state = initialState, action) => {
  switch (action.type) {
    case noteConstants.BROWSE_NOTE_BY_TAG_SUCCESS: {
      const {
        tagnoteIds, tag_id, type, filter, offset,
      } = action.payload;
      if (state.tag_id === tag_id && state.noteType === type && state.filter === filter) {
        return {
          ...state,
          noteIds: {
            ...state.noteIds,
            [offset]: tagnoteIds,
          },
        };
      }
      return {
        tag_id,
        noteType: type,
        filter,
        noteIds: { [offset]: tagnoteIds },
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ tagNotes });
