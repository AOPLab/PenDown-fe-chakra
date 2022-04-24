import { userConstants } from '../../../actions/user/constants';

const initialState = {
  editAccount: false,
  editPassword: false,
  readOthersAccount: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.READ_OTHERS_ACCOUNT_START:
      return {
        ...state,
        readOthersAccount: true,
      };
    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS: {
      return {
        ...state,
        readOthersAccount: false,
      };
    }
    case userConstants.READ_OTHERS_ACCOUNT_FAIL:
      return {
        ...state,
        readOthersAccount: false,
      };

    case userConstants.EDIT_SELF_ACCOUNT_START:
      return {
        ...state,
        editAccount: true,
      };
    case userConstants.EDIT_SELF_ACCOUNT_SUCCESS:
      return {
        ...state,
        editAccount: false,
      };
    case userConstants.EDIT_SELF_ACCOUNT_FAIL:
      return {
        ...state,
        editAccount: false,
      };
    case userConstants.EDIT_SELF_PASSWORD_START:
      return {
        ...state,
        editPassword: true,
      };
    case userConstants.EDIT_SELF_PASSWORD_SUCCESS: {
      return {
        ...state,
        editPassword: false,
      };
    }
    case userConstants.EDIT_SELF_PASSWORD_FAIL: {
      return {
        ...state,
        editPassword: false,
      };
    }

    default: {
      return state;
    }
  }
}
