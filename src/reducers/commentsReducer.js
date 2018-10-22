import { GET_COMMENTS } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
