import agent from '../agent';
import { noteConstants } from './constant';
import { fetchAllTags } from '../tag/tag';

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
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_TAG_SUCCESS,
      payload: {
        tag_id,
        type,
        filter,
        offset,
        notes: res.data.notes.map((item) => ({
          id: item.note_id,
          account_id: item.user_id,
          username: item.username,
          title: item.title,
          view_cnt: item.view_cnt,
          saved_cnt: item.saved_cnt,
          note_type: item.note_type,
          preview_filename: item.preview_filename,
          preview_url: item.preview_url,
          created_at: item.created_at,
        })),
        tagnoteIds: res.data.notes.map((item) => item.note_id),
        total_cnt: res.data.total_cnt,
      },
    });
    if (res.data.total_cnt > offset + 12) {
      dispatch(browseNotesByTag(tag_id, type, filter, offset + 12));
    }
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
        course_id,
        type,
        filter,
        offset,
        notes: res.data.notes.map((item) => ({
          id: item.note_id,
          account_id: item.user_id,
          username: item.username,
          title: item.title,
          view_cnt: item.view_cnt,
          saved_cnt: item.saved_cnt,
          note_type: item.note_type,
          preview_filename: item.preview_filename,
          preview_url: item.preview_url,
          created_at: item.created_at,
        })),
        coursenoteIds: res.data.notes.map((item) => item.note_id),
        total_cnt: res.data.total_cnt,
      },
    });
    if (res.data.total_cnt > offset + 12) {
      dispatch(browseNotesByCourse(course_id, type, filter, offset + 12));
    }
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_COURSE_FAIL,
      error,
    });
  }
};

// browse hot note
const browseHotNotes = (offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSE_NOTES_HOT_START });
  try {
    const res = await agent.get('/api/notes/hot', {
      params: { offset },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_HOT_SUCCESS,
      payload: {
        offset,
        notes: res.data.notes.map((item) => ({
          id: item.note_id,
          account_id: item.user_id,
          username: item.username,
          title: item.title,
          view_cnt: item.view_cnt,
          saved_cnt: item.saved_cnt,
          note_type: item.note_type,
          preview_filename: item.preview_filename,
          preview_url: item.preview_url,
          created_at: item.created_at,
        })),
        hotNoteIds: res.data.notes.map((item) => item.note_id),
      },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_HOT_FAIL,
      error,
    });
  }
};

// browse note by public user
const browsePublicUserNotes = (account_id, type, filter, offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSE_NOTES_BY_USER_PUBLIC_START });
  try {
    const res = await agent.get(`/api/account/${account_id}/notes`, {
      params: { type, filter, offset },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_USER_PUBLIC_SUCCESS,
      payload: {
        account_id,
        type,
        filter,
        offset,
        notes: res.data.notes.map((item) => ({
          id: item.note_id,
          account_id,
          username: item.username,
          title: item.title,
          view_cnt: item.view_cnt,
          saved_cnt: item.saved_cnt,
          note_type: item.note_type,
          preview_filename: item.preview_filename,
          preview_url: item.preview_url,
          created_at: item.created_at,
        })),
        noteIds: res.data.notes.map((item) => item.note_id),
        total_cnt: res.data.total_cnt,
      },
    });
    if (res.data.total_cnt > offset + 12) {
      dispatch(browsePublicUserNotes(account_id, type, filter, offset + 12));
    }
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_USER_PUBLIC_FAIL,
      error,
    });
  }
};

