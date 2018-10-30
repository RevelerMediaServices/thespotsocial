import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import spotReducer from "./spotReducer";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
  loading: loadingReducer,
  spots: spotReducer,
  notes: notesReducer
});

export default rootReducer;
