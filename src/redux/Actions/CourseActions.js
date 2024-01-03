import axios from "axios";
import { VITE_API_URL } from "../../config/config";
import {
  setCourse,
  setPayment,
  setModules,
  setContents,
  setInstructor,
  setFilter,
  setTotalPage,
  setPage,
} from "../Reducers/CourseReducers";
import { toastify } from "../../utils/toastify";

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
    const pageArray = [];
    for (let index = 1; index <= data.totalPage; index++) {
      pageArray.push(index);
    }
    dispatch(setTotalPage(data.totalPage));
    dispatch(setPage(pageArray));
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
    const pageArray = [];
    for (let index = 1; index <= data.totalPage; index++) {
      pageArray.push(index);
    }
    dispatch(setTotalPage(data.totalPage));
    dispatch(setPage(pageArray));
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
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
  (title, videoUrl, duration, isDemo, moduleId, courseId) =>
  async (_, getState) => {
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
  }
};


export const AddDataInstructor =
  (name, email, password, confPassword, photoInstructor) =>
  async (_, getState) => {
    try {
      let { token } = getState().auth;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confPassword", confPassword);
      formData.append(" photoInstructor", photoInstructor);
      await axios.post(
        `${VITE_API_URL}/auth/instructor/register`,
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
    if (axios.isAxiosError(error)) {
      toastify({
        message: error?.response?.data?.message,
        type: "error",
      });
    }
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
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
    }
  };

export const AddDataPromo =
  (name, discount, expiredAt) => async (_, getState) => {
    try {
      let { token } = getState().auth;
      await axios.post(
        `${VITE_API_URL}/course-promos`,
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

export const deleteDataPromo = (promoId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.delete(`${VITE_API_URL}/course-promos/${promoId}`, {
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



export const confirmCoursePremium = (paymentId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    console.log(token);
    await axios.put(
      `${VITE_API_URL}/orders/confirm/${paymentId}`,
      {},
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



export const changePublish = (published, courseId) => async (_, getState) => {
  try {
    let { token } = getState().auth;
    await axios.put(
      `${VITE_API_URL}/courses/${courseId}/publish`,
      {
        publish: published,
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


