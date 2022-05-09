import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchDownloadFileUrl: null,
  searchPeople: null,
  searchTags: null,
  searchSchools: null,
  searchCourses: null,
  searchNotes: null,
  searchTemplates: null,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS: {
      return {
        ...state,
        fetchDownloadFileUrl: null,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL: {
      return {
        ...state,
        fetchDownloadFileUrl: action.error,
      };
    }

    case commonConstants.SEARCH_PEOPLE_SUCCESS: {
      return {
        ...state,
        searchPeople: null,
      };
    }
    case commonConstants.SEARCH_PEOPLE_FAIL: {
      return {
        ...state,
        searchPeople: action.error,
      };
    }
    case commonConstants.SEARCH_TAGS_SUCCESS: {
      return {
        ...state,
        searchTags: null,
      };
    }
    case commonConstants.SEARCH_TAGS_FAIL: {
      return {
        ...state,
        searchTags: action.error,
      };
    }
    case commonConstants.SEARCH_SCHOOLS_SUCCESS: {
      return {
        ...state,
        searchSchools: null,
      };
    }
    case commonConstants.SEARCH_SCHOOLS_FAIL: {
      return {
        ...state,
        searchSchools: action.error,
      };
    }
    case commonConstants.SEARCH_COURSES_SUCCESS: {
      return {
        ...state,
        searchCourses: null,
      };
    }
    case commonConstants.SEARCH_COURSES_FAIL: {
      return {
        ...state,
        searchCourses: action.error,
      };
    }
    case commonConstants.SEARCH_NOTES_SUCCESS: {
      return {
        ...state,
        searchNotes: null,
      };
    }
    case commonConstants.SEARCH_NOTES_FAIL: {
      return {
        ...state,
        searchNotes: action.error,
      };
    }
    case commonConstants.SEARCH_TEMPLATES_SUCCESS: {
      return {
        ...state,
        searchTemplates: null,
      };
    }
    case commonConstants.SEARCH_TEMPLATES_FAIL: {
      return {
        ...state,
        searchTemplates: action.error,
      };
    }

    default: {
      return state;
    }
  }
}
