import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataLevel,
  updateLevelById,
} from "../../redux/Actions/EditeCourses";

const EditeLevel = ({ editeLevels, setEditeLevels, levelId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const { editeLevel } = useSelector((state) => state.edite);

  useEffect(() => {
    levelId && dispatch(updateLevelById(levelId));
  }, [dispatch, levelId]);

  useEffect(() => {
    setName(editeLevel.name || "");
  }, [editeLevel]);

  const handleChange = () => {
    dispatch(updateDataLevel(name, levelId));
  };

  return (
    <Modal show={editeLevels} onClose={() => setEditeLevels(false)}>
      <Modal.Header>Ubah Type Kelas</Modal.Header>
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
        <Button onClick={handleChange}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

EditeLevel.propTypes = {
  editeLevels: PropTypes.bool,
  setEditeLevels: PropTypes.func,
  levelId: PropTypes.number,
};

export default EditeLevel;
