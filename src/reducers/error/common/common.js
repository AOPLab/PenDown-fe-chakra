import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchDownloadFileUrl: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS: {
      return {
        ...state,
        fetchDownloadFileUrl: null,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL: {
      return {
        ...state,
        fetchDownloadFileUrl: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
