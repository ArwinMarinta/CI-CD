import Navbar from "../../components/Header/Desktop";
import Data from "../../data/InfoData";
import User from "../../assets/user.svg";
import NavSide from "../../components/Header/Side";

const Dashboard = () => {
  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%]   ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-16 mx-auto w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-between mb-14  gap-5">
            {Data.map((datas) => (
              <div key={datas.id} className="w-full">
                <div
                  className={`flex flex-row p-6  gap-6  rounded-2xl    ${
                    datas.Keterangan === "Active User"
                      ? "bg-DARKBLUE03  w-full"
                      : datas.Keterangan === "Active Class"
                      ? "bg-green-500  w-full"
                      : datas.Keterangan === "Premium Class"
                      ? "bg-DARKBLUE05  w-full"
                      : ""
                  }`}
                >
                  <div className="bg-white flex items-center px-2 rounded-2xl ">
                    <img src={User} />
                  </div>
                  <div className="font-Montserrat text-white ">
                    <div className="font-normal text-2xl">{datas.total}</div>
                    <div className="font-bold text-2xl">{datas.Keterangan}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
