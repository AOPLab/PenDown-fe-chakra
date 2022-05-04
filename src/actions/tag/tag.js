import agent from '../agent';
import { tagConstants } from './constant';

// Fetch all tags
const fetchAllTags = () => async (dispatch) => {
  dispatch({ type: tagConstants.BROWSE_TAG_START });
  try {
    const res = await agent.get('/api/tag');
    dispatch({
      type: tagConstants.BROWSE_TAG_SUCCESS,
      payload: res.data.tags,
    });
  } catch (error) {
    dispatch({
      type: tagConstants.BROWSE_TAG_FAIL,
      error,
    });
  }
};

const fetchTag = () => async (dispatch) => 0;

export {
  fetchAllTags,
  fetchTag,
};