// browse user own note
const browseUserOwnNotes = (token, account_id, type, filter, offset) => async (dispatch) => {
  dispatch({ type: noteConstants.BROWSE_NOTES_BY_USER_OWN_START });
  try {
    const res = await agent.get(`/api/account/${account_id}/selfnotes`, {
      params: { type, filter, offset },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_USER_OWN_SUCCESS,
      payload: {
        account_id,
        type,
        filter,
        offset,
        notes: res.data.notes.map((item) => ({
          id: item.note_id,
          account_id: item.user_id,
          username: item.username,
          title: item.title,
          view_cnt: item.view_cnt,
          saved_cnt: item.saved_cnt,
          note_type: item.note_type,
          preview_filename: item.preview_filename,
          preview_url: item.preview_url,
          created_at: item.created_at,
        })),
        noteIds: res.data.notes.map((item) => item.note_id),
        total_cnt: res.data.total_cnt,
      },
    });
    if (res.data.total_cnt > offset + 12) {
      dispatch(browseUserOwnNotes(token, account_id, type, filter, offset + 12));
    }
  } catch (error) {
    dispatch({
      type: noteConstants.BROWSE_NOTES_BY_USER_OWN_FAIL,
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
      const res3 = await agent.get(`/api/notes/${note_id}/tags`);
      const res4 = await agent.get(`/api/notes/${note_id}/save`, config);
      dispatch({
        type: noteConstants.GET_NOTE_SUCCESS,
        payload: {
          note: {
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
            preview_url: res.data.preview_url,
            pdf_filename: res.data.pdf_filename,
            notability_filename: res.data.notability_filename,
            goodnotes_filename: res.data.goodnotes_filename,
            view_cnt: res.data.view_cnt,
            saved_cnt: res.data.saved_cnt,
            created_at: res.data.created_at,
            tagIds: res3.data.tags ? res3.data.tags.map((item) => item.id) : [],
            is_saved: res4.data.is_saved,
          },
          tag: res3.data.tags ? res3.data.tags : [],
        },
      });
    } else {
      const res = await agent.get(`/api/notes/${note_id}`);
      const res3 = await agent.get(`/api/notes/${note_id}/tags`);
      dispatch({
        type: noteConstants.GET_NOTE_SUCCESS,
        payload: {
          note: {
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
            preview_url: res.data.preview_url,
            pdf_filename: res.data.pdf_filename,
            notability_filename: res.data.notability_filename,
            goodnotes_filename: res.data.goodnotes_filename,
            view_cnt: res.data.view_cnt,
            saved_cnt: res.data.saved_cnt,
            created_at: res.data.created_at,
            tagIds: res3.data.tags ? res3.data.tags.map((item) => item.id) : [],
            is_saved: false,
          },
          tag: res3.data.tags ? res3.data.tags : [],
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
      payload: note_id,
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
      payload: note_id,
    });
  } catch (error) {
    dispatch({
      type: noteConstants.REMOVE_NOTE_SAVED_FAIL,
      error,
    });
  }
};

// Use to edit self info
const editNote = (token, note_id, title, description, is_template, course_id, bean, previous_tag_id_arr, present_tag_id_arr, new_tag_arr) => async (dispatch) => {
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
      course_id,
      bean,
      is_template,
    };
    await agent.patch(`/api/notes/${note_id}`, noteInfo, config);
    const delete_tag_ids = previous_tag_id_arr.filter((item) => !present_tag_id_arr.includes(item));
    const add_tag_ids = present_tag_id_arr.filter((item) => !previous_tag_id_arr.includes(item));
    const new_tag_id_arr = await Promise.all(new_tag_arr.map(async (item) => {
      const tag_res = await agent.post('/api/tag', { tag_name: item });
      return tag_res.data.tag_id;
    }));
    Promise.all(new_tag_id_arr.map((item) => agent.post(`/api/notes/${note_id}/tags/${item}`, {}, config)));
    Promise.all(delete_tag_ids.map((item) => agent.delete(`/api/notes/${note_id}/tags/${item}`, config)));
    Promise.all(add_tag_ids.map((item) => agent.post(`/api/notes/${note_id}/tags/${item}`, {}, config)));

    dispatch({ type: noteConstants.EDIT_NOTE_SUCCESS });
    if (new_tag_arr) {
      dispatch(fetchAllTags());
    }
    dispatch(getNote(note_id, token));
  } catch (error) {
    dispatch({
      type: noteConstants.EDIT_NOTE_FAIL,
      error,
    });
  }
};

const buyNote = (token, noteId) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: noteConstants.BUY_NOTE_START });
  try {
    const res = await agent.post(`/api/notes/${noteId}/buy`, {}, config);
    dispatch({
      type: noteConstants.BUY_NOTE_SUCCESS,
      payload: { id: noteId, ...res.data },
    });
  } catch (error) {
    dispatch({
      type: noteConstants.BUY_NOTE_FAIL,
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
  browsePublicUserNotes,
  browseUserOwnNotes,
  getNote,
  checkNoteSavedOrNot,
  addNoteSaved,
  removeNoteSaved,
  editNote,
  buyNote,
};
