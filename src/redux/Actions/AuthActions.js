import { VITE_API_URL } from "../../config/config";
import { setToken, setUser } from "../Reducers/AuthReducers";
import axios from "axios";
import { toastify } from "../../utils/toastify";

export const login =
  (email, password, setIsLoading, navigate) => async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/auth/admin/login`, {
        email,
        password,
      });
      const { data } = response;
      const { token } = data.value;

      dispatch(setToken(token));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify({
          message: error?.response?.data?.message,
          type: "error",
        });
      }
    }
    setIsLoading(false);
  };

export const getProfile =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      const response = await axios.get(`${VITE_API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.value;
      dispatch(setUser(data));

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // If token is not valid
        if (error.response.status === 401) {
          dispatch(logout());

          if (navigatePathError) navigate(navigatePathError);
          return;
        }
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};
