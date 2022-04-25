import { combineReducers } from 'redux';
import { userConstants } from '../actions/user/constants';

const prototype = {
  id: null,
  username: null,
  fullName: null,
  status: null,
  description: null,
  bean: null,
  followersNum: 0,
  followingNum: 0,
  followersIds: [],
  followingIds: [],
  noteNum: null,
  popularNoteIds: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnote: {},
    goodnoteTotalCnt: null,
  },
  recentNoteIds: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnote: {},
    goodnoteTotalCnt: null,
  },
};

// note store format
// key stands for page, value stands for note ids for per page
// all: {
//   '1': [1,2,3,4,5],
//   '2': [6,7,8,9,10],
//   '4': [11,12,13,14,15],
// },

const byId = (state = {}, action) => {
  switch (action.type) {
    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          ...action.payload,
        },
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS: {
      const { id, followers } = action.payload;
      const data = {};
      const ids = followers.map((item) => {
        data[item.account_id] = {
          ...prototype,
          ...state[item.account_id],
          ...item,
          id: item.account_id,
        };
        return item.account_id;
      });
      return {
        ...state,
        [id]: {
          ...prototype,
          ...state[id],
          followersNum: ids.length,
          followersIds: ids,
        },
        ...data,
      };
    }

    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS: {
      const { id, followings } = action.payload;
      const data = {};
      const ids = followings.map((item) => {
        data[item.account_id] = {
          ...prototype,
          ...state[item.account_id],
          ...item,
          id: item.account_id,
        };
        return item.account_id;
      });
      return {
        ...state,
        [id]: {
          ...prototype,
          ...state[id],
          followingNum: ids.length,
          followingIds: ids,
        },
        ...data,
      };
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }
    case userConstants.FETCH_ACCOUNT_FOLLOWERS_SUCCESS: {
      const { id, followers } = action.payload;
      return [...new Set([id, followers.map((item) => item.account_id), ...state])];
    }
    case userConstants.FETCH_ACCOUNT_FOLLOWINGS_SUCCESS: {
      const { id, followings } = action.payload;
      return [...new Set([id, followings.map((item) => item.account_id), ...state])];
    }

    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
