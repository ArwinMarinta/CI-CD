import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setEditeCategory,
  setEditeContent,
  setEditeInstructor,
  setEditeLevel,
  setEditeModules,
  setEditeType,
} from "../Reducers/EditeReducer";
import { useState } from "react";
// import { setEditeContent } from "../Reducers/EditeReducer";

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
      console.log(error);
    }
  };

export const updateContent =
  (title, videoUrl, duration, isDemo, modulesId, contentId) =>
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
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      alert(error.message);
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
    console.log(error.message);
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
      console.log(error.message);
    }
  };

export const updateTypeById = (typeId) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-types/${typeId}`);
    const data = response.data.value;

    dispatch(setEditeType(data));
  } catch (error) {
    console.log(error.message);
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
    console.log(error.message);
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
    console.log(error.message);
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
    console.log(error.message);
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
  (name, instructorId) => async (_, getState) => {
    try {
      let { token } = getState().auth;
      await axios.put(
        `${VITE_API_URL}/course-instructors/${instructorId}`,
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
      console.log(error.message);
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

      console.log(name);
      console.log(photoCategory);
      console.log(isPublished);
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
      console.log(error.message);
    }
  };
