// import React from 'react'
import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ExitIcon from "../../assets/exit.svg";
import { getKategori, getLevel, getType } from "../../redux/Actions/AddCourses";
import { addedCourse, filterData } from "../../redux/Actions/CourseActions";

const AddCourse = ({ addCourse, setAddCourse }) => {
  const dispatch = useDispatch();
  const [kategoriValue, setKategoriValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [instructure, setInstructure] = useState();
  const [published, setPublised] = useState();
  const [requirement, setRequirement] = useState("");
  const [desc, setDesc] = useState("");
  const [levelValue, setLevelValue] = useState("");
  const [picture, setPicture] = useState("");
  const fileInputRef = useRef(null);

  const [titleValue, setTitleValue] = useState("");
  const [save, setSave] = useState(false);

  const handleSimpan = () => {
    setAddCourse(false);
    setSave(true);
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const { type, level } = useSelector((state) => state.select);
  const { filter } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getKategori());
    dispatch(filterData());
    dispatch(getLevel());
    dispatch(getType());
    if (save == true) {
      dispatch(
        addedCourse(
          picture,
          kategoriValue,
          titleValue,
          typeValue,
          priceValue,
          instructure,
          published,
          requirement,
          desc,
          levelValue
        )
      );
    }
    if (addCourse == true) {
      setSave(false);
    }
  }, [
    dispatch,
    picture,
    kategoriValue,
    titleValue,
    typeValue,
    priceValue,
    instructure,
    published,
    requirement,
    desc,
    levelValue,
  ]);

  // console.log(kategoriValue);
  // console.log(levelValue);
  // console.log(typeValue);

  return (
    <Modal show={addCourse} onClose={() => setAddCourse(false)}>
      <Modal.Header>
        <p className="w-full flex justify-center">Tambah Kelas</p>
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
              <div className="relative border w-full py-1 px-4 rounded-2xl overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                  className="hidden"
                  // value={picture}
                  ref={fileInputRef}
                />
                <button
                  className="bg-NEUTRAL04 text-white px-4 py-2 rounded-md"
                  onClick={handleChooseFileClick}
                >
                  Choose File
                </button>
                <span className="ml-4 overflow-hidden ">{picture.name}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Kategori
              </label>
              <div className="w-full">
                <div className="inset-y-0 right-0 flex items-center w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                      value={kategoriValue}
                      onChange={(e) => setKategoriValue(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih
                      </option>
                      {filter.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                      {/* Additional options can be added here if needed */}
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
                onChange={(e) => setTitleValue(e.target.value)}
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
                      value={typeValue}
                      onChange={(e) => setTypeValue(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih
                      </option>
                      {type.map((types) => (
                        <>
                          {/* <option disabled hidden value="">
                              Pilih
                            </option> */}
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
                      value={levelValue}
                      onChange={(e) => setLevelValue(e.target.value)}
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
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Instructor Kelas
              </label>
              <input
                type="number"
                className="border w-full py-3 px-4 rounded-2xl"
                placeholder="Number"
                value={instructure}
                onChange={(e) => setInstructure(e.target.value)}
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
                value={published}
                onChange={(e) => setPublised(e.target.value)}
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
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleSimpan()}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddCourse.propTypes = {
  addCourse: PropTypes.bool,
  setAddCourse: PropTypes.func,
};

export default AddCourse;
