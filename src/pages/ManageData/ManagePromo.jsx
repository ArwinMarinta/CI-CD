import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import HeadPromo from "../../data/HeadPromo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPromo } from "../../redux/Actions/AddCourses";
import AddIcon from "../../assets/add.svg";
import AddPromo from "../../components/Modal/AddPromo";
import EditePromo from "../../components/Modal/EditePromo";
import { deleteDataPromo } from "../../redux/Actions/CourseActions";

const ManagePromo = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [promoId, setPromoId] = useState();
  const { promo } = useSelector((state) => state.select);

  useEffect(() => {
    dispatch(getPromo());
  }, [dispatch]);

  const handleCloseModal = () => {
    setActiveModal(null);
    setPromoId(null);
  };

  const handleOpenModal = (modalType, promoId) => {
    setActiveModal(modalType);
    setPromoId(promoId);
  };

  const handleDelete = (promoId) => {
    dispatch(deleteDataPromo(promoId));
  };
  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%] mb-14  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-10 mx-auto">
          <div className="flex flex-row justify-between w-full mb-4 items-center">
            <div className="text-2xl font-Montserrat font-bold">
              Promo Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addPromo")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddPromo
                addPromo={activeModal === "addPromo"}
                setAddPromo={handleCloseModal}
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table table-striped w-full text-left">
              <thead className="font-Montserrat text-base whitespace-nowrap">
                <tr>
                  {HeadPromo.map((data) => (
                    <th
                      key={data.id}
                      scope="row"
                      className="bg-LightBlue5 py-4  px-2 md:px-4"
                    >
                      {data.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-left ">
                {promo.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b font-Montserrat text-xs "
                  >
                    <td scope="row" className=" pl-2 md:pl-4">
                      {data.id}
                    </td>
                    <td className=" py-4 px-2 md:px-4 whitespace-nowrap">
                      {data.name ?? "-"}
                    </td>
                    <td className=" py-4  px-2 md:px-4 font-bold">
                      {data.discount ?? "-"}
                    </td>

                    <td className=" py-4 px-2 md:px-4 whitespace-nowrap">
                      {data.expiredAt ?? "-"}
                    </td>

                    <td className="pr-4 whitespace-nowrap px-2 md:px-4">
                      <div className="flex flex-row gap-2 font-bold text-white">
                        <div>
                          <button
                            onClick={() =>
                              handleOpenModal("editeCourse", data.id)
                            }
                            className="p-1 bg-DARKBLUE05 rounded-md "
                          >
                            Ubah
                          </button>
                        </div>
                        <button
                          onClick={() => handleDelete(data.id)}
                          className="p-1 bg-red-600 rounded-md"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <EditePromo
              editePromos={activeModal === "editeCourse"}
              setEditePromos={handleCloseModal}
              promoId={promoId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePromo;
