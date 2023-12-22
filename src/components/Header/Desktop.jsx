// import Search from "../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import HamburgerIcon from "../../assets/hamburger.svg";
import { useEffect } from "react";
import { getProfile, logout } from "../../redux/Actions/AuthActions";
import LeaveIcon from "../../assets/leave.svg";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getProfile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className=" w-full shadow-xl">
      <div className=" w-full mx-auto py-6 bg-LightBlue5  flex justify-center">
        <div className="flex flex-row justify-between container items-center">
          <div className="flex items-center font-Montserrat text-2xl text-DARKBLUE05 font-bold gap-2">
            Hi <p>{user?.name}</p>
          </div>
          <button className=" lg:hidden">
            <img src={HamburgerIcon} />
          </button>
          <div className="hidden lg:block">
            <button
              onClick={handleLogout}
              className="flex flex-row font-Montserrat font-bold gap-1 text-DARKBLUE05"
            >
              <img src={LeaveIcon} />
              <p>Keluar</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Desktop;
