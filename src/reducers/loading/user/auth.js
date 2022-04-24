import { authConstants } from '../../../actions/user/constants';

const initialState = {
  login: false,
  logout: false,
  signup: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH_LOGIN_FAIL:
      return {
        ...state,
        login: false,
      };
    case authConstants.AUTH_START:
      return {
        ...state,
        fetchAccount: true,
      };
    case authConstants.AUTH_SUCCESS:
      return {
        ...state,
        fetchAccount: false,
      };
    case authConstants.AUTH_FAIL:
      return {
        ...state,
        fetchAccount: false,
      };

    case authConstants.SIGNUP_START:
      return {
        ...state,
        signup: true,
      };

    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        signup: false,
      };
    case authConstants.SIGNUP_FAIL:
      return {
        ...state,
        signup: false,
      };

    default: {
      return state;
    }
  }
}
