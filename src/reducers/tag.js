import { combineReducers } from 'redux';
// import { userConstants } from '../actions/user/constants';
// import { commonConstants } from '../actions/common/constant';

const prototype = {
  id: null,
  name: null,
  note: {
    allIds: {},
    allTotalCnt: null,
    notabilityIds: {},
    notabilityTotalCnt: null,
    goodnotesIds: {},
    goodnotesTotalCnt: null,
  },
};

// note store format
// key stands for page, value stands for note ids for per page
// allIds: {
//   1: [1,2,3,4,5],
//   2: [6,7,8,9,10],
//   4: [11,12,13,14,15],
// },

// [1,2,3,4,5,6,7,8,9,10,]

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
