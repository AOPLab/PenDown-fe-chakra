import { combineReducers } from 'redux';
import { userConstants } from '../actions/user/constants';
import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  username: null,
  fullName: null,
  status: null,
  description: null,
  bean: null,
  followersNum: null,
  followingNum: null,
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
// key stands for order, value stands for note_id
// all: {
//   '1': 3,
//   '2': 4,
//   '4': 6,
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

    // case accountConstants.FETCH_ACCOUNTS_SUCCESS: {
    //   return action.payload.reduce(
    //     (acc, item) => ({
    //       ...acc,
    //       [item.id]: {
    //         ...prototype,
    //         ...state[action.payload.id],
    //         ...item,
    //       },
    //     }),
    //     state,
    //   );
    // }

    case commonConstants.FETCH_ACCOUNT_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...prototype,
          ...state[action.payload.id],
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case commonConstants.FETCH_ACCOUNT_SUCCESS: {
      const { id } = action.payload;
      return [...new Set([id, ...state])];
    }

    case userConstants.READ_OTHERS_ACCOUNT_SUCCESS: {
      return [...new Set([action.payload.id, ...state])];
    }

    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
