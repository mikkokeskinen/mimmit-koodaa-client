import {GET_CATEGORIES} from "../constants/ActionTypes";

export default function categories(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.data];
    default:
      return state;
  }
}
