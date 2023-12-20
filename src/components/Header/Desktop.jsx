// import Search from "../assets/search.svg";
import HamburgerIcon from "../../assets/hamburger.svg";

const Desktop = () => {
  return (
    <nav className=" w-full shadow-xl">
      <div className=" w-full mx-auto py-6 bg-LightBlue5  flex justify-center">
        <div className="flex flex-row justify-between container items-center">
          <div className="flex items-center font-Montserrat text-2xl text-DARKBLUE05 font-bold">
            Hi Admin!
          </div>
          <button className=" lg:hidden">
            <img src={HamburgerIcon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Desktop;
