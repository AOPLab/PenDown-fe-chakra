import { authConstants, userConstants } from '../actions/user/constants';

// self information
const initialState = {
  id: '',
  token: '',
  username: 'pd_test',
  fullName: '',
  email: '',
  description: '',
  status: '',
  bean: '',
  followersNum: null,
  followingNum: null,
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
