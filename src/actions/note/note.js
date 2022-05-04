import agent from '../agent';
import { noteConstants } from './constant';

// add a new note
const addNote = (
  token,
  title,
  description,
  is_template,
  course_id,
  bean,
  pdf_file,
  notability_file = null,
  goodnotes_file = null,
  tag_id_arr,
  new_tag_arr,
  history,
) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: noteConstants.ADD_NOTE_START });
  let note_id;
  try {
    const res = await agent.post('/api/notes', {
      title,
      description,
      is_template,
      course_id,
      bean,
    }, config);
    note_id = res.data.note_id;
  } catch (error) {
    dispatch({
      type: noteConstants.ADD_NOTE_FAIL,
      error,
    });
  }
  try {
    const fileconfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const formdata = new FormData();
    formdata.append('file', pdf_file);
    await agent.post(`/api/notes/${note_id}/pdf`, formdata, fileconfig);

    if (notability_file) {
      const formdata2 = new FormData();
      formdata2.append('file', notability_file);
      await agent.post(`/api/notes/${note_id}/notability`, formdata2, fileconfig);
    }
    if (goodnotes_file) {
      const formdata3 = new FormData();
      formdata3.append('file', goodnotes_file);
      await agent.post(`/api/notes/${note_id}/goodnotes`, formdata3, fileconfig);
    }
    const new_tag_id_arr = await Promise.all(new_tag_arr.map(async (item) => {
      const tag_res = await agent.post('/api/tag', { tag_name: item });
      return tag_res.data.tag_id;
    }));
    Promise.all(new_tag_id_arr.map((item) => agent.post(`/api/notes/${note_id}/tags/${item}`, {}, config)));
    Promise.all(tag_id_arr.map((item) => agent.post(`/api/notes/${note_id}/tags/${item}`, {}, config)));
    dispatch({ type: noteConstants.ADD_NOTE_SUCCESS });
    history.push(`/note/${note_id}`);
  } catch (error) {
    await agent.delete(`/api/notes/${note_id}`, config);
    dispatch({
      type: noteConstants.ADD_NOTE_FAIL,
      error,
    });
  }
};

// search note
const searchNotes = (q, type, filter, offset) => async (dispatch) => {
  dispatch({ type: noteConstants.SEARCH_NOTES_START });
  try {
    const res = await agent.get('/api/search', {
      params: {
        q,
        type,
        filter,
        offset,
      },
    });
    dispatch({
      type: noteConstants.SEARCH_NOTES_SUCCESS,
      payload: {
        type,
        filter,
        offset,
        ...res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.SEARCH_NOTES_FAIL,
      error,
    });
  }
};

// browse note by tag
const browseNotesByTag = (tag_id, type, filter, offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSE_NOTES_BY_TAG_START });
  try {
    const res = await agent.get(`/api/notes/tag/${tag_id}`, {
      params: { type, filter, offset },
    });
    const { preview_filename, note_id } = res.data;
    const res2 = await agent.get('/api/file/preview', {
      params: { filename: preview_filename, note_id },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS,
      payload: {
        tag_id,
        type,
        filter,
        offset,
        notes: {
          id: res.data.note_id,
          account_id: res.data.user_id,
          username: res.data.username,
          title: res.data.title,
          view_cnt: res.data.view_cnt,
          saved_cnt: res.data.saved_cnt,
          note_type: res.data.note_type,
          preview_filename: res.data.preview_filename,
          preview_url: res2.data.file_url,
          created_at: res.data.created_at,
        },
        tagnoteIds: res.data.map((item) => item.note_id),
      },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_TAG_FAIL,
      error,
    });
  }
};

// browse note by course
const browseNotesByCourse = (course_id, type, filter, offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSE_NOTES_BY_COURSE_START });
  try {
    const res = await agent.get(`/api/notes/course/${course_id}`, {
      params: { type, filter, offset },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_COURSE_SUCCESS,
      payload: {
        type,
        filter,
        offset,
        ...res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_COURSE_FAIL,
      error,
    });
  }
};

// browse hot note
const browseHotNotes = (offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSES_NOTE_HOT_START });
  try {
    const res = await agent.get('/api/notes/hot', {
      params: { offset },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_HOT_SUCCESS,
      payload: {
        offset,
        ...res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_HOT_FAIL,
      error,
    });
  }
};

