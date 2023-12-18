import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataType } from "../../redux/Actions/CourseActions";

const AddType = ({ addType, setAddType }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");

  const handleType = (e) => {
    e.preventDefault();
    dispatch(addDataType(type));
  };
  return (
    <Modal show={addType} onClose={() => setAddType(false)}>
      <Modal.Header>Tambahkan Type Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Type
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleType}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddType.propTypes = {
  addType: PropTypes.bool,
  setAddType: PropTypes.func,
};

export default AddType;
