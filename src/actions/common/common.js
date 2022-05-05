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
const fetchDownloadFileUrl = (token, noteId, pdf_filename = null, nota_filename = null, gnote_filename = null) => async (dispatch) => {
  dispatch({ type: commonConstants.FETCH_DOWNLOAD_FILE_URL_START });
  const config1 = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      filename: pdf_filename,
      note_id: noteId,
    },
  };
  const config2 = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      filename: nota_filename,
      note_id: noteId,
    },
  };
  const config3 = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      filename: gnote_filename,
      note_id: noteId,
    },
  };
  try {
    let pdf_url = null;
    let notability_url = null;
    let goodnotes_url = null;

    if (pdf_filename !== null && pdf_filename !== '') {
      const res1 = await agent.get('/api/file', config1);
      pdf_url = res1.data.file_url;
    }
    if (nota_filename !== null && nota_filename !== '') {
      const res1 = await agent.get('/api/file', config2);
      notability_url = res1.data.file_url;
    }
    if (gnote_filename !== null && gnote_filename !== '') {
      const res1 = await agent.get('/api/file', config3);
      goodnotes_url = res1.data.file_url;
    }
    dispatch({
      type: commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS,
      payload: {
        id: noteId, pdf_url, goodnotes_url, notability_url,
      },
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