// read note detail by note id
const getNote = (note_id, token = null) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({ type: noteConstants.GET_NOTE_START });
  try {
    if (token !== null) {
      const res = await agent.get(`/api/notes/${note_id}`, config);
      const { preview_filename } = res.data;
      const res2 = await agent.get('/api/file/preview', {
        params: { filename: preview_filename, note_id },
      });
      const res3 = await agent.get(`/api/notes/${note_id}/tags`);
      const res4 = await agent.get(`/api/notes/${note_id}/save`, config);
      dispatch({
        type: noteConstants.GET_NOTE_SUCCESS,
        payload: {
          id: res.data.note_id,
          username: res.data.username,
          account_id: res.data.account_id,
          title: res.data.title,
          description: res.data.description,
          course_name: res.data.course_name,
          course_id: res.data.course_id,
          course_no: res.data.course_no,
          school_name: res.data.school_name,
          school_id: res.data.school_id,
          note_type: res.data.note_type,
          is_template: res.data.is_template,
          bean: res.data.bean,
          preview_filename: res.data.preview_filename,
          preview_url: res2.data.file_url,
          pdf_filename: res.data.pdf_filename,
          notability_filename: res.data.notability_filename,
          goodnotes_filename: res.data.goodnotes_filename,
          view_cnt: res.data.view_cnt,
          saved_cnt: res.data.saved_cnt,
          created_at: res.data.created_at,
          tagIds: res3.data.map((item) => item.id),
          is_saved: res4.data.is_saved,
        },
      });
    } else {
      const res = await agent.get(`/api/notes/${note_id}`);
      const { preview_filename } = res.data;
      const res2 = await agent.get('/api/file/preview', {
        params: { filename: preview_filename, note_id },
      });
      const res3 = await agent.get(`/api/notes/${note_id}/tags`);
      dispatch({
        type: noteConstants.GET_NOTE_SUCCESS,
        payload: {
          id: res.data.note_id,
          username: res.data.username,
          account_id: res.data.account_id,
          title: res.data.title,
          description: res.data.description,
          course_name: res.data.course_name,
          course_id: res.data.course_id,
          course_no: res.data.course_no,
          school_name: res.data.school_name,
          school_id: res.data.school_id,
          note_type: res.data.note_type,
          is_template: res.data.is_template,
          bean: res.data.bean,
          preview_filename: res.data.preview_filename,
          preview_url: res2.data.file_url,
          pdf_filename: res.data.pdf_filename,
          notability_filename: res.data.notability_filename,
          goodnotes_filename: res.data.goodnotes_filename,
          view_cnt: res.data.view_cnt,
          saved_cnt: res.data.saved_cnt,
          created_at: res.data.created_at,
          tagIds: res3.data.map((item) => item.id),
        },
      });
    }
  } catch (error) {
    dispatch({
      type: noteConstants.GET_NOTE_FAIL,
      error,
    });
  }
};

// check a note is saved or not
const checkNoteSavedOrNot = (token, note_id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({ type: noteConstants.CHECK_NOTE_SAVED_OR_NOT_START });
  try {
    const res = await agent.get(`/api/notes/${note_id}/save`, config);
    dispatch({
      type: noteConstants.CHECK_NOTE_SAVED_OR_NOT_SUCCESS,
      payload: res.data.is_saved,
    });
  } catch (error) {
    dispatch({
      type: noteConstants.CHECK_NOTE_SAVED_OR_NOT_FAIL,
      error,
    });
  }
};

// add a note to saved note
const addNoteSaved = (token, note_id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: noteConstants.ADD_NOTE_SAVED_START });
  try {
    await agent.post(`/api/notes/${note_id}/save`, {}, config);
    dispatch({
      type: noteConstants.ADD_NOTE_SAVED_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: noteConstants.ADD_NOTE_SAVED_FAIL,
      error,
    });
  }
};

// add a note to saved note
const removeNoteSaved = (token, note_id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: noteConstants.REMOVE_NOTE_SAVED_START });
  try {
    await agent.delete(`/api/notes/${note_id}/save`, config);
    dispatch({
      type: noteConstants.REMOVE_NOTE_SAVED_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: noteConstants.REMOVE_NOTE_SAVED_FAIL,
      error,
    });
  }
};

// Use to edit self info
const editNote = (token, note_id, title, description, school_id, course_id, bean, previous_tag_id_arr, present_tag_id_arr, new_tags_arr) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: noteConstants.EDIT_NOTE_START });
  try {
    const noteInfo = {
      title,
      description,
      school_id,
      course_id,
      bean,
    };
    await agent.patch(`/api/notes/${note_id}`, noteInfo, config);
    // 還未做 add tag
    dispatch({ type: noteConstants.EDIT_NOTE_SUCCESS });
  } catch (error) {
    dispatch({
      type: noteConstants.EDIT_NOTE_FAIL,
      error,
    });
  }
};

export {
  addNote,
  searchNotes,
  browseNotesByTag,
  browseNotesByCourse,
  browseHotNotes,
  getNote,
  checkNoteSavedOrNot,
  addNoteSaved,
  removeNoteSaved,
  editNote,
};
