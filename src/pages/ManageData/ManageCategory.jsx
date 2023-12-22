import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import HeadKategori from "../../data/HeadKategori";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getKategori } from "../../redux/Actions/AddCourses";
import AddIcon from "../../assets/add.svg";
import AddCategori from "../../components/Modal/AddCategori";
import { useState } from "react";
import { deleteDataCategory } from "../../redux/Actions/CourseActions";
import EditeCategory from "../../components/Modal/EditeCategory";

const ManageCategory = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const { kategori } = useSelector((state) => state.select);

  useEffect(() => {
    dispatch(getKategori());
  }, [dispatch]);

  const handleOpenModal = (modalType, categoryId) => {
    setActiveModal(modalType);
    setCategoryId(categoryId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setCategoryId(null);
  };

  const handleClick = (categoryId) => {
    dispatch(deleteDataCategory(categoryId));
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

          <div className="overflow-x-auto w-full">
            <table className="table table-striped w-full text-left">
              <thead className="font-Montserrat text-base whitespace-nowrap">
                <tr>
                  {HeadKategori.map((data) => (
                    <th
                      key={data.id}
                      scope="col"
                      className="bg-LightBlue5 py-4 px-2 md:px-4 "
                    >
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
                    <td scope="row" className=" pl-2 md:pl-4">
                      {data.id}
                    </td>
                    <td className=" py-4 px-2 md:px-4 whitespace-nowrap ">
                      {data.name ?? "-"}
                    </td>
                    <td className=" py-4 font-bold px-2 md:px-4 whitespace-nowrap">
                      <div className="h-20 w-20 lg:h-32 lg:w-32 px-2 md:px-4 whitespace-nowrap flex items-center">
                        <img src={data.urlPhoto ?? "-"} />
                      </div>
                    </td>

                    <td className=" py-4 px-2 md:px-4 whitespace-nowrap">
                      {data.isPublished.toString() ?? "-"}
                    </td>

                    <td className="pr-4 px-2 md:px-4 whitespace-nowrap">
                      <div className="flex flex-row gap-2 font-bold text-white">
                        <div>
                          <button
                            onClick={() =>
                              handleOpenModal("editeCategory", data.id)
                            }
                            className="p-1 bg-DARKBLUE05 rounded-md "
                          >
                            Ubah
                          </button>
                        </div>
                        <button
                          onClick={() => handleClick(data.id)}
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
            <EditeCategory
              editeCategorys={activeModal === "editeCategory"}
              setEditeCategorys={handleCloseModal}
              categoryId={categoryId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
