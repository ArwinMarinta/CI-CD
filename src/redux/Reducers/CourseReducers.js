import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  payment: [],
  modules: [],
  contents: [],
  filter: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.courses = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    setContents: (state, action) => {
      state.contents = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setCourse, setPayment, setModules, setContents,setFilter } =
  courseSlice.actions;

export default courseSlice.reducer;
