import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInstructorById,
  updateDataInstructor,
} from "../../redux/Actions/EditeCourses";


import { FileInput, Label } from "flowbite-react";
import { FiEye, FiEyeOff } from "react-icons/fi";



const EditeInstructor = ({
  editeInstructors,
  setEditeInstructors,
  instructorId,
}) => {
  const dispatch = useDispatch();


  const [photoInstructor, setPhotoInstructor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const { editeInstructor } = useSelector((state) => state.edite);

  useEffect(() => {
    instructorId && dispatch(getInstructorById(instructorId));
  }, [dispatch, instructorId]);

  useEffect(() => {


    setName(editeInstructor.name);
    setPhotoInstructor(editeInstructor.photoProfile);
    setEmail(editeInstructor.email);
  }, [editeInstructor]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhotoInstructor(selectedFile);
  };

  const handleChange = () => {
    dispatch(
      updateDataInstructor(
        name,
        email,
        password,
        confPassword,
        photoInstructor,
        instructorId
      )
    );


  };

  return (
    <Modal show={editeInstructors} onClose={() => setEditeInstructors(false)}>
      <Modal.Header>Ubah Data Pengajar</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">


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
              Nama Pengajar


            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Email</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Wynnn@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-Poppins text-[14px] mb-[4px]">
                Buat Password
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="border w-full py-2 px-3 rounded-xl pr-[3.5rem]"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={togglePassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1"
              >
                {showPassword ? (
                  <FiEyeOff className="border-none" />
                ) : (
                  <FiEye className="border-none" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-Poppins text-[14px] mb-[4px]">
                Konfirmasi Password
              </label>
              <div></div>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="border w-full py-2 px-3 rounded-xl pr-[3.5rem]"
                placeholder="Masukkan konfirmasi password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />

              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={toggleConfirmPassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>


        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleChange}>Ubah</Button>
      </Modal.Footer>
    </Modal>
  );
};

EditeInstructor.propTypes = {
  editeInstructors: PropTypes.bool,
  setEditeInstructors: PropTypes.func,
  instructorId: PropTypes.number,
};

export default EditeInstructor;
