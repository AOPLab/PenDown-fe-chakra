import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchDownloadFileUrl: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_START: {
      return {
        ...state,
        fetchDownloadFileUrl: true,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS:
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL: {
      return {
        ...state,
        fetchDownloadFileUrl: false,
      };
    }

    default: {
      return state;
    }
  }
}
