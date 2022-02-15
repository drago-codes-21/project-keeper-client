import {
  ADD_NEW_PROJECT,
  GET_USER_PROJECT,
  GET_ALL_PROJECTS,
  SAVED_PROJECT_TOGGLE,
} from "../constants";

export const addNewProject = (project) => ({
  type: ADD_NEW_PROJECT,
  payload: project,
});
export const getAllProjects = (data) => ({
  type: GET_ALL_PROJECTS,
  payload: data,
});
export const getUserProjects = (data) => ({
  type: GET_USER_PROJECT,
  payload: data,
});
export const toggleSavedProject = (data) => ({
  type: SAVED_PROJECT_TOGGLE,
  payload: data,
});
