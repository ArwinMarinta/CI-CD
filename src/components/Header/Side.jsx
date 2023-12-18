import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import DownIcon from "../../assets/down.svg";

const Side = () => {
  const [dropDown, setDropDown] = useState(false);
  //   const [arrowRotation, setArrowRotation] = useState(false);

  //   const toggleDropDown = () => {
  //     setDropDown(!dropDown);
  //     setArrowRotation(arrowRotation ? "rotate-0" : "rotate-180");
  //   };

  return (
    <div className="hidden  lg:flex gap-12   flex-col bg-DARKBLUE05 w-[15%] min-h-[100dvh] py-12 font-Montserrat">
      <div className="flex flex-row justify-center ">
        <SiCodechef className="text-4xl" />
        <p className="text-2xl font-bold">iLearnTech</p>
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
          onClick={() => setDropDown(!dropDown)}
          //   as={Link}
          //   to="/manage-course"
          className="text-start px-10 py-1 flex flex-row justify-between mt-2"
        >
          <p>Kelola Data</p>
          <img src={DownIcon} />
        </button>
        {dropDown && (
          <div className="flex flex-col text-start text-base w-full px-10 py-1 gap-2 ">
            <Link as={Link} to="/manage-course">
              Data Kelas
            </Link>
            <Link as={Link} to="/manage-category">
              Data Kategori
            </Link>
            <Link as={Link} to="/manage-promo">
              Data Promo
            </Link>
            <Link as={Link} to="/manage-type">
              Data Type
            </Link>
            <Link as={Link} to="/manage-level">
              Data Level
            </Link>
            <Link as={Link} to="/manage-level">
              Data Instructor
            </Link>
          </div>
        )}

        <button className="text-start px-10 py-1">Keluar</button>
      </div>
    </div>
  );
};

export default Side;
