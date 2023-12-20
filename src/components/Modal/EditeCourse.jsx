import { Modal } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getKategori, getLevel, getType } from "../../redux/Actions/AddCourses";
import { getDetailCourse } from "../../redux/Actions/DetailActions";

const EditeCourse = ({ editeCourse, setEditeCourse, id }) => {
  const dispatch = useDispatch();
  const [kategoriValue, setKategoriValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [levelValue, setLevelValue] = useState("");
  const [picture, setPicture] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [instructorValue, setInstructorValue] = useState("");
  const [publishValue, setPublishValue] = useState("");
  const [ditujukan, setDitujukan] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const fileInputRef = useRef(null);

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const { kategori, type, level } = useSelector((state) => state.select);
  const { detailCourse } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getKategori());
    dispatch(getLevel());
    dispatch(getType());
    dispatch(getDetailCourse(id));
  }, [dispatch, id]);

  useEffect(() => {
    // Assuming editeCourse contains the data you want to edit
    setKategoriValue(detailCourse.category || "");
    setTypeValue(detailCourse.type || "");
    setLevelValue(detailCourse.level || "");
    setPicture(detailCourse.imageUrl || "");
    setTitleValue(detailCourse.title || "");
    setPriceValue(detailCourse.totalPrice || "");
    setInstructorValue(detailCourse.instructor || "");
    setPublishValue(detailCourse.publishedAt || "");
    setDitujukan(detailCourse.code || "");
    setDescriptions(detailCourse.description || "");
  }, [detailCourse]);

  return (
    <Modal show={editeCourse} onClose={() => setEditeCourse(false)}>
      <Modal.Header>
        <p className="w-full flex justify-center">Edite Kelas</p>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-5">
          {/* <div className="w-full text-center font-Montserrat text-xl font-bold relative">
            <p>Tambah Kelas</p>
            <button
              onClick={() => setAddCourse(false)}
              className="absolute top-0 right-0 p-1 border-2 border-"
            >
              <img src={ExitIcon} alt="Exit Icon" />
            </button>
          </div> */}
          <div className="space-y-5">
            <div className="flex flex-col ">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Gambar Course
              </label>
              <div className="relative border w-full py-1 px-4 rounded-2xl overflow-hidden  flex flex-row">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                  className="hidden"
                  ref={fileInputRef}
                />
                <button
                  className="bg-NEUTRAL04 text-white text-sm px-4 py-2 rounded-md whitespace-nowrap overflow-hidden"
                  onClick={handleChooseFileClick}
                >
                  Choose File
                </button>
                <span className="ml-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis w-full">
                  {picture}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Kategori
              </label>
              <div className=" w-full">
                <div className=" inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={kategoriValue}
                      onChange={(e) => setKategoriValue(e.target.value)}
                    >
                      <option value={kategoriValue} disabled hidden>
                        {kategoriValue || "Pilih"}
                      </option>
                      {kategori &&
                        kategori.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Judul Kelas
              </label>
              <input
                type="text"
                className="border w-full py-3 px-4 rounded-2xl"
                placeholder="Text"
                value={titleValue}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Type Kelas
              </label>
              <div className="w-full">
                <div className="inset-y-0 right-0 flex items-center w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                      value={typeValue}
                      onChange={(e) => setTypeValue(e.target.value)}
                    >
                      <option disabled hidden value={typeValue}>
                        {typeValue || "Pilih"}
                      </option>
                      {type &&
                        type.map((types) => (
                          <option key={types.id} value={types.id}>
                            {types.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Level Kelas
              </label>
              <div className=" w-full">
                <div className=" inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={levelValue}
                      onChange={(e) => setLevelValue(e.target.value)}
                    >
                      <option value={levelValue} disabled hidden>
                        {levelValue || "Pilih Kelas"}
                      </option>
                      {level &&
                        level.map((levels) => (
                          <option key={levels.id} value={levels.id}>
                            {levels.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Harga Kelas
              </label>
              <input
                type="Text"
                className="border w-full py-3 px-4 rounded-2xl"
                placeholder="Number"
                value={priceValue}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Instructor Kelas
              </label>
              <input
                type="text"
                className="border w-full py-3 px-4 rounded-2xl"
                placeholder="Number"
                value={instructorValue}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Publish
              </label>
              <input
                type="text"
                className="border w-full py-3 px-4 rounded-2xl"
                placeholder="Boolean"
                value={publishValue}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Ditujukan Untuk
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="2"
                cols="20"
                className="rounded-2xl"
                value={ditujukan}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Deskripsi Kelas
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                cols="50"
                className="rounded-2xl"
                value={descriptions}
              ></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

EditeCourse.propTypes = {
  editeCourse: PropTypes.bool,
  setEditeCourse: PropTypes.func,
  id: PropTypes.number,
};

export default EditeCourse;
