import { noteConstants } from '../../../actions/note/constant';

const initialState = {
  addNote: null,
  searchNote: null,
};

export default function user(state = initialState, action) {
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

    default: {
      return state;
    }
  }
}
