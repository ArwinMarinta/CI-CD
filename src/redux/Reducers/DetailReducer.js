import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailCourse: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setDetailCourse: (state, action) => {
      state.detailCourse = action.payload;
    },
  },
});

export const { setDetailCourse } = courseSlice.actions;

export default courseSlice.reducer;
