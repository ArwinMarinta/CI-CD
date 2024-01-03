import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import { setDetailContent, setDetailCourse } from "../Reducers/DetailReducer";
import { setEditeCourse } from "../Reducers/EditeReducer";
import { toastify } from "../../utils/toastify";
import DetailCourse from "../../components/Modal/DetailCourse";

export const getDetailCourse = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/courses/${id}`);

    const { value } = response.data;
    const data = value;
    dispatch(setEditeCourse(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailCourseByID = (id) => async (dispatch) => {
  try {
    dispatch(setDetailCourse([]));
    const response = await axios.get(`${VITE_API_URL}/courses/${id}`);

    dispatch(setDetailCourse(response.data.value));
  } catch (error) {
    console.log(error);
  }
};

export const getDetailContentById =
  (modulesId, courseId, contentId) => async (dispatch, getState) => {
    try {
      dispatch(setDetailContent([]));
      let { token } = getState().auth;
      const response = await axios.get(
        `${VITE_API_URL}/courses/${courseId}/modules/${modulesId}/contents/${contentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.value;
      dispatch(setDetailContent(data));
    } catch (error) {
      console.log(error);
    }
  };

export const updateDataCourse =
  (
    title,
    courseCategoryId,
    courseTypeId,
    courseLevelId,
    price,
    courseInstructorId,
    description,
    isPublished,
    courseImage,
    requirement,
    id
  ) =>
  async (_, getState) => {
    try {
      let { token } = getState().auth;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("courseCategoryId", courseCategoryId);
      formData.append("courseTypeId", courseTypeId);
      formData.append("courseLevelId", courseLevelId);
      formData.append("price", price);
      formData.append("courseInstructorId", courseInstructorId);
      formData.append("description", description);
      formData.append("isPublished", isPublished);
      formData.append("courseImage", courseImage);
      formData.append(" requirements", requirement);


      await axios.put(
        `${VITE_API_URL}/courses/${id}`,
        {
          title,
          courseCategoryId,
          courseTypeId,
          courseLevelId,
          price,
          courseInstructorId,
          description,
          isPublished: Boolean(isPublished),
          courseImage,
          requirements: requirement,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
    }
  };

export const updatePomoCourse = (promoId, courseId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.put(
      `${VITE_API_URL}/courses/${courseId}/promos`,
      {
        promoId: Number(promoId),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};
export const deletPomoCourse = (courseId) => async (_, getState) => {
  try {
    console.log(courseId);
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/courses/${courseId}/promos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};
