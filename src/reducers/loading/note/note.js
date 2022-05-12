import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: false,
  editNote: false,
  getNote: false,
  browseNotesByTag: false,
  browseNotesByCourse: false,
  browseNotesHot: false,
  buyNote: false,
  addNoteSaved: false,
  removeNoteSaved: false,
};

export default function note(state = initialState, action) {
  switch (action.type) {
    case noteConstants.ADD_NOTE_START:
      return {
        ...state,
        addNote: true,
      };
    case noteConstants.ADD_NOTE_SUCCESS:
    case noteConstants.ADD_NOTE_FAIL: {
      return {
        ...state,
        addNote: false,
      };
    }
    case noteConstants.EDIT_NOTE_START:
      return {
        ...state,
        editNote: true,
      };
    case noteConstants.EDIT_NOTE_SUCCESS:
    case noteConstants.EDIT_NOTE_FAIL: {
      return {
        ...state,
        editNote: false,
      };
    }
    case noteConstants.GET_NOTE_START:
      return {
        ...state,
        getNote: true,
      };
    case noteConstants.GET_NOTE_SUCCESS:
    case noteConstants.GET_NOTE_FAIL: {
      return {
        ...state,
        getNote: false,
      };
    }
    case noteConstants.BROWSE_NOTES_BY_TAG_START:
      return {
        ...state,
        browseNotesByTag: true,
      };
    case noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS:
    case noteConstants.BROWSE_NOTES_BY_TAG_FAIL: {
      return {
        ...state,
        browseNotesByTag: false,
      };
    }
    case noteConstants.BROWSE_NOTES_BY_COURSE_START:
      return {
        ...state,
        browseNotesByTag: true,
      };
    case noteConstants.BROWSE_NOTES_BY_COURSE_SUCCESS:
    case noteConstants.BROWSE_NOTES_BY_COURSE_FAIL: {
      return {
        ...state,
        browseNotesByTag: false,
      };
    }
    case noteConstants.BROWSE_NOTES_HOT_START:
      return {
        ...state,
        browseNotesHot: true,
      };
    case noteConstants.BROWSE_NOTES_HOT_SUCCESS:
    case noteConstants.BROWSE_NOTES_HOT_FAIL: {
      return {
        ...state,
        browseNotesHot: false,
      };
    }
    case noteConstants.ADD_NOTE_SAVED_START:
      return {
        ...state,
        addNoteSaved: true,
      };
    case noteConstants.ADD_NOTE_SAVED_SUCCESS:
    case noteConstants.ADD_NOTE_SAVED_FAIL: {
      return {
        ...state,
        addNoteSaved: false,
      };
    }
    case noteConstants.REMOVE_NOTE_SAVED_START:
      return {
        ...state,
        removeNoteSaved: true,
      };
    case noteConstants.REMOVE_NOTE_SAVED_SUCCESS:
    case noteConstants.REMOVE_NOTE_SAVED_FAIL: {
      return {
        ...state,
        removeNoteSaved: false,
      };
    }

    case noteConstants.BUY_NOTE_START:
      return {
        ...state,
        buyNote: true,
      };
    case noteConstants.BUY_NOTE_SUCCESS:
    case noteConstants.BUY_NOTE_FAIL: {
      return {
        ...state,
        buyNote: false,
      };
    }

    default: {
      return state;
    }
  }
}
