import { Button, Modal } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getKategori, getLevel, getType } from "../../redux/Actions/AddCourses";
import {
  getDetailCourse,
  updateDataCourse,
} from "../../redux/Actions/DetailActions";
import { FileInput, Label } from "flowbite-react";
import { getDataInstructor } from "../../redux/Actions/CourseActions";

const EditeCourse = ({ editeCourses, setEditeCourses, id }) => {
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
  const [requirement, setRequirement] = useState("");
  
  const { kategori, type, level, instructor } = useSelector(
    (state) => state.select
  );
  const { editeCourse } = useSelector((state) => state.edite);

  useEffect(() => {
    id && dispatch(getDetailCourse(id));
    dispatch(getKategori());
    dispatch(getLevel());
    dispatch(getType());

    if (id) {
      dispatch(getDetailCourse(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setCourseCategoryId(editeCourse.categoryId || "");
    setCourseTypeId(editeCourse.typeId || "");
    setCourseLevelId(editeCourse.levelId || "");
    setCourseImage(editeCourse.imageUrl || "");
    setTitle(editeCourse.title || "");
    setPrice(editeCourse.totalPrice || "");
    setCourseInstructorId(editeCourse.instructorId || "");
    setIsPublished(editeCourse.isPublished || "");
    setRequirements(editeCourse?.requirements || "");
    setDescription(editeCourse.description || "");
  }, [editeCourse]);

  const requirementValues = (requirements) => {
    // Check if requirements is an array
    if (!Array.isArray(requirements) || requirements.length === 0) {
      return "";
    }

    // Use map function on the array to get an array of requirement values
    const requirementValuesArray = requirements.map((req) => req.requirement);

    // Use join function to concatenate the array elements into a single string
    const concatenatedString = requirementValuesArray.join("\n");

    return concatenatedString;
  };

  useEffect(() => {
    setRequirement(requirementValues(requirements));
  }, [requirements]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setCourseImage(selectedFile);
  };

  const handleChange = () => {
    dispatch(
      updateDataCourse(
        title,
        courseCategoryId,
        courseTypeId,
        courseLevelId,
        price,
        courseInstructorId,
        description,
        isPublished,
        courseImage,

        requirement,

        id
      )
    );
  };

  return (
    <Modal show={editeCourses} onClose={() => setEditeCourses(false)}>
      <>
        <Modal.Header>
          <p className="w-full flex justify-center">Ubah Data Kelas</p>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-5">
            <div className="space-y-5">
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
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
                        value={courseCategoryId}
                        className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                        onChange={(e) => setCourseCategoryId(e.target.value)}
                      >
                        <option value="" disabled hidden>
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
                        value={courseTypeId}
                        className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                        onChange={(e) => setCourseTypeId(e.target.value)}
                      >
                        <option value="" disabled hidden>
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
                        value={courseLevelId}
                        className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                        onChange={(e) => setCourseLevelId(e.target.value)}
                      >
                        <option value="" disabled hidden>
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
                        value={courseInstructorId}
                        className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                        onChange={(e) => setCourseInstructorId(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          {courseInstructorId || "pilih Pengajar"}
                        </option>
                        {instructor &&
                          instructor.map((types) => (
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
                  Publish
                </label>
                <div className=" w-full">
                  <div className=" inset-y-0 right-0 flex items-center  w-full">
                    <div className="relative w-full border rounded-2xl">
                      <select
                        className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
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
                <>
                  <label className="font-Poppins text-[15px] mb-[4px]">
                    Ditujukan Untuk
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="2"
                    cols="20"
                    className="rounded-2xl"
                    onChange={(e) => setRequirement(e.target.value)}
                    value={requirement}
                  ></textarea>
                </>
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
        <Modal.Footer>
          <Button onClick={handleChange}>Ubah</Button>
        </Modal.Footer>
      </>
    </Modal>
  );
};

EditeCourse.propTypes = {
  editeCourse: PropTypes.bool,
  setEditeCourse: PropTypes.func,
  id: PropTypes.number,
};

export default EditeCourse;
