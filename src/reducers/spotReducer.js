import { GET_SPOTS } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SPOTS:
      return action.payload;
    default:
      return state;
  }
}
