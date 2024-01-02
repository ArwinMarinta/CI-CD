import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setEditeCategory,
  setEditeContent,
  setEditeInstructor,
  setEditeLevel,
  setEditeModules,
  setEditePromo,
  setEditeType,
} from "../Reducers/EditeReducer";

import { toastify } from "../../utils/toastify";

export const editeContentById =
  (courseId, modulesId, contentId) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      const response = await axios.get(
        `${VITE_API_URL}/courses/${courseId}/modules/${modulesId}/contents/${contentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { value } = response.data;
      dispatch(setEditeContent(value));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
    }
  };

export const updateContent =
  (title, videoUrl, duration, isDemo, modulesId, contentId, courseId) =>
  async (_, getState) => {
    try {
      let { token } = getState().auth;
      await axios.put(
        `${VITE_API_URL}/course-contents/${contentId}`,
        {
          title,
          videoUrl,
          duration: Number(duration),
          isDemo: Boolean(isDemo),
          moduleId: Number(modulesId),
          courseId: Number(courseId),
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

export const updateModuleById = (courseId, moduleId) => async (dispatch) => {
  try {
    console.log(courseId, moduleId);
    const response = await axios.get(
      `${VITE_API_URL}/courses/${courseId}/modules/${moduleId}`
    );

    const data = response.data.value;

    dispatch(setEditeModules(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};

export const updateDataModule =
  (title, courseId, moduleId) => async (_, getState) => {
    try {
      let { token } = getState().auth;

      await axios.put(
        `${VITE_API_URL}/course-modules/${moduleId}`,
        {
          title,
          courseId: Number(courseId),
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

export const updateTypeById = (typeId) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-types/${typeId}`);
    const data = response.data.value;

    dispatch(setEditeType(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};

export const updateDataType = (name, typeId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.put(
      `${VITE_API_URL}/course-types/${typeId}`,
      {
        name,
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

export const updateLevelById = (levelId) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/course-levels/${levelId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data.value;
    dispatch(setEditeLevel(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};

export const updateDataLevel = (name, levelId) => async (_, getState) => {
  try {
    const { token } = getState().auth;
    await axios.put(
      `${VITE_API_URL}/course-levels/${levelId}`,
      {
        name,
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

export const getInstructorById =
  (instructorId) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const response = await axios.get(
        `${VITE_API_URL}/course-instructors/${instructorId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.value;
      dispatch(setEditeInstructor(data));
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateDataInstructor =
  (name, email, password, confPassword, photoInstructor, instructorId) =>
  async (_, getState) => {
    try {
      let { token } = getState().auth;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confPassword", confPassword);
      formData.append(" photoInstructor", photoInstructor);
      await axios.put(
        `${VITE_API_URL}/course-instructors/${instructorId}`,
        {
          name,
          email,
          password,
          confPassword,
          photoInstructor,
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

export const getCategoryById = (categoryId) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const response = await axios.get(
      `${VITE_API_URL}/course-categories/${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { name, urlPhoto, isPublished } = response.data.value;
    const data = { name, urlPhoto, isPublished };
    dispatch(setEditeCategory(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDataCategori =
  (name, isPublished, photoCategory, categoryId) => async (_, getState) => {
    try {
      let { token } = getState().auth;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("isPublished", isPublished);
      formData.append("photoCategory", photoCategory);
      await axios.put(
        `${VITE_API_URL}/course-categories/${categoryId}`,
        {
          name,
          isPublished,
          photoCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
    }
  };

export const getDataPromoById = (promoId) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const response = await axios.get(
      `${VITE_API_URL}/course-promos/${promoId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { id, name, discount, expiredAt } = response.data.value;
    const data = { id, name, discount, expiredAt };

    dispatch(setEditePromo(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateDataPromo =
  (name, discount, expiredAt, promoId) => async (_, getState) => {
    try {
      let { token } = getState().auth;
      await axios.put(
        `${VITE_API_URL}/course-promos/${promoId}`,
        {
          name,
          discount: Number(discount),
          expiredAt,
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
