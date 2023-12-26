import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDataInstructor } from "../../redux/Actions/CourseActions";

const AddInstructor = ({ addInstructors, setAddInstructors }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(AddDataInstructor(name));
  };

  return (
    <Modal show={addInstructors} onClose={() => setAddInstructors(false)}>
      <Modal.Header>Tambah Data Pengajar</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddInstructor.propTypes = {
  addInstructors: PropTypes.bool,
  setAddInstructors: PropTypes.func,
};

export default AddInstructor;
