import moment from 'moment';
import agent from '../agent';
import { userConstants } from './constants';
import browseParamsTransForm from '../../function/browseParamsTransform';

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

// browse all active announcement
const userBrowseAnnouncement = (authToken) => async (dispatch) => {
  const currentTime = moment().toISOString();
  const config = {
    headers: {
      'auth-token': authToken,
    },
    params: browseParamsTransForm({
      filter: [['expire_time', '>', currentTime]],
    }),
  };

  try {
    const notifyRes = await agent.get('/announcement', config);
    dispatch({
      type: userConstants.USER_BROWSE_ANNOUNCEMENT_SUCCESS,
      payload: notifyRes.data.data.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_BROWSE_ANNOUNCEMENT_FAIL,
      error,
    });
  }
};

const readAccount = (token, accountId) => async (dispatch) => {
  dispatch({ type: userConstants.READ_OTHERS_ACCOUNT_START });
  try {
    const config = {
      headers: {
        'Auth-Token': token,
      },
    };
    const res = await agent.get(`/account/${accountId}`, config);
    dispatch({
      type: userConstants.READ_OTHERS_ACCOUNT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.READ_OTHERS_ACCOUNT_FAIL,
      error,
    });
  }
};

export {
  editAccount,
  editPassword,
  userBrowseAnnouncement,
  readAccount,
};
