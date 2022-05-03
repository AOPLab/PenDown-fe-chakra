import { combineReducers } from 'redux';

const initialState = {
  tag_id: null,
  noteType: null, // all, notability, goodnotes
  filter: null, // popular, recent
  noteIds: [],
};

// [1,2,3,4,5,6,7,8,9,10,]

const tagNotes = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ tagNotes });
