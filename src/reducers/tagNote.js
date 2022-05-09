import { noteConstants } from '../actions/note/constant';

const initialState = {
  tag_id: null,
  noteType: null, // all, notability, goodnotes
  filter: null, // popular, recent
  total_cnt: null,
  noteIds: {},
};

// {
//   0: [1,14,16,3,10,7]
//   6: [2,5,4,6]
// }

export default function tagNotes(state = initialState, action) {
  switch (action.type) {
    case noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS: {
      const {
        tagnoteIds, tag_id, type, filter, offset, total_cnt,
      } = action.payload;
      if (state.tag_id === tag_id && state.noteType === type && state.filter === filter) {
        return {
          ...state,
          noteIds: {
            ...state.noteIds,
            [offset]: tagnoteIds,
          },
          total_cnt,
        };
      }
      return {
        tag_id,
        noteType: type,
        filter,
        noteIds: { [offset]: tagnoteIds },
        total_cnt,
      };
    }
    default:
      return state;
  }
}
