import Navbar from "../../components/Header/Desktop";

import FilterIcon from "../../assets/Live_Area.svg";
import SearchIcon from "../../assets/search.svg";
// import AdminSearch from "../../assets/search_admin.svg";
// import Payment from "../../data/StatusPembayaran";
import Tabel from "../../data/HeadTabel";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../redux/Actions/CourseActions";
import NavSide from "../../components/Header/Side";
import Filter from "../../components/Modal/Filter";

const StatusPayment = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const { payment } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getPayment(pages));
  }, [dispatch, pages]);

  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%]   ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-16 mx-auto w-full ">
          <div className="font-bold font-Montserrat text-xl flex w-full text-start ">
            Status Pembayaran
          </div>
          <div className="flex flex-row justify-between w-full mb-4 items-center">
            <div className="font-bold font-Montserrat text-base  flex flex-row gap-4 text-DARKBLUE05">
              <p>Pages</p>
              <input
                type="number"
                className="border-2 w-14 border-black rounded-lg text-center text-base overflow-hidden"
                min="1"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-3">
              <button
                className="flex flex-row p-[6px] border-[1px] border-DARKBLUE05 rounded-3xl justify-center items-center"
                onClick={() => setShowModal(true)}
              >
                <img src={FilterIcon} />
                <p className="text-base font-Montserrat text-DARKBLUE05 font-bold">
                  Filter
                </p>
              </button>
              <Filter showModal={showModal} setShowModal={setShowModal} />
              <form className="relative">
                <div className="flex flex-row">
                  <input
                    type="search"
                    placeholder="Cari"
                    className="w-full outline-none  px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
                    //   value={searchTerm}
                    //   onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-lg bg-[#6148FF] p-[2px]"
                  >
                    <img src={SearchIcon} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto w-full ">
            <table className="table table-striped w-full text-left ">
              <thead className="font-Montserrat text-base text-left">
                <tr>
                  {Tabel.map((data) => (
                    <th
                      key={data.id}
                      scope="col"
                      className="bg-LightBlue5 py-4"
                    >
                      {data.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-left overflow-y-auto">
                {payment.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b font-Montserrat text-xs "
                  >
                    <td scope="row" className=" py-4 pl-4 ">
                      {data.id}
                    </td>
                    <td className=" py-4 ">{data.Kategori ?? "-"}</td>
                    <td className=" py-4 font-bold">
                      {data.KelasPremium ?? "-"}
                    </td>
                    <td
                      className={`py-4 ${
                        data.status === "Success"
                          ? "text-green-500 font-bold"
                          : "text-red-700 font-bold"
                      }`}
                    >
                      {data.status ?? "-"}
                    </td>
                    <td className=" py-4">{data.paymentMethod ?? "-"}</td>
                    <td className=" py-4 pr-4">{data.createdAt ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default StatusPayment;
