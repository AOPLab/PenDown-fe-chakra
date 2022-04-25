import { authConstants, userConstants } from '../actions/user/constants';

// self information
const initialState = {
  id: '',
  username: 'Gary Hu',
  fullName: 'Zoe Chen',
  email: 'imaoplab@gmail.com',
  description: 'hello world',
  status: 'BASIC',
  bean: 136,
  followersNum: 0,
  followingNum: 0,
  followersIds: [],
  followingIds: [],
  noteNum: 27,
  uploadedNotes: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnote: {},
    goodnoteTotalCnt: null,
  },
  savedNotes: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnote: {},
    goodnoteTotalCnt: null,
  },
  libraryNotes: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnote: {},
    goodnoteTotalCnt: null,
  },
  isGoogle: false,
  hasPassword: true,
};

// note store format
// key stands for page, value stands for note ids for per page
// all: {
//   '1': [1,2,3,4,5],
//   '2': [6,7,8,9,10],
//   '4': [11,12,13,14,15],
// },

const user = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.AUTH_SUCCESS:
      return {
        ...state,
        ...action.user,
      };
    case authConstants.AUTH_LOGOUT:
      return initialState;

    case userConstants.READ_SELF_ACCOUNT_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS: {
      const { id, followers } = action.payload;
      if (id !== state.id) return state;
      return {
        ...state,
        followersNum: followers.length,
        followersIds: followers.map(({ account_id }) => account_id),
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS: {
      const { id, followings } = action.payload;
      if (id !== state.id) return state;
      return {
        ...state,
        followingNum: followings.length,
        followingIds: followings.map(({ account_id }) => account_id),
      };
    }
    case userConstants.CHECK_ACCOUNT_FOLLOWING_SUCCESS: {
      const { following_id, following } = action.payload;
      if (following === false) return state;
      return {
        ...state,
        followingIds: [...new Set([following_id, ...state.followingIds])],
      };
    }
    case userConstants.ADD_ACCOUNT_FOLLOWING_SUCCESS: {
      return {
        ...state,
        followingNum: state.followingNum + 1,
        followingIds: [...new Set([action.payload, ...state.followingIds])],
      };
    }
    case userConstants.DELETE_ACCOUNT_FOLLOWING_SUCCESS: {
      return {
        ...state,
        followingNum: state.followingNum - 1,
        followingIds: state.followingIds.filter((id) => id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default user;
