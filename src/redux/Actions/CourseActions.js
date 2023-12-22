import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setCourse,
  setPayment,
  setModules,
  setContents,
  setInstructor,
} from "../Reducers/CourseReducers";
import { useSelector } from "react-redux";

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

export const getPayment = (pages) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/orders/all?limit=15&page=${pages}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = response;
    dispatch(setPayment(data.value));
  } catch (error) {
    console.log(error);
  }
};

export const addDataCategory =
  (name, isPublished, photoCategory) => async (_, getState) => {
    try {
      let { token } = getState().auth;

      const formData = new FormData();
      formData.append("name", name);
      formData.append("isPublished", isPublished);
      formData.append("photoCategory", photoCategory);
      // console.log(formData);

      console.log(name, isPublished, photoCategory);

      await axios.post(
        `${VITE_API_URL}/course-categories`,

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

      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

export const addDataType = (type) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.post(
      `${VITE_API_URL}/course-types`,
      {
        name: type,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.location.reload();
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

export const addDataContent =
  (title, videoUrl, duration, isDemo, moduleId) => async (_, getState) => {
    try {
      let { token } = getState().auth;
      await axios.post(
        `${VITE_API_URL}/course-contents`,
        {
          title,
          videoUrl,
          duration: Number(duration),
          isDemo: Boolean(isDemo),
          moduleId: Number(moduleId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
      // alert(error?.message);
    }
  };

export const addDataModule = (title, courseId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.post(
      `${VITE_API_URL}/course-modules`,
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
    alert(error.message);
  }
};

export const deleteDataModule = (moduleId) => async (_, getState) => {
  try {
    console.log(moduleId);
    let { token } = getState().auth;
    await axios.delete(
      `${VITE_API_URL}/course-modules/${moduleId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.location.reload();
  } catch (error) {
    // alert(error?.message);
    console.log(error.message);
  }
};

export const deleteDataType = (typeId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-types/${typeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

export const AddDataLevel = (name) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.post(
      `${VITE_API_URL}/course-levels`,
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

export const deleteDataLevel = (levelId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-levels/${levelId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataInstructor = () => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(`${VITE_API_URL}/course-instructors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response;
    dispatch(setInstructor(data.value));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDataInstructor = (instructorId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-instructors/${instructorId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

export const AddDataInstructor = (name) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.post(
      `${VITE_API_URL}/course-instructors`,
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

export const deleteDataCategory = (categoryId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const addDataCourse =
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
    requirements
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
      formData.append(" requirements", requirements);

      console.log(courseImage);
      await axios.post(
        `${VITE_API_URL}/courses`,
        {
          title,
          courseCategoryId,
          courseTypeId,
          courseLevelId,
          price,
          courseInstructorId,
          description,
          isPublished,
          courseImage,
          requirements,
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
      console.log(error);
    }
  };
