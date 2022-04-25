import agent from '../agent';
import { authConstants } from './constants';

const userSignIn = (username, password) => async (dispatch) => {
  try {
    const res = await agent.post('/api/login', { username, password });
    const {
      account_id, token, email, full_name,
    } = res.data;

    dispatch({
      type: authConstants.AUTH_SUCCESS,
      user: {
        token,
        id: account_id,
        email,
        username,
        fullName: full_name,
      },
    });
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
    const {
      account_id, token, email, full_name, username,
    } = res.data;

    dispatch({
      type: authConstants.AUTH_SUCCESS,
      user: {
        token,
        id: account_id,
        email,
        username,
        fullName: full_name,
      },
    });
  } catch (error) {
    dispatch({
      type: authConstants.AUTH_FAIL,
      error,
    });
  }
};

// resume logged in status from local storage
const getUserInfo = (id, token) => async (dispatch) => {
  dispatch({
    type: authConstants.AUTH_SUCCESS,
    user: {
      token,
      id,
    },
  });

  // try {
  //   const config = {
  //     headers: {
  //       'auth-token': token,
  //     },
  //   };

  //   const [res1, res2] = await Promise.all([
  //     agent.get(`/account/${id}`, config),
  //     agent.get(`/account/${id}/class`, config),
  //   ]);

  //   dispatch({
  //     type: authConstants.AUTH_SUCCESS,
  //     user: {
  //       token,
  //       ...res1.data.data,
  //       classes: res2.data.data,
  //     },
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: authConstants.AUTH_FAIL,
  //     error,
  //   });
  // }
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
  getUserInfo,
  userSignIn,
  userGoogleSignIn,
  userLogout,
  userRegister,
};
