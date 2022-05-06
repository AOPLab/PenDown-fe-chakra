import { noteConstants } from '../actions/note/constant';

const initialState = {
  course_id: null,
  noteType: null, // all, notability, goodnotes
  filter: null, // popular, recent
  total_cnt: null,
  noteIds: {},
};

// {
//   0: [1,14,16,3,10,7]
//   6: [2,5,4,6]
// }

export default function courseNotes(state = initialState, action) {
  switch (action.type) {
    case noteConstants.BROWSE_NOTES_BY_COURSE_SUCCESS: {
      const {
        coursenoteIds, course_id, type, filter, offset, total_cnt,
      } = action.payload;
      if (state.course_id === course_id && state.noteType === type && state.filter === filter) {
        return {
          ...state,
          noteIds: {
            ...state.noteIds,
            [offset]: coursenoteIds,
          },
          total_cnt,
        };
      }

      return {
        course_id,
        noteType: type,
        filter,
        noteIds: { [offset]: coursenoteIds },
        total_cnt,
      };
    }
    default:
      return state;
  }
}
