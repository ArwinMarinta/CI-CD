// import Search from "../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import HamburgerIcon from "../../assets/hamburger.svg";
import { useEffect, useState } from "react";
import { getProfile, logout } from "../../redux/Actions/AuthActions";
import LeaveIcon from "../../assets/leave.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DownIcon from "../../assets/down.svg";
import { IoClose } from "react-icons/io5";
const Desktop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

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

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = () => {
    setDropDown(!dropDown);
  };

  const handleLinkClick = () => {
    setDropDown(false);
  };

  return (
    <nav className="w-full shadow-xl">
      <div className="w-full mx-auto py-6 bg-LightBlue5 flex justify-center">
        <div className="flex flex-row justify-between container items-center">
          <div className="flex items-center font-Montserrat text-2xl text-DARKBLUE05 font-bold gap-2">
            Hi <p>{user?.name}</p>
          </div>
          <button className="lg:hidden" onClick={handleToggleSidebar}>
            <img src={HamburgerIcon} alt="Hamburger Icon" />
          </button>
          <div className="hidden lg:block">
            <button
              onClick={handleLogout}
              className="flex flex-row font-Montserrat font-semibold gap-1"
            >
              <img src={LeaveIcon} />
              <p>Keluar</p>
            </button>
          </div>
          {/* Sidebar Content */}
          <div
            className={`lg:hidden lg:w-1/2 h-full  ${
              isSidebarOpen ? "block" : "hidden"
            } fixed top-0 right-0  bg-LightBlue4 z-50 p-8 shadow-md`}
          >
            <div className="flex flex-col gap-6 w-full ">
              <div>
                <button
                  onClick={handleToggleSidebar}
                  className="flex flex-row justify-between font-Montserrat font-bold gap-1 text-black"
                >
                  <div className="flex flex-row">
                    <p className="text-BLUE05">ILearn</p>
                    <p className="text-YELLOW05">Tech</p>
                  </div>

                  <IoClose className="text-2xl bg-LightBlue5 rounded-md" />
                </button>
              </div>
              <div className="flex flex-col text-base font-semibold text-white font-Montserrat ">
                <Link as={Link} to="/" className="text-start  w-full  py-1 ">
                  Dashboard
                </Link>
                <Link
                  as={Link}
                  to="/data-payment"
                  className="text-start  w-full  py-1 mt-2"
                >
                  Payment
                </Link>
                <button
                  onClick={handleButtonClick}
                  className="text-start py-1 flex flex-row justify-between mt-2"
                >
                  <p>Kelola Data</p>
                  <img src={DownIcon} alt="Down Icon" />
                </button>
                {dropDown && (
                  <div className="flex flex-col text-start text-base w-full  py-1 gap-2">
                    <Link to="/manage-course" onClick={handleLinkClick}>
                      Data Kelas
                    </Link>
                    <Link to="/manage-category" onClick={handleLinkClick}>
                      Data Kategori
                    </Link>
                    <Link to="/manage-promo" onClick={handleLinkClick}>
                      Data Promo
                    </Link>
                    <Link to="/manage-type" onClick={handleLinkClick}>
                      Data Type
                    </Link>
                    <Link to="/manage-level" onClick={handleLinkClick}>
                      Data Level
                    </Link>
                    <Link to="/manage-instructor" onClick={handleLinkClick}>
                      Data Instructor
                    </Link>
                  </div>
                )}
              </div>
              <div className="none lg:hidden absolute bottom-10">
                <button
                  onClick={handleLogout}
                  className="flex flex-row font-Montserrat font-semibold gap-1"
                >
                  <img src={LeaveIcon} />
                  <p className="text-RED05">Keluar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Desktop;
