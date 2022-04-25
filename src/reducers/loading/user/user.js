import { userConstants } from '../../../actions/user/constants';

const initialState = {
  editAccount: false,
  editPassword: false,
  readOthersAccount: false,
  readSelfAccount: false,
  fetchAccountFollowers: false,
  fetchAccountFollowings: false,
  checkAccountFollowing: false,
  addAccountFollowing: false,
  deleteAccountFollowing: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.READ_OTHERS_ACCOUNT_START:
      return {
        ...state,
        readOthersAccount: true,
      };
    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS:
    case userConstants.READ_OTHERS_ACCOUNT_FAIL: {
      return {
        ...state,
        readOthersAccount: false,
      };
    }

    case userConstants.READ_SELF_ACCOUNT_START:
      return {
        ...state,
        readSelfAccount: true,
      };
    case userConstants.READ_SELF_ACCOUNT_SUCCESS:
    case userConstants.READ_SELF_ACCOUNT_FAIL: {
      return {
        ...state,
        readSelfAccount: false,
      };
    }

    case userConstants.EDIT_SELF_ACCOUNT_START:
      return {
        ...state,
        editAccount: true,
      };
    case userConstants.EDIT_SELF_ACCOUNT_SUCCESS:
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
    case userConstants.EDIT_SELF_PASSWORD_SUCCESS:
    case userConstants.EDIT_SELF_PASSWORD_FAIL: {
      return {
        ...state,
        editPassword: false,
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWERS_START:
      return {
        ...state,
        fetchAccountFollowers: true,
      };
    case userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS:
    case userConstants.FETCH_ACCOUNT_FOLLOWERS_FAIL: {
      return {
        ...state,
        fetchAccountFollowers: false,
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_START:
      return {
        ...state,
        fetchAccountFollowings: true,
      };
    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS:
    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_FAIL: {
      return {
        ...state,
        fetchAccountFollowings: false,
      };
    }

    case userConstants.CHECK_ACCOUNT_FOLLOWING_START:
      return {
        ...state,
        checkAccountFollowing: true,
      };
    case userConstants.CHECK_ACCOUNT_FOLLOWING_SUCCESS:
    case userConstants.CHECK_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        checkAccountFollowing: false,
      };
    }

    case userConstants.ADD_ACCOUNT_FOLLOWING_START:
      return {
        ...state,
        addAccountFollowing: true,
      };
    case userConstants.ADD_ACCOUNT_FOLLOWING_SUCCESS:
    case userConstants.ADD_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        addAccountFollowing: false,
      };
    }

    case userConstants.DELETE_ACCOUNT_FOLLOWING_START:
      return {
        ...state,
        deleteAccountFollowing: true,
      };
    case userConstants.DELETE_ACCOUNT_FOLLOWING_SUCCESS:
    case userConstants.DELETE_ACCOUNT_FOLLOWING_FAIL: {
      return {
        ...state,
        deleteAccountFollowing: false,
      };
    }

    default: {
      return state;
    }
  }
}
