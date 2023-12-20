import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setKategori,
  setLevel,
  setType,
  setPromo,
} from "../Reducers/AddReducer";

export const getKategori = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-categories`);

    const { data } = response;
    dispatch(setKategori(data.value));
  } catch (error) {
    console.log(error);
  }
};

export const getLevel = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-levels`);

    const { data } = response;
    dispatch(setLevel(data.value));
  } catch (error) {
    console.log(error);
  }
};

export const getType = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-types`);

    const { data } = response;
    dispatch(setType(data.value));
  } catch (error) {
    console.log(error);
  }
};
export const getPromo = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-promos`);

    const { data } = response;
    dispatch(setPromo(data.value));
  } catch (error) {
    console.log(error);
  }
};
