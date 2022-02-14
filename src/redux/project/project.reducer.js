import {
  ADD_NEW_PROJECT,
  GET_USER_PROJECT,
  GET_ALL_PROJECTS,
} from "../constants";

const INITIAL_STATE = {
  newProject: null,
  projectData: null,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      return {
        ...state,
        newProject: action.payload,
      };
    case GET_ALL_PROJECTS:
      return {
        ...state,
        newProject: action.payload,
      };
    case GET_USER_PROJECT:
      return {
        ...state,
        projectData: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
