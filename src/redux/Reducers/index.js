import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import courseReducer from "./CourseReducers";
import AddCourse from "./AddReducer";
import DetailReducer from "./DetailReducer";
import EditeContent from "./EditeReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  select: AddCourse,
  detail: DetailReducer,
  edite: EditeContent,
});
