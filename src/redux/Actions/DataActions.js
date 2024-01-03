import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setTotalCourse,
  setTopCourse,
  setTotalOrder,
  setUserActive,
  setTotalUser,
  setCourseType,
  setCourseCategory,
  setCourseInstructor,
  setTotalInstructor,
  setPopularPremium,
  setPopularFree,
} from "../Reducers/DataReducer";

export const getTotalCourse = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses?active=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTotalCourse(response.data));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getTotalOrder = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/totalEnroll?premium=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTotalOrder(response.data));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getTopCourse = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/courseTaken?free=true&premium=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTopCourse(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getUserActive = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(`${VITE_API_URL}/analytics/users/active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setUserActive(response.data));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getTotalUser = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/users/totalUsers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTotalUser(response.data));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getCourseType = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/courseTypes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setCourseType(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getCourseCategory = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/courseInCategory`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setCourseCategory(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getCourseInstructor = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/courseInstructors`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setCourseInstructor(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getTotalInstructor = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/analytics/courses/instructors`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTotalInstructor(response.data));
  } catch (error) {
    console.log(error?.mesasage);
  }
};

export const getPopularPremium = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(

      `${VITE_API_URL}/courses?limit=10&page=1&popular=true&type=free&type=premium`,


      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setPopularPremium(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
export const getPopularFree = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/courses?limit=5&page=1&popular=true&type=free`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setPopularFree(response.data.value));
  } catch (error) {
    console.log(error?.mesasage);
  }
};
