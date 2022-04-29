import agent from '../agent';
import { userConstants } from './constants';

// Use to read any account profile
const readAccount = (accountId) => async (dispatch) => {
  dispatch({ type: userConstants.READ_OTHERS_ACCOUNT_START });
  try {
    const res = await agent.get(`/api/account/${accountId}/profile`);
    dispatch({
      type: userConstants.READ_OTHERS_ACCOUNT_SUCCESS,
      payload: {
        id: res.data.account_id,
        username: res.data.username,
        status: res.data.status,
        description: res.data.description,
        bean: res.data.bean,
        followersNum: res.data.followers_num,
        followingNum: res.data.following_num,
        noteNum: res.data.note_num,
      },
    });
  } catch (error) {
    dispatch({
      type: userConstants.READ_OTHERS_ACCOUNT_FAIL,
      error,
    });
  }
};

// Use to read self info
const readSelfAccount = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({ type: userConstants.READ_SELF_ACCOUNT_START });
  try {
    const res = await agent.get('/api/account', config);
    dispatch({
      type: userConstants.READ_SELF_ACCOUNT_SUCCESS,
      payload: {
        id: res.data.account_id,
        token,
        username: res.data.username,
        fullName: res.data.full_name,
        status: res.data.status,
        description: res.data.description,
        bean: res.data.bean,
        email: res.data.email,
        followersNum: res.data.followers_num,
        followingNum: res.data.following_num,
        noteNum: res.data.note_num,
        isGoogle: res.data.is_google,
        hasPassword: res.data.has_password,
      },
    });
  } catch (error) {
    dispatch({
      type: userConstants.READ_SELF_ACCOUNT_FAIL,
      error,
    });
  }
};

// Use to edit self info
const editAccount = (token, id, username, full_name, email, description) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: userConstants.EDIT_SELF_ACCOUNT_START });
  try {
    const accountInfo = {
      username,
      full_name,
      email,
      description,
    };
    await agent.patch('/api/account', accountInfo, config);
    dispatch({ type: userConstants.EDIT_SELF_ACCOUNT_SUCCESS });
    // Then read account info again
    dispatch(readSelfAccount(token));
  } catch (error) {
    dispatch({
      type: userConstants.EDIT_SELF_ACCOUNT_FAIL,
      error,
    });
  }
};

// Use to edit self password
const editPassword = (token, id, oldPassword, newPassword) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: userConstants.EDIT_SELF_PASSWORD_START });

  try {
    agent.put(`/api/account/${id}/pass_hash`, {
      old_password: oldPassword,
      new_password: newPassword,
    }, config);
    dispatch({ type: userConstants.EDIT_SELF_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({
      type: userConstants.EDIT_SELF_PASSWORD_FAIL,
      error,
    });
  }
};

// Use to read any account's followers
const fetchAccountFollowers = (id) => async (dispatch) => {
  dispatch({ type: userConstants.FETCH_ACCOUNT_FOLLOWERS_START });

  try {
    const res = agent.get(`/api/account/${id}/followers`);
    dispatch({
      type: userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS,
      payload: { id, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: userConstants.FETCH_ACCOUNT_FOLLOWERS_FAIL,
      error,
    });
  }
};

// Use to read any account followings
const fetchAccountFollowings = (id) => async (dispatch) => {
  dispatch({ type: userConstants.FETCH_ACCOUNT_FOLLOWINGS_START });

  try {
    const res = agent.get(`/api/account/${id}/followings`);
    dispatch({
      type: userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS,
      payload: { id, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: userConstants.FETCH_ACCOUNT_FOLLOWINGS_FAIL,
      error,
    });
  }
};

// Use to check whether an account is following another account
// Note: account_id must be self account_id
// Result will store to state.user.followings[]
const checkAccountFollowing = (account_id, following_id) => async (dispatch) => {
  dispatch({ type: userConstants.CHECK_ACCOUNT_FOLLOWING_START });

  try {
    const res = agent.get(`/api/account/${account_id}/following/${following_id}`);
    dispatch({
      type: userConstants.CHECK_ACCOUNT_FOLLOWING_SUCCESS,
      payload: { following_id, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: userConstants.CHECK_ACCOUNT_FOLLOWING_FAIL,
      error,
    });
  }
};

// Use to add an account to follow
// Note: id must be self account id
// Result will store to state.user.followings[] and update following account's followers num
const addAccountFollowing = (token, id, following_id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: userConstants.ADD_ACCOUNT_FOLLOWING_START });
  try {
    agent.post(`/api/account/${id}/follow`, { account_id: following_id }, config);
    dispatch({
      type: userConstants.ADD_ACCOUNT_FOLLOWING_SUCCESS,
      payload: following_id,
    });
  } catch (error) {
    dispatch({
      type: userConstants.ADD_ACCOUNT_FOLLOWING_FAIL,
      error,
    });
  }
};

// Use to delete an account to follow
// Note: id must be self account id
// Result will update state.user.followings[] and update following account's following num
const deleteAccountFollowing = (token, id, following_id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: userConstants.DELETE_ACCOUNT_FOLLOWING_START });
  try {
    agent.delete(`/api/account/${id}/follow`, { account_id: following_id }, config);
    dispatch({
      type: userConstants.DELETE_ACCOUNT_FOLLOWING_SUCCESS,
      payload: following_id,
    });
  } catch (error) {
    dispatch({
      type: userConstants.DELETE_ACCOUNT_FOLLOWING_FAIL,
      error,
    });
  }
};

export {
  readAccount,
  readSelfAccount,
  editAccount,
  editPassword,
  fetchAccountFollowers,
  fetchAccountFollowings,
  checkAccountFollowing,
  addAccountFollowing,
  deleteAccountFollowing,
};
