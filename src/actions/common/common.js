import agent from '../agent';
import { commonConstants } from './constant';

// get file URL and download
const downloadFile = (token, file, onSuccess = null, onError = null) => async (dispatch) => {
  // in 'file' parameter, you should include uuid, filename, and as_attachment as attributes
  const config = {
    headers: {
      'auth-token': token,
    },
    params: {
      filename: file.filename,
      as_attachment: file.as_attachment,
    },
  };
  try {
    dispatch({ type: commonConstants.DOWNLOAD_FILE_START });
    const res = await agent.get(`/s3-file/${file.uuid}/url`, config);

    fetch(res.data.data.url).then((t) => t.blob().then((b) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(b);
      a.setAttribute('download', file.filename);
      a.click();
    }));

    dispatch({
      type: commonConstants.DOWNLOAD_FILE_SUCCESS,
    });
    if (onSuccess) onSuccess();
  } catch (error) {
    dispatch({
      type: commonConstants.DOWNLOAD_FILE_FAIL,
      error,
    });
    if (onError) onError();
  }
};

// get file URL only
const fetchDownloadFileUrl = (token, file) => async (dispatch) => {
  const config = {
    headers: {
      'auth-token': token,
    },
    params: {
      filename: file.filename,
      as_attachment: file.as_attachment,
    },
  };
  try {
    dispatch({ type: commonConstants.FETCH_DOWNLOAD_FILE_URL_START });
    const res = await agent.get(`/s3-file/${file.uuid}/url`, config);
    dispatch({
      type: commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS,
      payload: { uuid: file.uuid, url: res.data.data.url },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL,
      error,
    });
  }
};

export {
  downloadFile,
  fetchDownloadFileUrl,
};
