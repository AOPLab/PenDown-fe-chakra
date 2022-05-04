import { tagConstants } from '../../actions/tag/constant';

const initialState = {
  browseTag: null,
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
    default: {
      return state;
    }
  }
}
