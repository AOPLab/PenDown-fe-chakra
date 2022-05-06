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

const fetchSchool = () => async (dispatch) => 0;

export {
  fetchAllSchools,
  fetchSchool,
};
