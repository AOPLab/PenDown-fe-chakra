import { userConstants } from '../../../actions/user/constants';

const initialState = {
  editAccount: null,
  editPassword: null,
  readOthersAccount: null,
  readSelfAccount: null,
  fetchAccountFollowers: null,
  fetchAccountFollowings: null,
  checkAccountFollowing: null,
  addAccountFollowing: null,
  deleteAccountFollowing: null,
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
    case userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        fetchAccountFollowers: null,
      };
    }
    case userConstants.FETCH_ACCOUNT_FOLLOWERS_FAIL: {
      return {
        ...state,
        fetchAccountFollowers: action.error,
      };
    }
    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        editPassword: null,
      };
    }
    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_FAIL: {
      return {
        ...state,
        fetchAccountFollowings: action.error,
      };
    }
    case userConstants.CHECK_ACCOUNT_FOLLOWING_SUCCESS: {
      return {
        ...state,
        checkAccountFollowing: null,
      };
    }
    case userConstants.CHECK_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        checkAccountFollowing: action.error,
      };
    }
    case userConstants.ADD_ACCOUNT_FOLLOWING_SUCCESS: {
      return {
        ...state,
        addAccountFollowing: null,
      };
    }
    case userConstants.ADD_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        addAccountFollowing: action.error,
      };
    }
    case userConstants.DELETE_ACCOUNT_FOLLOWING_SUCCESS: {
      return {
        ...state,
        deleteAccountFollowing: null,
      };
    }
    case userConstants.DELETE_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        deleteAccountFollowing: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
