/* eslint-disable no-undef */
import school from './school';
import { commonConstants } from '../actions/common/constant';
import { schoolConstants } from '../actions/school/constant';

test('byId: Initial State', () => {
  const currentSchool = school(undefined, {}).byId;

  expect(currentSchool).toEqual(
    {},
  );
});

test('byId: SEARCH_SCHOOLS_SUCCESS', () => {
  const currentSchool = school(undefined, {
    type: commonConstants.SEARCH_SCHOOLS_SUCCESS,
    payload: {
      schools: [
        {
          school_id: 1,
          school_name: 'test_school1',
        },
        {
          school_id: 2,
          school_name: 'test_school2',
        },
      ],
    },
  }).byId;

  expect(currentSchool).toEqual(
    {
      1: {
        id: 1,
        name: 'test_school1',
      },
      2: {
        id: 2,
        name: 'test_school2',
      },
    },
  );
});

/*
test('byId: BROWSE_SCHOOL_SUCCESS', () => {
  const currentSchool = school({}, {
    type: schoolConstants.SEARCH_SCHOOLS_SUCCESS,
    payload: {
      schools: [
        {
          school_id: 1,
          school_name: 'test_school1',
        },
        {
          school_id: 2,
          school_name: 'test_school2',
        },
      ],
    },
  }).byId;

  expect(currentSchool).toEqual(
    {
      1: {
        id: 1,
        name: 'test_school1',
      },
      2: {
        id: 2,
        name: 'test_school2',
      },
    },
  );
});

test('byId: GET_SCHOOL_SUCCESS', () => {
  const currentSchool = school(undefined, {
    type: schoolConstants.GET_SCHOOLS_SUCCESS,
    payload: {
      id: 1,
      name: 'test_school1',
    },
  });

  expect(currentSchool[1]).toEqual(
    {
      id: 1,
      name: 'test_school1',
    },
  );
});
*/

test('allIds: Default State', () => {
  const currentSchool = school(undefined, {}).allIds;

  expect(currentSchool).toEqual(
    [],
  );
});

test('allIds: BROWSE_SCHOOL_SUCCESS', () => {
  const currentSchool = school(undefined, {
    type: schoolConstants.BROWSE_SCHOOL_SUCCESS,
    payload: [
      {
        school_id: 1,
      },
      {
        school_id: 2,
      },
    ],
  }).allIds;

  expect(currentSchool).toEqual(
    [1, 2],
  );
});

test('allIds: GET_SCHOOL_SUCCESS', () => {
  const currentSchool = school(undefined, {
    type: schoolConstants.GET_SCHOOL_SUCCESS,
    payload: {
      id: 1,
    },
  }).allIds;

  expect(currentSchool).toEqual(
    [1],
  );
});
