import { courseConstants } from '../../../actions/course/constant';

const initialState = {
  getSchoolCourses: null,
  getCourse: null,
};

export default function course(state = initialState, action) {
  switch (action.type) {
    case courseConstants.GET_SCHOOL_COURSE_SUCCESS: {
      return {
        ...state,
        getSchoolCourses: null,
      };
    }
    case courseConstants.GET_SCHOOL_COURSE_FAIL: {
      return {
        ...state,
        getSchoolCourses: action.error,
      };
    }

    case courseConstants.GET_COURSE_SUCCESS: {
      return {
        ...state,
        getCourse: null,
      };
    }
    case courseConstants.GET_COURSE_FAIL: {
      return {
        ...state,
        getCourse: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
