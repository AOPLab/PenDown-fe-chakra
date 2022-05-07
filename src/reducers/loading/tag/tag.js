import { tagConstants } from '../../../actions/tag/constant';

const initialState = {
  browseTag: false,
  getTag: false,
};

export default function note(state = initialState, action) {
  switch (action.type) {
    case tagConstants.BROWSE_TAG_START:
      return {
        ...state,
        browseTag: true,
      };
    case tagConstants.BROWSE_TAG_SUCCESS:
    case tagConstants.BROWSE_TAG_FAIL: {
      return {
        ...state,
        browseTag: false,
      };
    }

    case tagConstants.GET_TAG_START:
      return {
        ...state,
        getTag: true,
      };
    case tagConstants.GET_TAG_SUCCESS:
    case tagConstants.GET_TAG_FAIL: {
      return {
        ...state,
        getTag: false,
      };
    }

    default: {
      return state;
    }
  }
}
