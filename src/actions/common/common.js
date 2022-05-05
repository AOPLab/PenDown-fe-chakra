import agent from '../agent';
import { commonConstants } from './constant';

// get file URL and download
const downloadFile = (token, filename, noteId) => async (dispatch) => {
  // in 'file' parameter, you should include uuid, filename, and as_attachment as attributes
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      filename,
      note_id: noteId,
    },
  };
  try {
    dispatch({ type: commonConstants.DOWNLOAD_FILE_START });
    const res2 = await agent.get('/api/file', config);

    window.open(res2.data.file_url);
    // axios.get(res2.data.file_url, { responseType: 'blob' })
    //   .then((res) => {
    //     if (filename.includes('pdf')) {
    //       fileDownload(res.data, `pendown-${noteId}.pdf`);
    //     }
    //     if (filename.includes('note')) {
    //       fileDownload(res.data, `pendown-${noteId}.note`);
    //     }
    //     if (filename.includes('goodnotes')) {
    //       fileDownload(res.data, `pendown-${noteId}.goodnotes`);
    //     }
    //   });

    dispatch({
      type: commonConstants.DOWNLOAD_FILE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: commonConstants.DOWNLOAD_FILE_FAIL,
      error,
    });
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
