import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";

import HeadInstructor from "../../data/HeadInstructor";

import AddIcon from "../../assets/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteDataInstructor,
  getDataInstructor,
} from "../../redux/Actions/CourseActions";
import AddInstructor from "../../components/Modal/AddInstructor";
import EditeInstructor from "../../components/Modal/EditeInstructor";

const ManageInstructor = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [instructorId, setInstructorId] = useState("");

  const { instructor } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getDataInstructor());
  }, [dispatch]);

  const handleDelete = (instructorId) => {
    dispatch(deleteDataInstructor(instructorId));
  };

  const handleOpenModal = (modalType, instructorId) => {
    setActiveModal(modalType);
    setInstructorId(instructorId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setInstructorId(null);
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
            <div className="font-bold font-Montserrat text-xl ">
              Data Pengajar Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addInstructor")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddInstructor
                addInstructors={activeModal === "addInstructor"}
                setAddInstructors={handleCloseModal}
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full ">
            <table className="table table-striped w-full text-left">
              <thead className="font-Montserrat text-base">
                <tr>
                  {HeadInstructor.map((data) => (
                    <th
                      key={data.id}
                      scope="col"
                      className="bg-LightBlue5 py-4 px-2 md:px-4"
                    >
                      {data.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-left ">
                {instructor.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b font-Montserrat text-xs "
                  >
                    <td scope="row" className=" pl-2 md:pl-4">
                      {data.id}
                    </td>
                    <td className=" py-4 px-2 md:px-4">{data.name ?? "-"}</td>
                    <td className=" py-4 px-2 md:px-4">{data.email ?? "-"}</td>
                    <td className=" py-4 font-bold px-2 md:px-4 whitespace-nowrap">
                      <div className="h-20 w-20 lg:h-32 lg:w-32 px-2 md:px-4 whitespace-nowrap flex items-center">
                        <img
                          src={data.photoProfile ?? "-"}
                          className="h-20 w-20 lg:h-32 lg:w-32"
                        />
                      </div>
                    </td>

                    <td className="pr-4 px-2 md:px-4">
                      <div className="flex flex-row gap-2 font-bold text-white">
                        <div>
                          <button
                            onClick={() =>
                              handleOpenModal("editeInstructor", data.id)
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
          </div>
          <EditeInstructor
            editeInstructors={activeModal === "editeInstructor"}
            setEditeInstructors={handleCloseModal}
            instructorId={Number(instructorId)}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageInstructor;
