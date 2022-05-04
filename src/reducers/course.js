import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  school_id: null,
  name: null,
  no: null,
};

const initialAllId = [1, 2, 3];

const initialById = {
  1: { id: 1, name: 'System Analysis and Design', no: 'IM3007' },
  2: { id: 2, name: 'Database Management', no: 'IM3008' },
  3: { id: 3, name: 'Software Project Management', no: 'IM5028' },
};

const byId = (state = initialById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allIds = (state = initialAllId, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
