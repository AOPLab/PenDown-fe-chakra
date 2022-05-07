import agent from '../agent';
import { courseConstants } from './constant';

// Fetch school's courses
const fetchSchoolCourses = (schoolId) => async (dispatch) => {
  dispatch({ type: courseConstants.GET_SCHOOL_COURSE_START });
  try {
    const res = await agent.get(`/api/school/${schoolId}/course`);
    dispatch({
      type: courseConstants.GET_SCHOOL_COURSE_SUCCESS,
      payload: res.data.courses,
    });
  } catch (error) {
    dispatch({
      type: courseConstants.GET_SCHOOL_COURSE_FAIL,
      error,
    });
  }
};

const fetchCourse = () => async (dispatch) => 0;

export {
  fetchSchoolCourses,
  fetchCourse,
};
