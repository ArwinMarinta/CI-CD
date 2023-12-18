import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import HeadKategori from "../../data/HeadKategori";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getKategori } from "../../redux/Actions/AddCourses";
import AddIcon from "../../assets/add.svg";
import AddCategori from "../../components/Modal/AddCategori";
import { useState } from "react";

const ManageCategory = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);

  const { kategori } = useSelector((state) => state.select);

  useEffect(() => {
    dispatch(getKategori());
  }, [dispatch]);

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    // setCourseId(courseId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    // setCourseId(null);
  };
  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%] mb-14  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-16 mx-auto">
          <div className="flex flex-row justify-between w-full mb-4 items-center">
            <div className="font-bold font-Montserrat text-xl  ">
              Data Kategori Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addCategori")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddCategori
                addCategori={activeModal === "addCategori"}
                setAddCategori={handleCloseModal}
              />
            </div>
          </div>

          <table className="table table-striped w-full text-left">
            <thead className="font-Montserrat text-base">
              <tr>
                {HeadKategori.map((data) => (
                  <th key={data.id} scope="col" className="bg-LightBlue5 py-4">
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left ">
              {kategori.map((data) => (
                <tr
                  key={data.id}
                  className="bg-white border-b font-Montserrat text-xs "
                >
                  <td scope="row" className=" py-4 pl-4">
                    {data.id}
                  </td>
                  <td className=" py-4 ">{data.name ?? "-"}</td>
                  <td className=" py-4 font-bold">
                    <div className="h-20 w-20">
                      <img src={data.urlPhoto ?? "-"} />
                    </div>
                  </td>

                  <td className=" py-4">{data.isPublished ?? "-"}</td>

                  <td className="pr-4">
                    <div className="flex flex-row gap-2 font-bold text-white">
                      <div>
                        <button
                          // onClick={() => handleOpenModal("editeCourse")}
                          className="p-1 bg-DARKBLUE05 rounded-xl "
                        >
                          Ubah
                        </button>
                        {/* <EditeCourse
                          editeCourse={activeModal === "editeCourse"}
                          setEditeCourse={handleCloseModal}
                        /> */}
                      </div>
                      <button className="p-1 bg-red-600 rounded-xl">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <EditeCourse
            editeCourse={activeModal === "editeCourse"}
            setEditeCourse={handleCloseModal}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
