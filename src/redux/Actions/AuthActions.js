import { VITE_API_URL } from "../../config/config";
import { setToken } from "../Reducers/AuthReducers";
import axios from "axios";

export const login =
  (email, password, setIsLoading, navigate) => async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/auth/login-admin`, {
        email,
        password,
      });
      const { data } = response;
      const { token } = data.value;

      dispatch(setToken(token));
      navigate("/");

      // setAlert(data.message);
      // setAlertStatus(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // if (
        //   error.response.data.message ===
        //   "Akun belum terverifikasi. Periksa email masuk untuk verifikasi kode Otp"
        // ) {
        //   navigate("/otp");
        // } else {
        //   setAlert(error.response.data.message);
        //   // setAlertStatus(false);
        // }

        console.log(error);
      }
    }
    setIsLoading(false);
  };
