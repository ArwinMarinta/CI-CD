import { toast } from "react-toastify";

export const toastify = ({ message, type }) => {
  toast[type](message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
};
