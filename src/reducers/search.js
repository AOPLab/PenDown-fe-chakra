// import { userConstants } from '../actions/user/constants';
// import { commonConstants } from '../actions/common/constant';

const initialState = {
  account: {
    ids: {},
    totalCnt: null,
  },
  tag: {
    ids: {},
    totalCnt: null,
  },
  school: {
    ids: {},
    totalCnt: null,
  },
  course: {
    ids: {},
    totalCnt: null,
  },
  note: {
    allIds: {},
    allTotalCnt: null,
    notabilityIds: {},
    notabilityTotalCnt: null,
    goodnoteIds: {},
    goodnoteTotalCnt: null,
  },
  template: {
    allIds: {},
    allTotalCnt: null,
    notabilityIds: {},
    notabilityTotalCnt: null,
    goodnoteIds: {},
    goodnoteTotalCnt: null,
  },
};

const search = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default search;
