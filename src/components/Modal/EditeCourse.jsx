import { Modal } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getKategori, getLevel, getType } from "../../redux/Actions/AddCourses";
import { getDetailCourse } from "../../redux/Actions/DetailActions";
import { FileInput, Label } from "flowbite-react";
import { getDataInstructor } from "../../redux/Actions/CourseActions";

const EditeCourse = ({ editeCourse, setEditeCourse, id }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [courseCategoryId, setCourseCategoryId] = useState("");
  const [courseTypeId, setCourseTypeId] = useState("");
  const [courseLevelId, setCourseLevelId] = useState("");
  const [price, setPrice] = useState("");
  const [courseInstructorId, setCourseInstructorId] = useState("");
  const [description, setDescription] = useState("");
  const [isPublished, setIsPublished] = useState("");
  const [requirements, setRequirements] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const { kategori, type, level, instructor } = useSelector(
    (state) => state.select
  );
  const { detailCourse } = useSelector((state) => state.detail);

  useEffect(() => {
    id && dispatch(getDetailCourse(id));
    dispatch(getKategori());
    dispatch(getLevel());
    dispatch(getType());
    dispatch(getDataInstructor());
  }, [dispatch, id]);

  useEffect(() => {
    // Assuming editeCourse contains the data you want to edit
    setCourseCategoryId(detailCourse.category || "");
    setCourseTypeId(detailCourse.type || "");
    setCourseLevelId(detailCourse.level || "");
    setCourseImage(detailCourse.imageUrl || "");
    setTitle(detailCourse.title || "");
    setPrice(detailCourse.totalPrice || "");
    setCourseInstructorId(detailCourse.instructor || "");
    setIsPublished(detailCourse.publishedAt || "");
    setRequirements(detailCourse.code || "");
    setDescription(detailCourse.description || "");
  }, [detailCourse]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setCourseImage(selectedFile);
  };

  return (
    <Modal show={editeCourse} onClose={() => setEditeCourse(false)}>
      <Modal.Header>
        <p className="w-full flex justify-center">Ubah Data Kelas</p>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-5">
          <div className="space-y-5">
            <div>
              <div>
                <Label htmlFor="file-upload-helper-text" value="Upload file" />
              </div>
              <FileInput
                id="file-upload-helper-text"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                onChange={handleFileChange}
              />
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
                      value={courseCategoryId}
                      onChange={(e) => setKategoriValue(e.target.value)}
                    >
                      <option value={courseCategoryId} disabled hidden>
                        {courseCategoryId || "Pilih"}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                      value={courseTypeId}
                      onChange={(e) => setCourseTypeId(e.target.value)}
                    >
                      <option disabled hidden value={courseTypeId}>
                        {courseTypeId || "Pilih"}
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
                      value={courseLevelId}
                      onChange={(e) => setCourseLevelId(e.target.value)}
                    >
                      <option value={courseLevelId} disabled hidden>
                        {courseLevelId || "Pilih Kelas"}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Pengajar Kelas
              </label>
              <div className=" w-full">
                <div className=" inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={courseInstructorId}
                      onChange={(e) => setCourseInstructorId(e.target.value)}
                    >
                      <option value={courseInstructorId} disabled hidden>
                        Pilih
                      </option>
                      {instructor &&
                        instructor.map((types) => (
                          <>
                            <option key={types.id} value={types.id}>
                              {types.name}
                            </option>
                          </>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Publish
              </label>
              <div className=" w-full">
                <div className=" inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={isPublished}
                      onChange={(e) => setIsPublished(e.target.value)}
                    >
                      <option value={isPublished} disabled hidden>
                        Pilih
                      </option>
                      <option value={true}>true</option>
                      <option value={false}>false</option>
                    </select>
                  </div>
                </div>
              </div>
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
                onChange={(e) => setRequirements(e.target.value)}
                value={requirements}
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
  id: PropTypes.string,
};

export default EditeCourse;
