import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setCourse,
  setPayment,
  setModules,
  setContents,
} from "../Reducers/CourseReducers";

export const getCourse = (pages) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/courses?limit=20&page=${pages}`
    );

    const { data } = response;
    dispatch(setCourse(data.value));
  } catch (error) {
    console.log(error);
  }
};
export const getPayment = (pages) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/orders/all?limit=15&page=${pages}`
    );

    const { data } = response;
    dispatch(setPayment(data.value));
  } catch (error) {
    console.log(error);
  }
};

export const addDataCategory = (picture, category) => async () => {
  try {
    const data = true;
    const formData = new FormData();
    formData.append("name", category);
    formData.append("isPublished", data);
    formData.append("photoCategory", picture);
    // console.log(formData);

    console.log(category);
    console.log(picture);
    console.log(data);
    await axios.post(
      `${VITE_API_URL}/course-categories`,

      {
        name: category,
        isPublished: data,
        photoCategory: picture,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(formData);
  } catch (error) {
    console.log(error);
  }
};

export const addDataType = (type) => async () => {
  try {
    await axios.post(`${VITE_API_URL}/course-types`, {
      name: type,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getModuleById = (Id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/courses/${Id}/modules`);

    const { value } = response.data;

    dispatch(setModules(value));
  } catch (error) {
    console.log(error);
  }
};

export const getContentById = (modulesId, courseId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/courses/${courseId}/modules/${modulesId}`
    );

    // const { value } = response.data;
    // const { data } = value.contents;
    const contents = response.data.value.contents;

    dispatch(setContents(contents));
  } catch (error) {
    console.log(error);
  }
};

export const deleteContent = (contentId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-contents/${contentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
