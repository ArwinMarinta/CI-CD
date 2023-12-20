import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";

export default configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_MODE !== "production",
});
