import { tagConstants } from '../../../actions/tag/constant';

const initialState = {
  browseTag: false,
  getTag: false,
  addTag: false,
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

    case tagConstants.ADD_TAG_START:
      return {
        ...state,
        addTag: true,
      };
    case tagConstants.ADD_TAG_SUCCESS:
    case tagConstants.ADD_TAG_FAIL: {
      return {
        ...state,
        addTag: false,
      };
    }

    default: {
      return state;
    }
  }
}
