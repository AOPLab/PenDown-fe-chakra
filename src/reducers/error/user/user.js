import { userConstants } from '../../../actions/user/constants';

const initialState = {
  editAccount: null,
  editPassword: null,
  getNotify: null,
  readNotify: null,
  readOthersAccount: null,
  readSelfAccount: null,
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

    case userConstants.READ_SELF_ACCOUNT_SUCCESS: {
      return {
        ...state,
        readSelfAccount: null,
      };
    }
    case userConstants.READ_SELF_ACCOUNT_FAIL:
      return {
        ...state,
        readSelfAccount: action.error,
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

    default: {
      return state;
    }
  }
}
