import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/Actions/AuthActions";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(navigate, null, "/login"));
  }, [dispatch, navigate]);

  return children;
};

export default Protected;
