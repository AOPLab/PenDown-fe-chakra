import { authConstants, userConstants } from '../actions/user/constants';

// self information
const initialState = {
  id: '',
  token: '',
  username: 'Gary Hu',
  fullName: '',
  email: '',
  description: '',
  status: '',
  bean: '',
  followersNum: null,
  followingNum: null,
  followersIds: [],
  followingIds: [],
  noteNum: null,
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
  isGoogle: null,
  hasPassword: null,
};

// note store format
// key stands for order, value stands for note_id
// all: {
//   '1': 3,
//   '2': 4,
//   '4': 6,
// },

const user = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.AUTH_SUCCESS:
      return {
        ...state,
        id: action.user.id,
      };
    case authConstants.AUTH_LOGOUT:
      return initialState;
    case userConstants.EDIT_SELF_ACCOUNT_SUCCESS: {
      return {
        ...state,
        username: action.payload.username,
      };
    }

    default:
      return state;
  }
};

export default user;
