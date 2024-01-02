import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: [],
  totalCourse: [],
  totalOrder: [],
  topCourse: [],
  totalUser: [],
  courseType: [],
  courseCategory: [],
  courseInstructor: [],
  totalInstructor: [],
  popularPremium: [],
  popularFree: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserActive: (state, action) => {
      state.userActive = action.payload;
    },
    setTotalCourse: (state, action) => {
      state.totalCourse = action.payload;
    },
    setTotalOrder: (state, action) => {
      state.totalOrder = action.payload;
    },
    setTopCourse: (state, action) => {
      state.topCourse = action.payload;
    },
    setTotalUser: (state, action) => {
      state.totalUser = action.payload;
    },
    setCourseType: (state, action) => {
      state.courseType = action.payload;
    },
    setCourseCategory: (state, action) => {
      state.courseCategory = action.payload;
    },
    setCourseInstructor: (state, action) => {
      state.courseInstructor = action.payload;
    },
    setTotalInstructor: (state, action) => {
      state.totalInstructor = action.payload;
    },
    setPopularPremium: (state, action) => {
      state.popularPremium = action.payload;
    },
    setPopularFree: (state, action) => {
      state.popularFree = action.payload;
    },
  },
});

export const {
  setUserActive,
  setTotalCourse,
  setTopCourse,
  setTotalUser,
  setTotalOrder,
  setCourseType,
  setCourseCategory,
  setCourseInstructor,
  setTotalInstructor,
  setPopularFree,
  setPopularPremium,
} = dataSlice.actions;

export default dataSlice.reducer;
