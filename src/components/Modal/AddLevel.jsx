import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDataLevel } from "../../redux/Actions/CourseActions";

const AddLevel = ({ addLevel, setAddLevel }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(AddDataLevel(name));
  };
  return (
    <Modal show={addLevel} onClose={() => setAddLevel(false)}>
      <Modal.Header>Tambah Data Level</Modal.Header>
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

AddLevel.propTypes = {
  addLevel: PropTypes.bool,
  setAddLevel: PropTypes.func,
};

export default AddLevel;
