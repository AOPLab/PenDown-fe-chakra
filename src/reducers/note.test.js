import note from './school';
import { noteConstants } from '../actions/note/constant';
import { commonConstants } from '../actions/common/constant';

test('byId: Initial State', () => {
  const currentNote = note(undefined, {}).byId;

  expect(currentNote).toEqual(
    {},
  );
});

test('byId: GET_NOTE_SUCCESS', () => {
  const currentNote = note({
    1: 1,
    2: 2,
  }, {
    type: noteConstants.GET_NOTE_SUCCESS,
    payload: {
      note: {
        id: 1,
        note: 2,
      }
    },
  }).byId;

  expect(currentNote).toEqual(
    {},
  );
});