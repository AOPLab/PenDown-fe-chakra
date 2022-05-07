import { commonConstants } from '../actions/common/constant';

const initialState = {
  q: null,
  type: null,
  accounts: {
    ids: {},
    totalCnt: null,
  },
  tags: {
    ids: {},
    totalCnt: null,
  },
  schools: {
    ids: {},
    totalCnt: null,
  },
  courses: {
    ids: {},
    totalCnt: null,
  },
  notes: {
    ids: {},
    totalCnt: null,
  },
  templates: {
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
            ids: { [action.payload.offset]: action.payload.courses.map((course) => course.course_id) },
            totalCnt: action.payload.total_cnt,
          },
        };
      }
      return {
        ...state,
        courses: {
          ids: { ...state.courses.ids, [action.payload.offset]: action.payload.courses.map((course) => course.course_id) },
          totalCnt: action.payload.total_cnt,
        },
      };
    default:
      return state;
  }
};

export default search;
