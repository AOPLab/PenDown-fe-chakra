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

// Get tag by id
const getTag = (tag_id) => async (dispatch) => {
  dispatch({ type: tagConstants.GET_TAG_START });
  try {
    const res = await agent.get(`/api/tag/${tag_id}`);
    dispatch({
      type: tagConstants.GET_TAG_SUCCESS,
      payload: {
        id: tag_id,
        name: res.data.tag_name,
      },
    });
  } catch (error) {
    dispatch({
      type: tagConstants.GET_TAG_FAIL,
      error,
    });
  }
};

export {
  fetchAllTags,
  getTag,
};
