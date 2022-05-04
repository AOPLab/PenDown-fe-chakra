import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: false,
  getNote: false,
  browseNotesByTag: false,
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

    default: {
      return state;
    }
  }
}