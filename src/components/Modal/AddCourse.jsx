// import React from 'react'
import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import ExitIcon from "../../assets/exit.svg";
import { getKategori, getLevel, getType } from "../../redux/Actions/AddCourses";
import { FileInput, Label } from "flowbite-react";
import {
  addDataCourse,
  filterData,
  getDataInstructor,
} from "../../redux/Actions/CourseActions";

const AddCourse = ({ addCourse, setAddCourse }) => {
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

  // console.log(title);
  // console.log(courseCategoryId);
  // console.log(courseTypeId);
  // console.log(courseLevelId);
  // console.log(price);
  // console.log(courseInstructorId);
  // console.log(description);
  // console.log(isPublished);
  // console.log(requirements);
  // console.log(courseImage);

  const { kategori, type, level, instructor } = useSelector(
    (state) => state.select
  );

  useEffect(() => {
    dispatch(getKategori());
    dispatch(filterData());
    dispatch(getLevel());
    dispatch(getType());
    dispatch(getDataInstructor());
  }, [dispatch]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setCourseImage(selectedFile);
  };

  const handleClick = () => {
    dispatch(
      addDataCourse(
        title,
        courseCategoryId,
        courseTypeId,
        courseLevelId,
        price,
        courseInstructorId,
        description,
        isPublished,
        courseImage,
        requirements
      )
    );
  };

  return (
    <Modal show={addCourse} onClose={() => setAddCourse(false)}>
      <Modal.Header>
        <p className="w-full flex justify-center">Tambah Kelas</p>
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
              <div className="w-full">
                <div className="inset-y-0 right-0 flex items-center w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={courseCategoryId}
                      onChange={(e) => setCourseCategoryId(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih
                      </option>
                      {kategori.map((category) => (
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
              <div className=" w-full">
                <div className=" inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                      value={courseTypeId}
                      onChange={(e) => setCourseTypeId(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih
                      </option>
                      {type &&
                        type.map((types) => (
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
                      <option value="" disabled hidden>
                        Pilih
                      </option>
                      {level &&
                        level.map((levels) => (
                          <>
                            <option key={levels.id} value={levels.id}>
                              {levels.name}
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
                Harga Kelas
              </label>
              <input
                type="number"
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
                      <option value="" disabled hidden>
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
                      <option value="" disabled hidden>
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
              ></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddCourse.propTypes = {
  addCourse: PropTypes.bool,
  setAddCourse: PropTypes.func,
};

export default AddCourse;
