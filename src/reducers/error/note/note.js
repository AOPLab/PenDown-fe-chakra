import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: null,
  searchNote: null,
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
    default: {
      return state;
    }
  }
}
