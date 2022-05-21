/* eslint-disable no-undef */
import user from './user';
import { authConstants } from '../actions/user/constants';

test('Initial State', () => {
  const currentUser = user(undefined, {});
  expect(currentUser).toEqual(
    {
      id: null,
      username: '',
      fullName: '',
      email: '',
      description: '',
      status: 'BASIC',
      bean: 0,
      followersNum: 0,
      followingNum: 0,
      followersIds: [],
      followingIds: [],
      noteNum: 0,
      uploadedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      savedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      libraryNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      isGoogle: true,
      hasPassword: true,
    },
  );
});

test('AUTH_SUCCESS', () => {
  const currentUser = user(undefined, {
    type: authConstants.AUTH_SUCCESS,
    user: {
      id: 1,
      username: 'test',
      fullName: 'test',
      email: 'test',
      description: 'test',
      status: 'test',
      bean: 1000,
      followersNum: 10,
      followingNum: 10,
      followersIds: [1, 2],
      followingIds: [1, 2],
      noteNum: 100,
      uploadedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      savedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      libraryNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      isGoogle: true,
      hasPassword: true,
    },
  });

  expect(currentUser).toEqual(
    {
      id: 1,
      username: 'test',
      fullName: 'test',
      email: 'test',
      description: 'test',
      status: 'test',
      bean: 1000,
      followersNum: 10,
      followingNum: 10,
      followersIds: [1, 2],
      followingIds: [1, 2],
      noteNum: 100,
      uploadedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      savedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      libraryNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      isGoogle: true,
      hasPassword: true,
    },
  );
});

test('AUTH_LOGOUT', () => {
  let currentUser = user(undefined, {
    type: authConstants.AUTH_SUCCESS,
    user: {
      id: 1,
      username: 'test',
      fullName: 'test',
      email: 'test',
      description: 'test',
      status: 'test',
      bean: 1000,
      followersNum: 10,
      followingNum: 10,
      followersIds: [1, 2],
      followingIds: [1, 2],
      noteNum: 100,
      uploadedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      savedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      libraryNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      isGoogle: true,
      hasPassword: true,
    },
  });

  currentUser = user(undefined, {
    type: authConstants.AUTH_LOGOUT,
  });

  expect(currentUser).toEqual(
    {
      id: null,
      username: '',
      fullName: '',
      email: '',
      description: '',
      status: 'BASIC',
      bean: 0,
      followersNum: 0,
      followingNum: 0,
      followersIds: [],
      followingIds: [],
      noteNum: 0,
      uploadedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      savedNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      libraryNotes: {
        all: {},
        allTotalCnt: 0,
        notability: {},
        notabilityTotalCnt: 0,
        goodnotes: {},
        goodnotesTotalCnt: 0,
      },
      isGoogle: true,
      hasPassword: true,
    },
  );
});
