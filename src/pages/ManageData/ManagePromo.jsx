import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import HeadPromo from "../../data/HeadPromo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPromo } from "../../redux/Actions/AddCourses";
import AddIcon from "../../assets/add.svg";

const ManagePromo = () => {
  const dispatch = useDispatch();

  const { promo } = useSelector((state) => state.select);

  useEffect(() => {
    dispatch(getPromo());
  }, [dispatch]);
  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%] mb-14  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-16 mx-auto">
          <div className="flex flex-row justify-between w-full mb-4 items-center">
            <div className="text-2xl font-Montserrat font-bold">
              Daftar Promo Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                // onClick={() => handleOpenModal("addCourse")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              {/* <AddCourse
                  addCourse={activeModal === "addCourse"}
                  setAddCourse={handleCloseModal}
                /> */}
            </div>
          </div>

          <table className="table table-striped w-full text-left">
            <thead className="font-Montserrat text-base">
              <tr>
                {HeadPromo.map((data) => (
                  <th key={data.id} scope="col" className="bg-LightBlue5 py-4">
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
                  <td scope="row" className=" py-4 pl-4">
                    {data.id}
                  </td>
                  <td className=" py-4 ">{data.name ?? "-"}</td>
                  <td className=" py-4 font-bold">{data.discount ?? "-"}</td>

                  <td className=" py-4">{data.expiredAt ?? "-"}</td>

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

export default ManagePromo;
