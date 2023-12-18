import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import FilterIcon from "../../assets/Live_Area.svg";
import SearchIcon from "../../assets/search.svg";
import AddIcon from "../../assets/add.svg";
import { Link, useParams } from "react-router-dom";
import HeadContent from "../../data/HeadModules";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModuleById } from "../../redux/Actions/CourseActions";

const ManageContent = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  // const [activeModal, setActiveModal] = useState(null);

  const { modules } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getModuleById(courseId));
  }, [dispatch]);

  // const handleOpenModal = (modalType) => {
  //   setActiveModal(modalType);
  // };

  // const handleCloseModal = () => {
  //   setActiveModal(null);
  // };
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
              Data Module Kelas
            </div>
            <div className="flex flex-row gap-3">
              <div>
                <button
                  // onClick={() => handleOpenModal("addCategori")}
                  className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
                >
                  <img src={AddIcon} />
                  <p>Tambah</p>
                </button>
                {/* <AddContent
                  addContent={activeModal === "addContent"}
                  setAddContent={handleCloseModal}
                /> */}
              </div>

              <button className="flex flex-row p-[6px] border-[1px] border-DARKBLUE05 rounded-3xl justify-center items-center">
                <img src={FilterIcon} />
                <p className="text-base font-Montserrat text-DARKBLUE05 font-bold">
                  Filter
                </p>
              </button>
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

          <table className="table table-striped w-full text-left">
            <thead className="font-Montserrat text-base">
              <tr>
                {HeadContent.map((data) => (
                  <th key={data.id} scope="col" className="bg-LightBlue5 py-4">
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-left ">
              {modules.map((data) => (
                <tr
                  key={data.id}
                  className="bg-white border-b font-Montserrat text-xs "
                >
                  <td scope="row" className=" py-4 pl-4">
                    {data.id}
                  </td>
                  <td className=" py-4 ">{data.title ?? "-"}</td>

                  <td className="pr-4">
                    <div className="flex flex-row gap-2 font-bold text-white">
                      <Link
                        as={Link}
                        to={`/manage-content/${courseId}/modules/${data.id}`}
                        className="p-1 bg-DARKBLUE05 rounded-xl "
                      >
                        Kelola
                      </Link>
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

export default ManageContent;
