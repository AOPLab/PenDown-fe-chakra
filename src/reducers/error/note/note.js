import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: null,
  getNote: null,
  browseNotesByTag: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case noteConstants.ADD_NOTE_SUCCESS: {
      return {
        ...state,
        addNote: null,
      };
    }
    case noteConstants.ADD_NOTE_FAIL: {
      return {
        ...state,
        addNote: action.error,
      };
    }
    case noteConstants.GET_NOTE_SUCCESS: {
      return {
        ...state,
        getNote: null,
      };
    }
    case noteConstants.GET_NOTE_FAIL: {
      return {
        ...state,
        getNote: action.error,
      };
    }
    case noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS: {
      return {
        ...state,
        browseNotesByTag: null,
      };
    }
    case noteConstants.BROWSE_NOTES_BY_TAG_FAIL: {
      return {
        ...state,
        browseNotesByTag: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
