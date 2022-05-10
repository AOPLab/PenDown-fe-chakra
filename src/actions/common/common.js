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

const searchPeople = (q, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_PEOPLE_START });
  const config = {
    params: {
      q,
      filter: 'people',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_PEOPLE_SUCCESS,
      payload: { q, offset, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_PEOPLE_FAIL,
      error,
    });
  }
};

const searchTags = (q, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_TAGS_START });
  const config = {
    params: {
      q,
      filter: 'tags',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_TAGS_SUCCESS,
      payload: { q, offset, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_TAGS_FAIL,
      error,
    });
  }
};

const searchSchools = (q, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_SCHOOLS_START });
  const config = {
    params: {
      q,
      filter: 'schools',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_SCHOOLS_SUCCESS,
      payload: { q, offset, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_SCHOOLS_FAIL,
      error,
    });
  }
};

const searchCourses = (q, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_COURSES_START });
  const config = {
    params: {
      q,
      filter: 'courses',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_COURSES_SUCCESS,
      payload: { q, offset, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_COURSES_FAIL,
      error,
    });
  }
};

const searchNotes = (q, type, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_NOTES_START });
  const config = {
    params: {
      q,
      type,
      filter: 'notes',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_NOTES_SUCCESS,
      payload: {
        q, type, offset, ...res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_NOTES_FAIL,
      error,
    });
  }
};

const searchTemplates = (q, type, offset) => async (dispatch) => {
  dispatch({ type: commonConstants.SEARCH_TEMPLATES_START });
  const config = {
    params: {
      q,
      type,
      filter: 'templates',
      offset,
    },
  };
  try {
    const res = await agent.get('/api/search', config);
    dispatch({
      type: commonConstants.SEARCH_TEMPLATES_SUCCESS,
      payload: {
        q, type, offset, ...res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: commonConstants.SEARCH_TEMPLATES_FAIL,
      error,
    });
  }
};

export {
  downloadFile,
  fetchDownloadFileUrl,
  searchPeople,
  searchTags,
  searchSchools,
  searchNotes,
  searchCourses,
  searchTemplates,
};
