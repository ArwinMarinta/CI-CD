import Navbar from "../../components/Header/Desktop";
import FilterIcon from "../../assets/Live_Area.svg";
import SearchIcon from "../../assets/search.svg";
import Tabel from "../../data/HeadTabel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmCoursePremium,
  getPayment,
} from "../../redux/Actions/CourseActions";
import NavSide from "../../components/Header/Side";
import FilterPayment from "../../components/Modal/FilterPayment";
import Pagination from "../../components/Pagination";

const StatusPayment = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const { payment } = useSelector((state) => state.course);
  const [save, setSave] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  useEffect(() => {
    if (status.length === 0) {
      dispatch(getPayment(pageNumber));
    }
    if (save === true) {
      dispatch(getPayment(pageNumber, status));
      // console.log("berhasil");
    }
    if (showModal === true) {
      setSave(false);
    }
  }, [dispatch, pageNumber, status, showModal]);



  const handleConfirm = (paymentId) => {
    // console.log(paymentId);
    dispatch(confirmCoursePremium(paymentId));
  };



  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%]   ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-10 mx-auto w-full ">
          <div className="font-bold font-Montserrat text-xl flex w-full text-start ">
            Status Pembayaran
          </div>

          <div className="flex flex-row gap-3 justify-between w-full  mb-4 items-center mt-5">
            <div className="font-bold font-Montserrat text-base items-center w-auto flex flex-row gap-4 text-DARKBLUE05">
              <p>Pages</p>

              <Pagination
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />
            </div>

            <div className="flex flex-row gap-2">
              <button
                className="flex flex-row p-[6px] border-[1px] border-DARKBLUE05 rounded-3xl justify-center items-center"
                onClick={() => setShowModal(true)}
              >
                <img src={FilterIcon} />
                <p className="text-base font-Montserrat text-DARKBLUE05 font-bold">
                  Filter
                </p>
              </button>
              <FilterPayment
                showModal={showModal}
                setShowModal={setShowModal}
                setSave={setSave}
                setStatus={setStatus}
                status={status}
              />
              <div className="hidden sm:block">
                <form className="relative">
                  <div className="flex flex-row">
                    <input
                      type="search"
                      placeholder="Cari Pembayaran"
                      className="w-full outline-none  px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
                      value={searchTerm}
                      onChange={handleInputChange}
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
              <div className="sm:hidden">
                <button
                  onClick={() => setOpenSearch(openSearch ? false : true)}
                  className=" rounded-lg bg-[#6148FF] p-2"
                >
                  <img src={SearchIcon} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-full ${openSearch ? "block" : "hidden"} sm:hidden`}
          >
            <div className="w-full">
              <form className="relative w-full mb-4">
                <div className="flex flex-row">
                  <input
                    type="search"
                    placeholder="Cari Pembayaran"
                    className="w-full outline-none  px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
                    value={searchTerm}
                    onChange={handleInputChange}
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
            <table className="table table-striped w-full text-left">
              <thead className="font-Montserrat text-base text-left whitespace-nowrap">
                <tr>
                  {Tabel.map((data) => (
                    <th
                      key={data.id}
                      scope="row"
                      className="bg-LightBlue5 py-4 px-2 md:px-4"
                    >
                      {data.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-left overflow-y-auto">
                {payment
                  .filter((item) => {
                    if (searchTerm === "") {
                      return item;
                    } else if (
                      item.paymentMethod
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((data) => (
                    <tr


                      key={data.orderId}
                      className="bg-white border-b font-Montserrat text-xs "
                    >
                      <td
                        scope="row"
                        className=" pl-2 md:pl-4 whitespace-nowrap "
                      >
                        {data.orderId}
                      </td>
                      <td className="  py-4  px-2 md:px-4 whitespace-nowrap ">
                        {data.username ?? "-"}
                      </td>
                      <td className=" py-4 font-bold   px-2 md:px-4 whitespace-nowrap">
                        {data.courseName ?? "-"}
                      </td>
                      <td
                        className={`py-4   px-2 md:px-4 whitespace-nowrap ${
                          data.orderStatus === "Success"


                            ? "text-green-500 font-bold"
                            : "text-red-700 font-bold"
                        }`}
                      >


                        {data.orderStatus ?? "-"}
                      </td>
                      <td className="  py-4  px-2 md:px-4 whitespace-nowrap">
                        {data.paymentMethod ?? "-"}
                      </td>
                      <td className=" pr-4  px-2 md:px-4 whitespace-nowrap">
                        {new Date(data.orderAt).toLocaleString() ?? "-"}
                      </td>
                      <td className="pr-4 px-2 md:px-4 ">
                        <div className="flex flex-row gap-2 font-bold text-white">
                          {data.orderStatus === "Pending" ? (
                            <div>
                              <button
                                onClick={() => handleConfirm(data.orderId)}
                                className="p-1 bg-DARKBLUE05 rounded-md "
                              >
                                Confirm
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </td>


                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPayment;
