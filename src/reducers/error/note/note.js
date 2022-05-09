import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: null,
  editNote: null,
  getNote: null,
  browseNotesByTag: null,
  browseNotesByCourse: null,
  brewseNotesHot: null,
  buyNote: null,
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
    case noteConstants.EDIT_NOTE_SUCCESS: {
      return {
        ...state,
        editNote: null,
      };
    }
    case noteConstants.EDIT_NOTE_FAIL: {
      return {
        ...state,
        editNote: action.error,
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
    case noteConstants.BROWSE_NOTES_BY_COURSE_SUCCESS: {
      return {
        ...state,
        browseNotesByCourse: null,
      };
    }
    case noteConstants.BROWSE_NOTES_BY_COURSE_FAIL: {
      return {
        ...state,
        browseNotesByCourse: action.error,
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

    case noteConstants.BUY_NOTE_SUCCESS: {
      return {
        ...state,
        buyNote: null,
      };
    }
    case noteConstants.BUY_NOTE_FAIL: {
      return {
        ...state,
        buyNote: action.error,
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
