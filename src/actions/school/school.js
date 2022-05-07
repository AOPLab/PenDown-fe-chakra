import agent from '../agent';
import { schoolConstants } from './constant';

// Fetch all schools
const fetchAllSchools = () => async (dispatch) => {
  dispatch({ type: schoolConstants.BROWSE_SCHOOL_START });
  try {
    const res = await agent.get('/api/school');
    dispatch({
      type: schoolConstants.BROWSE_SCHOOL_SUCCESS,
      payload: res.data.schools,
    });
  } catch (error) {
    dispatch({
      type: schoolConstants.BROWSE_SCHOOL_FAIL,
      error,
    });
  }
};

// Get school by id
const getSchool = (school_id) => async (dispatch) => {
  dispatch({ type: schoolConstants.GET_SCHOOL_START });
  try {
    const res = await agent.get(`/api/school/${school_id}`);
    dispatch({
      type: schoolConstants.GET_SCHOOL_SUCCESS,
      payload: {
        id: res.data.school_id,
        name: res.data.school_name,
        // id: 2,
        // name: 'ttt',
      },
    });
  } catch (error) {
    dispatch({
      type: schoolConstants.GET_SCHOOL_FAIL,
      error,
    });
  }
};

export {
  fetchAllSchools,
  getSchool,
};
