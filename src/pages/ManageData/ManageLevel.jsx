import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import HeadType from "../../data/HeadType";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLevel } from "../../redux/Actions/AddCourses";
import AddIcon from "../../assets/add.svg";
import AddLevel from "../../components/Modal/AddLevel";
import { deleteDataLevel } from "../../redux/Actions/CourseActions";
import EditeLevel from "../../components/Modal/EditeLevel";

const ManageLevel = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [levelId, setLevelId] = useState();

  const { level } = useSelector((state) => state.select);

  useEffect(() => {
    dispatch(getLevel());
  }, [dispatch]);

  const handleOpenModal = (modalType, levelId) => {
    setActiveModal(modalType);
    setLevelId(levelId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setLevelId(null);
  };

  const handleClick = (levelId) => {
    dispatch(deleteDataLevel(levelId));
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
              Data Level Kelas
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addLevel")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddLevel
                addLevel={activeModal === "addLevel"}
                setAddLevel={handleCloseModal}
              />
            </div>
          </div>

          <table className="table table-striped w-full text-left">
            <thead className="font-Montserrat text-base">
              <tr>
                {HeadType.map((data) => (
                  <th key={data.id} scope="col" className="bg-LightBlue5 py-4">
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left ">
              {level.map((data) => (
                <tr
                  key={data.id}
                  className="bg-white border-b font-Montserrat text-xs "
                >
                  <td scope="row" className=" py-4 pl-4">
                    {data.id}
                  </td>
                  <td className=" py-4 ">{data.name ?? "-"}</td>

                  <td className="pr-4">
                    <div className="flex flex-row gap-2 font-bold text-white">
                      <div>
                        <button
                          onClick={() => handleOpenModal("editeLevel", data.id)}
                          className="p-1 bg-DARKBLUE05 rounded-xl "
                        >
                          Ubah
                        </button>
                      </div>
                      <button
                        onClick={() => handleClick(data.id)}
                        className="p-1 bg-red-600 rounded-xl"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <EditeLevel
            editeLevels={activeModal === "editeLevel"}
            setEditeLevels={handleCloseModal}
            levelId={levelId}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageLevel;
