import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editeContent: [],
  editeModules: [],
  editeType: [],
  editeLevel: [],
  editeInstructor: [],
  editeCategory: [],
  editePromo: [],
  editeCourse: [],
};

const editeSlice = createSlice({
  name: "edite",
  initialState,
  reducers: {
    setEditeContent: (state, action) => {
      state.editeContent = action.payload;
    },
    setEditeModules: (state, action) => {
      state.editeModules = action.payload;
    },
    setEditeType: (state, action) => {
      state.editeType = action.payload;
    },
    setEditeLevel: (state, action) => {
      state.editeLevel = action.payload;
    },
    setEditeInstructor: (state, action) => {
      state.editeInstructor = action.payload;
    },
    setEditeCategory: (state, action) => {
      state.editeCategory = action.payload;
    },
    setEditePromo: (state, action) => {
      state.editePromo = action.payload;
    },
    setEditeCourse: (state, action) => {
      state.editeCourse = action.payload;
    },
  },
});

export const {
  setEditeContent,
  setEditeModules,
  setEditeType,
  setEditeLevel,
  setEditeInstructor,
  setEditeCategory,
  setEditePromo,
  setEditeCourse,
} = editeSlice.actions;

export default editeSlice.reducer;
