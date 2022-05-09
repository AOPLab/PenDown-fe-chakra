import { authConstants, userConstants } from '../actions/user/constants';
import { noteConstants } from '../actions/note/constant';

// self information
const initialState = {
  id: null,
  username: '',
  fullName: '',
  email: '',
  description: '',
  status: 'BASIC',
  bean: 0,
  followersNum: 0,
  followingNum: 0,
  followersIds: [],
  followingIds: [],
  noteNum: 0,
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
  isGoogle: true,
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

    case noteConstants.BROWSE_NOTES_BY_USER_OWN_SUCCESS: {
      const {
        noteIds, account_id, type, filter, offset, total_cnt,
      } = action.payload;
      const type_filter = `${type}_${filter}`;
      if (account_id !== state.id) return state;
      switch (type_filter) {
        case 'all_uploaded': {
          return {
            ...state,
            uploadedNotes: {
              ...state.uploadedNotes,
              all: {
                ...state.uploadedNotes.all,
                [offset]: noteIds,
              },
              allTotalCnt: total_cnt,
            },
          };
        }
        case 'notability_uploaded': {
          return {
            ...state,
            uploadedNotes: {
              ...state.uploadedNotes,
              notability: {
                ...state.uploadedNotes.notability,
                [offset]: noteIds,
              },
              notabilityTotalCnt: total_cnt,
            },
          };
        }
        case 'goodnotes_uploaded':
          return {
            ...state,
            uploadedNotes: {
              ...state.uploadedNotes,
              goodnotes: {
                ...state.uploadedNotes.goodnotes,
                [offset]: noteIds,
              },
              goodnotesTotalCnt: total_cnt,
            },
          };
        case 'all_saved': {
          return {
            ...state,
            savedNotes: {
              ...state.savedNotes,
              all: {
                ...state.savedNotes.all,
                [offset]: noteIds,
              },
              allTotalCnt: total_cnt,
            },
          };
        }
        case 'notability_saved': {
          return {
            ...state,
            savedNotes: {
              ...state.savedNotes,
              notability: {
                ...state.savedNotes.notability,
                [offset]: noteIds,
              },
              notabilityTotalCnt: total_cnt,
            },
          };
        }
        case 'goodnotes_saved':
          return {
            ...state,
            savedNotes: {
              ...state.savedNotes,
              goodnotes: {
                ...state.savedNotes.goodnotes,
                [offset]: noteIds,
              },
              goodnotesTotalCnt: total_cnt,
            },
          };
        case 'all_library': {
          return {
            ...state,
            libraryNotes: {
              ...state.libraryNotes,
              all: {
                ...state.libraryNotes.all,
                [offset]: noteIds,
              },
              allTotalCnt: total_cnt,
            },
          };
        }
        case 'notability_library': {
          return {
            ...state,
            libraryNotes: {
              ...state.libraryNotes,
              notability: {
                ...state.libraryNotes.notability,
                [offset]: noteIds,
              },
              notabilityTotalCnt: total_cnt,
            },
          };
        }
        case 'goodnotes_library':
          return {
            ...state,
            libraryNotes: {
              ...state.libraryNotes,
              goodnotes: {
                ...state.libraryNotes.goodnotes,
                [offset]: noteIds,
              },
              goodnotesTotalCnt: total_cnt,
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

export default user;
