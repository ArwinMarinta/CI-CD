import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailCourse: [],
  detailContent: [],
  courseDetail: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailCourse: (state, action) => {
      state.detailCourse = action.payload;
    },
    setDetailContent: (state, action) => {
      state.detailContent = action.payload;
    },
    setCourseDetail: (state, action) => {
      state.courseDetail = action.payload;
    },
  },
});

export const { setDetailCourse, setDetailContent, setCourseDetail } =
  detailSlice.actions;

export default detailSlice.reducer;
