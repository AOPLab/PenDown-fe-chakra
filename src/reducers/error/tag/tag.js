import { tagConstants } from '../../../actions/tag/constant';

const initialState = {
  browseTag: null,
  getTag: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case tagConstants.BROWSE_TAG_SUCCESS: {
      return {
        ...state,
        browseTag: null,
      };
    }
    case tagConstants.BROWSE_TAG_FAIL: {
      return {
        ...state,
        browseTag: action.error,
      };
    }

    case tagConstants.GET_TAG_SUCCESS: {
      return {
        ...state,
        getTag: null,
      };
    }
    case tagConstants.GET_TAG_FAIL: {
      return {
        ...state,
        getTag: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
