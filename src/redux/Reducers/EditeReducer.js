import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editeContent: [],
  editeModules: [],
  editeType: [],
  editeLevel: [],
  editeInstructor: [],
  editeCategory: [],
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
  },
});

export const {
  setEditeContent,
  setEditeModules,
  setEditeType,
  setEditeLevel,
  setEditeInstructor,
  setEditeCategory,
} = editeSlice.actions;

export default editeSlice.reducer;
