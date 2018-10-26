import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
  loading: loadingReducer
});

export default rootReducer;
