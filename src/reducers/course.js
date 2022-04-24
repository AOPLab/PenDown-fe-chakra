import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  school_id: null,
  name: null,
  no: null,
};

const byId = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
