import { schoolConstants } from '../../../actions/school/constant';

const initialState = {
  browseSchool: false,
  getSchool: false,
};

export default function school(state = initialState, action) {
  switch (action.type) {
    case schoolConstants.BROWSE_SCHOOL_START:
      return {
        ...state,
        browseSchool: true,
      };
    case schoolConstants.BROWSE_SCHOOL_SUCCESS:
    case schoolConstants.BROWSE_SCHOOL_FAIL: {
      return {
        ...state,
        browseSchool: false,
      };
    }

    case schoolConstants.GET_SCHOOL_START:
      return {
        ...state,
        getSchool: true,
      };
    case schoolConstants.GET_SCHOOL_SUCCESS:
    case schoolConstants.GET_SCHOOL_FAIL: {
      return {
        ...state,
        getSchool: false,
      };
    }

    default: {
      return state;
    }
  }
}
