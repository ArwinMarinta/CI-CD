import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import { setDetailCourse } from "../Reducers/DetailReducer";

export const getDetailCourse = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/courses/${id}`);

    const { value } = response.data;
    const data = value;
    dispatch(setDetailCourse(data));
  } catch (error) {
    console.log(error);
  }
};
