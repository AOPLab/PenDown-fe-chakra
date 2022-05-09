import { commonConstants } from '../actions/common/constant';

const initialState = {
  q: null,
  type: null,
  accounts: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
  tags: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
  schools: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
  courses: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
  notes: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
  templates: {
    cur_offset: 0,
    ids: {},
    totalCnt: null,
  },
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case commonConstants.SEARCH_COURSES_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: state.type,
          courses: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.courses.map((course) => course.course_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        courses: {
          cur_offset: action.payload.offset,
          ids: { ...state.courses.ids, [action.payload.offset]: action.payload.courses.map((course) => course.course_id) },
          totalCnt: action.payload.total_cnt,
        },
      };
    case commonConstants.SEARCH_SCHOOLS_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: state.type,
          schools: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.schools.map((school) => school.school_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        schools: {
          cur_offset: action.payload.offset,
          ids: { ...state.schools.ids, [action.payload.offset]: action.payload.schools.map((school) => school.school_id) },
          totalCnt: action.payload.total_cnt,
        },
      };
    case commonConstants.SEARCH_TAGS_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: state.type,
          tags: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.tags.map((tag) => tag.tag_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        tags: {
          cur_offset: action.payload.offset,
          ids: { ...state.tags.ids, [action.payload.offset]: action.payload.tags.map((tag) => tag.tag_id) },
          totalCnt: action.payload.total_cnt,
        },
      };

    case commonConstants.SEARCH_PEOPLE_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: state.type,
          accounts: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.people.map((account) => account.user_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        accounts: {
          cur_offset: action.payload.offset,
          ids: { ...state.accounts.ids, [action.payload.offset]: action.payload.people.map((account) => account.user_id) },
          totalCnt: action.payload.total_cnt,
        },
      };

    case commonConstants.SEARCH_NOTES_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: action.payload.type,
          notes: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.notes.map((note) => note.note_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      if (state.type === action.payload.type) {
        return {
          ...state,
          notes: {
            cur_offset: action.payload.offset,
            ids: { ...state.notes.ids, [action.payload.offset]: action.payload.notes.map((note) => note.note_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        notes: {
          cur_offset: action.payload.offset,
          ids: { [action.payload.offset]: action.payload.notes.map((note) => note.note_id) },
          totalCnt: action.payload.total_cnt,
        },
      };

    case commonConstants.SEARCH_TEMPLATES_SUCCESS:
      if (state.q !== action.payload.q) {
        return {
          ...initialState,
          q: action.payload.q,
          type: action.payload.type,
          templates: {
            cur_offset: action.payload.offset,
            ids: { [action.payload.offset]: action.payload.templates.map((note) => note.note_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      if (state.type === action.payload.type) {
        return {
          ...state,
          templates: {
            cur_offset: action.payload.offset,
            ids: { ...state.templates.ids, [action.payload.offset]: action.payload.templates.map((note) => note.note_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        templates: {
          cur_offset: action.payload.offset,
          ids: { [action.payload.offset]: action.payload.templates.map((note) => note.note_id) },
          totalCnt: action.payload.total_cnt,
        },
      };
    default:
      return state;
  }
};

export default search;
