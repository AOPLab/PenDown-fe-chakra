import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchAccount: false,
  getAccountBatch: false,
  getAccountBatchByReferral: false,
  fetchDownloadFileUrl: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_ACCOUNT_START: {
      return {
        ...state,
        fetchAccount: true,
      };
    }
    case commonConstants.FETCH_ACCOUNT_SUCCESS: {
      return {
        ...state,
        fetchAccount: false,
      };
    }
    case commonConstants.FETCH_ACCOUNT_FAIL: {
      return {
        ...state,
        fetchAccount: false,
      };
    }

    case commonConstants.FETCH_DOWNLOAD_FILE_URL_START: {
      return {
        ...state,
        fetchDownloadFileUrl: true,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS: {
      return {
        ...state,
        fetchDownloadFileUrl: false,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL: {
      return {
        ...state,
        fetchDownloadFileUrl: false,
      };
    }

    case commonConstants.GET_ACCOUNT_BATCH_START: {
      return {
        ...state,
        getAccountBatch: true,
      };
    }
    case commonConstants.GET_ACCOUNT_BATCH_SUCCESS: {
      return {
        ...state,
        getAccountBatch: false,
      };
    }
    case commonConstants.GET_ACCOUNT_BATCH_FAIL: {
      return {
        ...state,
        getAccountBatch: false,
      };
    }

    default: {
      return state;
    }
  }
}
