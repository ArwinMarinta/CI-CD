import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import courseReducer from "./CourseReducers";
import AddCourse from "./AddReducer";
import DetailReducer from "./DetailReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  select: AddCourse,
  detail: DetailReducer,
});
