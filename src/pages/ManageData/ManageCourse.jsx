import Navbar from "../../components/Header/Desktop";
import FilterIcon from "../../assets/Live_Area.svg";
import SearchIcon from "../../assets/search.svg";
import Tabel from "../../data/HeadManage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourse } from "../../redux/Actions/CourseActions";
import AddIcon from "../../assets/add.svg";
import AddCourse from "../../components/Modal/AddCourse";
import EditeCourse from "../../components/Modal/EditeCourse";
import NavDide from "../../components/Header/Side";
import Filter from "../../components/Modal/Filter";
import PromoCourse from "../../components/Modal/PromoCourse";
import DetailCourse from "../../components/Modal/DetailCourse";
import Pagination from "../../components/Pagination";
import Publish from "../../components/Modal/Publish";

const ManageCourse = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [activeModal, setActiveModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [typeCourse, setTypeCourse] = useState([]);
  const [category, setCategory] = useState([]);
  const [save, setSave] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const { courses } = useSelector((state) => state.course);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (save == true) {
      dispatch(getCourse(pageNumber, typeCourse, category));
    }
    if (typeCourse.length == 0 && category.length == 0) {
      dispatch(getCourse(pageNumber));
    }
    if (showModal == true) {
      setSave(false);
    }
  }, [dispatch, pageNumber, typeCourse, category, save, showModal]);

  const handleOpenModal = (modalType, courseId) => {
    setActiveModal(modalType);
    setCourseId(courseId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setCourseId(null);
  };

  return (
    <div className="flex  ">
      <NavDide />
      <div className="w-[100%] lg:w-[85%] mb-14  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col  justify-center items-center container mt-10 mx-auto">
          <div className="font-bold font-Montserrat md:text-xl text-xl w-full mb-2">
            Data Kelas
          </div>

          <div className="flex flex-col md:flex-row mt-2 justify-between w-full mb-4 items-center gap-2">
            <div className="font-bold font-Montserrat text-base items-center w-full  flex flex-row gap-4 text-DARKBLUE05">
              <p>Pages</p>
              <Pagination
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />
            </div>

            <div className="flex flex-row gap-2 justify-start md:justify-end w-full mt-2">
              <div>
                <button
                  onClick={() => handleOpenModal("addCourse")}
                  className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat "
                >
                  <img src={AddIcon} />
                  <p>Tambah</p>
                </button>
                <AddCourse
                  addCourse={activeModal === "addCourse"}
                  setAddCourse={handleCloseModal}
                />
              </div>

              <button
                className="flex flex-row p-[6px] border-[1px] border-DARKBLUE05 rounded-3xl justify-center items-center"
                onClick={() => setShowModal(true)}
              >
                <img src={FilterIcon} />
                <p className="text-base font-Montserrat text-DARKBLUE05 font-bold">
                  Filter
                </p>
              </button>
              <Filter
                showModal={showModal}
                setShowModal={setShowModal}
                setCategory={setCategory}
                setTypeCourse={setTypeCourse}
                category={category}
                typeCourse={typeCourse}
                setSave={setSave}
              />

              <div className="hidden md:block">
                <form className="relative ">
                  <div className="flex flex-row">
                    <input
                      type="search"
                      placeholder="Cari Nama Kelas"
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
              <div className=" none md:hidden">
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
            <table className="table table-striped w-full text-left ">
              <thead className="font-Montserrat text-xs whitespace-nowrap">
                <tr>
                  {Tabel.map((data) => (
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
              <tbody className="text-left text-xs">
                {courses
                  .filter((item) => {
                    if (searchTerm === "") {
                      return item;
                    } else if (
                      item.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((data) => (
                    <tr
                      key={data.id}
                      className="bg-white border-b font-Montserrat  "
                    >
                      <td
                        scope="row"
                        className="  pl-2 md:pl-4 whitespace-nowrap"
                      >
                        {data.code}
                      </td>
                      <td className=" py-4  px-2 md:px-4 whitespace-nowrap">
                        {data.category ?? "-"}
                      </td>
                      <td className=" py-4 font-bold  px-2 md:px-4 whitespace-nowrap">
                        {data.title ?? "-"}
                      </td>
                      <td
                        className={`py-4  px-2 md:px-4 whitespace-nowrap ${
                          data.type === "Free"
                            ? "text-green-500 font-bold"
                            : "text-red-700 font-bold"
                        }`}
                      >
                        {data.type ?? "-"}
                      </td>
                      <td className=" py-4  px-2 md:px-4 whitespace-nowrap">
                        {data.level ?? "-"}
                      </td>
                      <td className=" py-4  px-2 md:px-4 whitespace-nowrap">
                        {data.totalPrice ?? "-"}
                      </td>
                      <td className="pr-4  px-2 md:px-4 whitespace-nowrap">
                        <div className="flex flex-row gap-2 font-bold text-white">
                          <Link
                            as={Link}
                            to={`/manage-modules/${data.id}`}
                            className="p-1 bg-DARKBLUE05 rounded-md "
                          >
                            Kelola
                          </Link>
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
                            onClick={() =>
                              handleOpenModal("detailCourse", data.id)
                            }
                            className="p-1 bg-DARKBLUE05 rounded-md"
                          >
                            Detail
                          </button>
                          <button
                            onClick={() =>
                              handleOpenModal("promoCourse", data.id)
                            }
                            className="p-1 bg-yellow-300 rounded-md"
                          >
                            Promo
                          </button>
                          <button
                            onClick={() => handleOpenModal("Publish")}
                            className="p-1 bg-[#FF5733] rounded-md"
                          >
                            Promo
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <EditeCourse
              editeCourses={activeModal === "editeCourse"}
              setEditeCourses={handleCloseModal}
              id={Number(courseId)}
            />
            <PromoCourse
              promoCourse={activeModal === "promoCourse"}
              setPromoCourse={handleCloseModal}
              courseId={Number(courseId)}
            />
            <DetailCourse
              detailCourses={activeModal === "detailCourse"}
              setDetailCourses={handleCloseModal}
              courseId={courseId}
            />
            <Publish
              publish={activeModal === "Publish"}
              setPublish={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
