import { combineReducers } from 'redux';
import { userConstants } from '../actions/user/constants';
import { noteConstants } from '../actions/note/constant';

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
    goodnotes: {},
    goodnotesTotalCnt: null,
  },
  recentNoteIds: {
    all: {},
    allTotalCnt: null,
    notability: {},
    notabilityTotalCnt: null,
    goodnotes: {},
    goodnotesTotalCnt: null,
  },
};

// note store format
// key stands for offset, value stands for note ids for per offset
// all: {
//   '0': [1,2,3,4,5,6],
//   '6': [7,8,9,10,11,12],
//   '12': [13,14,15],
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

    case noteConstants.BROWSE_NOTES_BY_USER_PUBLIC_SUCCESS: {
      const {
        noteIds, account_id, type, filter, offset, total_cnt,
      } = action.payload;
      const type_filter = `${type}_${filter}`;
      switch (type_filter) {
        case 'all_popular': {
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              popularNoteIds: {
                ...state[account_id].popularNoteIds,
                all: {
                  ...state[account_id].popularNoteIds.all,
                  [offset]: noteIds,
                },
                allTotalCnt: total_cnt,
              },
            },
          };
        }
        case 'notability_popular': {
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              popularNoteIds: {
                ...state[account_id].popularNoteIds,
                notability: {
                  ...state[account_id].popularNoteIds.notability,
                  [offset]: noteIds,
                },
                notabilityTotalCnt: total_cnt,
              },
            },
          };
        }
        case 'goodnotes_popular':
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              popularNoteIds: {
                ...state[account_id].popularNoteIds,
                goodnotes: {
                  ...state[account_id].popularNoteIds.goodnotes,
                  [offset]: noteIds,
                },
                goodnotesTotalCnt: total_cnt,
              },
            },
          };
        case 'all_recent':
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              recentNoteIds: {
                ...state[account_id].recentNoteIds,
                all: {
                  ...state[account_id].recentNoteIds.all,
                  [offset]: noteIds,
                },
                allTotalCnt: total_cnt,
              },
            },
          };
        case 'notability_recent':
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              recentNoteIds: {
                ...state[account_id].recentNoteIds,
                notability: {
                  ...state[account_id].recentNoteIds.notability,
                  [offset]: noteIds,
                },
                notabilityTotalCnt: total_cnt,
              },
            },
          };
        case 'goodnotes_recent':
          return {
            ...state,
            [account_id]: {
              ...prototype,
              ...state[account_id],
              recentNoteIds: {
                ...state[account_id].recentNoteIds,
                goodnotes: {
                  ...state[account_id].recentNoteIds.goodnotes,
                  [offset]: noteIds,
                },
                goodnotesTotalCnt: total_cnt,
              },
            },
          };
        default:
          return {
            state,
          };
      }
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
