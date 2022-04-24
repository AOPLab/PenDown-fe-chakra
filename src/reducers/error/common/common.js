import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchAccount: null,
  fetchDownloadFileUrl: null,
  getAccountBatch: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_ACCOUNT_SUCCESS: {
      return {
        ...state,
        fetchAccount: null,
      };
    }
    case commonConstants.FETCH_ACCOUNT_FAIL: {
      return {
        ...state,
        fetchAccount: action.error,
      };
    }

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

    case commonConstants.GET_ACCOUNT_BATCH_SUCCESS: {
      return {
        ...state,
        getAccountBatch: null,
      };
    }
    case commonConstants.GET_ACCOUNT_BATCH_FAIL: {
      return {
        ...state,
        getAccountBatch: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
