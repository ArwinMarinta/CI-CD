import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kategori: [],
  type: [],
  level: [],
  instructor: [],
  promo: [],
};

const selectSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setKategori: (state, action) => {
      state.kategori = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setInstructor: (state, action) => {
      state.instructor = action.payload;
    },
    setPromo: (state, action) => {
      state.promo = action.payload;
    },
  },
});

export const { setKategori, setType, setLevel, setInstructor, setPromo } =
  selectSlice.actions;

export default selectSlice.reducer;
