import { authConstants } from '../actions/user/constants';

const initialState = {
  isAuthenticated: false,
  token: '',
  tokenExpired: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH_SUCCESS:
      return {
        isAuthenticated: !!action.user,
        token: action.user.token,
        tokenExpired: false,
      };
    case authConstants.AUTH_LOGOUT:
      return {
        isAuthenticated: false,
        token: '',
        tokenExpired: false,
      };
    case authConstants.TOKEN_EXPIRED:
      return {
        isAuthenticated: false,
        token: '',
        tokenExpired: true,
      };
    default:
      return state;
  }
}
