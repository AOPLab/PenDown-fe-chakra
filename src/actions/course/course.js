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

// Get course by id
const getCourse = (course_id) => async (dispatch) => {
  dispatch({ type: courseConstants.GET_COURSE_START });
  try {
    const res = await agent.get(`/api/course/${course_id}`);
    dispatch({
      type: courseConstants.GET_COURSE_SUCCESS,
      payload: {
        id: res.data.course_id,
        name: res.data.course_name,
        no: res.data.course_no,
        school_id: res.data.school_id,
      },
    });
  } catch (error) {
    dispatch({
      type: courseConstants.GET_COURSE_FAIL,
      error,
    });
  }
};

export {
  fetchSchoolCourses,
  getCourse,
};
