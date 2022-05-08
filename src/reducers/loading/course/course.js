import { courseConstants } from '../../../actions/course/constant';

const initialState = {
  getSchoolCourses: false,
  getSchool: false,
};

export default function course(state = initialState, action) {
  switch (action.type) {
    case courseConstants.GET_SCHOOL_COURSE_START:
      return {
        ...state,
        getSchoolCourses: true,
      };
    case courseConstants.GET_SCHOOL_COURSE_SUCCESS:
    case courseConstants.GET_SCHOOL_COURSE_FAIL: {
      return {
        ...state,
        getSchoolCourses: false,
      };
    }

    case courseConstants.GET_COURSE_START:
      return {
        ...state,
        getCourse: true,
      };
    case courseConstants.GET_COURSE_SUCCESS:
    case courseConstants.GET_COURSE_FAIL: {
      return {
        ...state,
        getCourse: false,
      };
    }

    default: {
      return state;
    }
  }
}
