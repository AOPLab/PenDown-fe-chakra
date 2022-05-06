import { schoolConstants } from '../../actions/school/constant';

const initialState = {
  browseSchool: null,
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
    default: {
      return state;
    }
  }
}
