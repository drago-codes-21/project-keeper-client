import {
  ADD_NEW_PROJECT,
  GET_USER_PROJECT,
  GET_ALL_PROJECTS,
  SAVED_PROJECT_TOGGLE,
} from "../constants";
// import axios from "axios";

const INITIAL_STATE = {
  newProject: null,
  projectData: null,
  savedCollection: [],
};

// const server = "http://localhost:7070/api/project";
// const addToFavourites=async(e)=>{
//   // let pokemonFromFavourite = state.favourites.find(
//   //   (favPokemon) => pokemon.id === favPokemon.id
//   //   );
//       e.preventDefault()
//   const response = await axios.get("http://localhost:7070/api/project");

//       return {
//         ...state,
//         favourites: pokemonFromFavourite
//         ? [
//           ...state.favourites.filter(
//             (pokemon) => pokemon.id !== pokemonFromFavourite.id
//             ),
//           ]
//           : [...state.favourites, action.payload],
//         }}

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
    case SAVED_PROJECT_TOGGLE:
      return {
        ...state,
        savedCollection: [...state.savedCollection, action.payload],
      };
    default:
      return state;
  }
};

export default projectReducer;
