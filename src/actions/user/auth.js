import agent from '../agent';
import { authConstants } from './constants';
import { readSelfAccount } from './user';

const userSignIn = (username, password) => async (dispatch) => {
  try {
    const res = await agent.post('/api/login', { username, password });
    const { account_id, token } = res.data;

    dispatch({
      type: authConstants.AUTH_SUCCESS,
      user: {
        token,
        id: account_id,
      },
    });
    dispatch(readSelfAccount(token));
  } catch (error) {
    dispatch({
      type: authConstants.AUTH_FAIL,
      error,
    });
  }
};

const userGoogleSignIn = (google_token, name) => async (dispatch) => {
  try {
    const res = await agent.post('/api/login/google', { google_token, name });
    const { account_id, token } = res.data;

    dispatch({
      type: authConstants.AUTH_SUCCESS,
      user: {
        token,
        id: account_id,
      },
    });
    dispatch(readSelfAccount(token));
  } catch (error) {
    dispatch({
      type: authConstants.AUTH_FAIL,
      error,
    });
  }
};

const userLogout = (history) => (dispatch) => {
  dispatch({ type: authConstants.AUTH_LOGOUT });
  history.push('/login');
};

const userRegister = (username, fullName, email, password) => async (dispatch) => {
  const body = {
    username,
    full_name: fullName,
    email,
    password,
  };
  try {
    dispatch({ type: authConstants.SIGNUP_START });
    await agent.post('/api/account', body);
    dispatch({ type: authConstants.SIGNUP_SUCCESS });
  } catch (error) {
    dispatch({
      type: authConstants.SIGNUP_FAIL,
      error,
    });
  }
};

export {
  userSignIn,
  userGoogleSignIn,
  userLogout,
  userRegister,
};
