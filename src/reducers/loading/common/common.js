import { commonConstants } from '../../../actions/common/constant';

const initialState = {
  fetchDownloadFileUrl: false,
  searchPeople: false,
  searchTags: false,
  searchSchools: false,
  searchCourses: false,
  searchNotes: false,
  searchTemplates: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_START: {
      return {
        ...state,
        fetchDownloadFileUrl: true,
      };
    }
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_SUCCESS:
    case commonConstants.FETCH_DOWNLOAD_FILE_URL_FAIL: {
      return {
        ...state,
        fetchDownloadFileUrl: false,
      };
    }

    case commonConstants.SEARCH_PEOPLE_START: {
      return {
        ...state,
        searchPeople: true,
      };
    }
    case commonConstants.SEARCH_PEOPLE_SUCCESS:
    case commonConstants.SEARCH_PEOPLE_FAIL: {
      return {
        ...state,
        searchPeople: false,
      };
    }
    case commonConstants.SEARCH_TAGS_START: {
      return {
        ...state,
        searchTags: true,
      };
    }
    case commonConstants.SEARCH_TAGS_SUCCESS:
    case commonConstants.SEARCH_TAGS_FAIL: {
      return {
        ...state,
        searchTags: false,
      };
    }
    case commonConstants.SEARCH_SCHOOLS_START: {
      return {
        ...state,
        searchSchools: true,
      };
    }
    case commonConstants.SEARCH_SCHOOLS_SUCCESS:
    case commonConstants.SEARCH_SCHOOLS_FAIL: {
      return {
        ...state,
        searchSchools: false,
      };
    }
    case commonConstants.SEARCH_COURSES_START: {
      return {
        ...state,
        searchCourses: true,
      };
    }
    case commonConstants.SEARCH_COURSES_SUCCESS:
    case commonConstants.SEARCH_COURSES_FAIL: {
      return {
        ...state,
        searchCourses: false,
      };
    }
    case commonConstants.SEARCH_NOTES_START: {
      return {
        ...state,
        searchNotes: true,
      };
    }
    case commonConstants.SEARCH_NOTES_SUCCESS:
    case commonConstants.SEARCH_NOTES_FAIL: {
      return {
        ...state,
        searchNotes: false,
      };
    }
    case commonConstants.SEARCH_TEMPLATES_START: {
      return {
        ...state,
        searchTemplates: true,
      };
    }
    case commonConstants.SEARCH_TEMPLATES_SUCCESS:
    case commonConstants.SEARCH_TEMPLATES_FAIL: {
      return {
        ...state,
        searchTemplates: false,
      };
    }

    default: {
      return state;
    }
  }
}
