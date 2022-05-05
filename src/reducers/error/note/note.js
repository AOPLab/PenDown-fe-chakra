import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: null,
  getNote: null,
  browseNotesByTag: null,
  brewseNotesHot: null,
  addNoteSaved: null,
  removeNoteSaved: null,
};

export default function note(state = initialState, action) {
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
    case noteConstants.BROWSE_NOTES_HOT_SUCCESS: {
      return {
        ...state,
        brewseNotesHot: null,
      };
    }
    case noteConstants.BROWSE_NOTES_HOT_FAIL: {
      return {
        ...state,
        brewseNotesHot: action.error,
      };
    }
    case noteConstants.ADD_NOTE_SAVED_SUCCESS: {
      return {
        ...state,
        addNoteSaved: null,
      };
    }
    case noteConstants.ADD_NOTE_SAVED_FAIL: {
      return {
        ...state,
        addNoteSaved: action.error,
      };
    }
    case noteConstants.REMOVE_NOTE_SAVED_SUCCESS: {
      return {
        ...state,
        removeNoteSaved: null,
      };
    }
    case noteConstants.REMOVE_NOTE_SAVED_FAIL: {
      return {
        ...state,
        removeNoteSaved: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
