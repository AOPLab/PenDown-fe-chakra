import { userConstants } from '../../../actions/user/constants';

const initialState = {
  editAccount: null,
  editPassword: null,
  getNotify: null,
  readNotify: null,
  readOthersAccount: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS: {
      return {
        ...state,
        readOthersAccount: null,
      };
    }
    case userConstants.READ_OTHERS_ACCOUNT_FAIL:
      return {
        ...state,
        readOthersAccount: action.error,
      };

    case userConstants.EDIT_SELF_ACCOUNT_SUCCESS: {
      return {
        ...state,
        editAccount: null,
      };
    }
    case userConstants.EDIT_SELF_ACCOUNT_FAIL:
      return {
        ...state,
        editAccount: action.error,
      };

    case userConstants.EDIT_SELF_PASSWORD_SUCCESS: {
      return {
        ...state,
        editPassword: null,
      };
    }
    case userConstants.EDIT_SELF_PASSWORD_FAIL: {
      return {
        ...state,
        editPassword: action.error,
      };
    }
    case userConstants.USER_BROWSE_ANNOUNCEMENT_SUCCESS: {
      return {
        ...state,
        getNotify: null,
      };
    }
    case userConstants.USER_BROWSE_ANNOUNCEMENT_FAIL: {
      return {
        ...state,
        getNotify: action.error,
      };
    }
    case userConstants.USER_READ_NOTIFY: {
      return {
        ...state,
        readNotify: null,
      };
    }
    case userConstants.USER_READ_NOTIFY_FAIL: {
      return {
        ...state,
        readNotify: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
