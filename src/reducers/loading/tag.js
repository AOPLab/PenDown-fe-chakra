import { tagConstants } from '../../actions/tag/constant';

const initialState = {
  browseTag: false,
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

    default: {
      return state;
    }
  }
}
