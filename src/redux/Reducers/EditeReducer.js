import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editeContent: [],
  editeModules: [],
  editeType: [],
  editeLevel: [],
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
  },
});

export const { setEditeContent, setEditeModules, setEditeType, setEditeLevel } =
  editeSlice.actions;

export default editeSlice.reducer;
