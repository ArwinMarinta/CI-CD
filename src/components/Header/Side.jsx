import { Link } from "react-router-dom";
import { useState } from "react";
import DownIcon from "../../assets/down.svg";

const Side = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleButtonClick = () => {
    setDropDown(!dropDown);
  };

  const handleLinkClick = () => {
    setDropDown(false);
  };

  return (
    <div className="hidden  lg:flex gap-12   flex-col bg-DARKBLUE05 w-[15%] min-h-[100dvh] py-12 font-Montserrat">
      <div className="flex flex-row justify-center text-2xl font-bold ">
        <p className="text-BLUE05">ILearn</p>
        <p className="text-YELLOW05">Tech</p>
      </div>
      <div className="flex flex-col text-base font-semibold text-white font-Montserrat ">
        <Link as={Link} to="/" className="text-start  w-full px-10 py-1 ">
          Dashboard
        </Link>
        <Link
          as={Link}
          to="/data-payment"
          className="text-start  w-full px-10 py-1 mt-2"
        >
          Payment
        </Link>
        <button
          onClick={handleButtonClick}
          className="text-start px-10 py-1 flex flex-row justify-between mt-2"
        >
          <p>Kelola Data</p>
          <img src={DownIcon} alt="Down Icon" />
        </button>
        {dropDown && (
          <div className="flex flex-col text-start text-base w-full px-10 py-1 gap-2">
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
    </div>
  );
};

export default Side;
