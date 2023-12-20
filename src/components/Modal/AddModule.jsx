import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataModule } from "../../redux/Actions/CourseActions";

const AddModule = ({ addModules, setAddModule, courseId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  //   console.log(title, courseId);

  const handleClik = () => {
    dispatch(addDataModule(title, courseId));
  };

  return (
    <Modal show={addModules} onClose={() => setAddModule(false)}>
      <Modal.Header>Tambah Module Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Judul Modul
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClik}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddModule.propTypes = {
  addModules: PropTypes.bool,
  setAddModule: PropTypes.func,
  courseId: PropTypes.string,
};

export default AddModule;
