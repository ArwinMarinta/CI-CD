import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";

import AddIcon from "../../assets/add.svg";
import { Link, useParams } from "react-router-dom";
import HeadContent from "../../data/HeadModules";
import AddModule from "../../components/Modal/AddModule";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataModule,
  getModuleById,
} from "../../redux/Actions/CourseActions";
import EditeModule from "../../components/Modal/EditeModule";

const ManageModules = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const [activeModal, setActiveModal] = useState(null);
  const [moduleId, setModuleId] = useState(null);

  const { modules } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getModuleById(courseId));
  }, [dispatch, courseId]);

  const handleOpenModal = (modalType, moduleId) => {
    setActiveModal(modalType);
    setModuleId(moduleId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModuleId(null);
  };

  const handleDelete = (moduleId) => {
    dispatch(deleteDataModule(moduleId));
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
            <div className="font-bold font-Montserrat text-xl  ">
              Data Module Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addModule")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddModule
                addModules={activeModal === "addModule"}
                setAddModule={handleCloseModal}
                courseId={courseId}
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table table-striped w-full text-left">
              <thead className="font-Montserrat text-base whitespace-nowrap">
                <tr>
                  {HeadContent.map((data) => (
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
              <tbody className="text-left  ">
                {modules.map((data) => (
                  <tr
                    key={data.moduleId}
                    className="bg-white border-b font-Montserrat text-xs  "
                  >
                    <td scope="row" className="pl-2 md:pl-4">
                      {data.moduleId}
                    </td>
                    <td className=" py-4 px-2 md:px-4 whitespace-nowrap">
                      {data.title ?? "-"}
                    </td>
                    <td className=" py-4 px-2 md:px-4   whitespace-nowrap">
                      {data.totalContent ?? "-"}
                    </td>

                    <td className="pr-4 whitespace-nowrap px-2 md:px-4">
                      <div className="flex flex-row gap-2 font-bold text-white">
                        <Link
                          as={Link}
                          to={`/manage-content/${courseId}/modules/${data.moduleId}`}
                          className="p-1 bg-DARKBLUE05 rounded-md "
                        >
                          Kelola
                        </Link>
                        <div>
                          <button
                            onClick={() =>
                              handleOpenModal("editeModule", data.moduleId)
                            }
                            className="p-1 bg-DARKBLUE05 rounded-md "
                          >
                            Ubah
                          </button>
                        </div>
                        <button
                          // onClick={() => handleDelete(data.moduleId)}
                          className="p-1 bg-DARKBLUE05 rounded-md"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => handleDelete(data.moduleId)}
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
            <EditeModule
              editeModule={activeModal === "editeModule"}
              setEditeModule={handleCloseModal}
              moduleId={moduleId}
              courseId={courseId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageModules;
