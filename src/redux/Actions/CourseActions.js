import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setCourse,
  setPayment,
  setModules,
  setContents,
  setFilter,
} from "../Reducers/CourseReducers";

export const getCourse = (pages, typeCourse, category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/courses?limit=20&page=${pages}`,
      {
        params: {
          category: category,
          type: typeCourse,
        },
      }
    );

    const { data } = response;
    dispatch(setCourse(data.value));
  } catch (error) {
    console.log(error);
  }
};

export const getPayment = (pages, status) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${VITE_API_URL}/orders/all?limit=15&page=${pages}&status=${status}`,
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
export const filterData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/course-categories`);
    const { data } = response;
    dispatch(setFilter(data.value));
  } catch (error) {
    alert(error?.message);
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
