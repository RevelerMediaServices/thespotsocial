import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import spotReducer from "./spotReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
  loading: loadingReducer,
  spots: spotReducer
});

export default rootReducer;
