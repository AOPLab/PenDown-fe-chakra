import { noteConstants } from '../actions/note/constant';

const initialState = {
  hotNoteIds: [],
};

export default function hotNotes(state = initialState, action) {
  switch (action.type) {
    case noteConstants.BROWSE_NOTES_HOT_SUCCESS: {
      const { hotNoteIds } = action.payload;
      return {
        hotNoteIds,
      };
    }
    default:
      return state;
  }
}
