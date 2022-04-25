import agent from '../agent';
import { userConstants } from './constants';

const editAccount = (token, id, username, nickname, email) => async (dispatch) => {
  try {
    const config = {
      headers: { 'auth-token': token },
    };
    dispatch({ type: userConstants.EDIT_SELF_ACCOUNT_START });
    const accountInfo = {
      username,
      nickname,
    };
    if (email) {
      accountInfo.alternative_email = email;
    }
    await agent.patch(`/account/${id}`, accountInfo, config);
    dispatch({
      type: userConstants.EDIT_SELF_ACCOUNT_SUCCESS,
      payload: {
        id,
        username,
        nickname,
        alternative_email: email,
      },
    });
  } catch (error) {
    dispatch({
      type: userConstants.EDIT_SELF_ACCOUNT_FAIL,
      error,
    });
  }
};

const editPassword = (token, id, oldPassword, newPassword, onSuccess, onError) => (dispatch) => {
  const config = {
    headers: {
      'auth-token': token,
    },
  };
  dispatch({ type: userConstants.EDIT_SELF_PASSWORD_START });

  agent
    .put(
      `/account/${id}/pass_hash`,
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      config,
    )
    .then(() => {
      dispatch({ type: userConstants.EDIT_SELF_PASSWORD_SUCCESS });
      onSuccess();
    })
    .catch((error) => {
      dispatch({
        type: userConstants.EDIT_SELF_PASSWORD_FAIL,
        error,
      });
      onError();
    });
};

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

export {
  editAccount,
  editPassword,
  readAccount,
  readSelfAccount,
};
