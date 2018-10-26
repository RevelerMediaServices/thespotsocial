import { USER_STATUS, COMMENTS_STATUS } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case COMMENTS_STATUS:
      return { ...state, comments: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
