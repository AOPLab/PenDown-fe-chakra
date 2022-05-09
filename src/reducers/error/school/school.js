import { schoolConstants } from '../../../actions/school/constant';

const initialState = {
  browseSchool: null,
  getSchool: null,
};

export default function school(state = initialState, action) {
  switch (action.type) {
    case schoolConstants.BROWSE_SCHOOL_SUCCESS: {
      return {
        ...state,
        browseSchool: null,
      };
    }
    case schoolConstants.BROWSE_SCHOOL_FAIL: {
      return {
        ...state,
        browseSchool: action.error,
      };
    }

    case schoolConstants.GET_SCHOOL_SUCCESS: {
      return {
        ...state,
        getSchool: null,
      };
    }
    case schoolConstants.GET_SCHOOL_FAIL: {
      return {
        ...state,
        getSchool: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
