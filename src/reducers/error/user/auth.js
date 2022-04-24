import { authConstants } from '../../../actions/user/constants';

const initialState = {
  auth: null,
  login: null,
  logout: null,
  signup: null,
  fetchAccount: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH_LOGIN_FAIL:
      return {
        ...state,
        login: action.error,
      };
    case authConstants.AUTH_SUCCESS:
      return {
        ...state,
        fetchAccount: null,
      };
    case authConstants.AUTH_FAIL:
      return {
        ...state,
        fetchAccount: action.error,
      };
    case authConstants.AUTH_LOGOUT:
      return initialState;
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        signup: null,
      };
    case authConstants.SIGNUP_FAIL:
      return {
        ...state,
        signup: action.error,
      };

    default: {
      return state;
    }
  }
}
