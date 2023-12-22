import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataModule,
  updateModuleById,
} from "../../redux/Actions/EditeCourses";

const EditeModule = ({ editeModule, setEditeModule, moduleId, courseId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const { editeModules } = useSelector((state) => state.edite);

  useEffect(() => {
    courseId && moduleId && dispatch(updateModuleById(courseId, moduleId));
  }, [dispatch, courseId, moduleId]);

  useEffect(() => {
    setTitle(editeModules.title || "");
  }, [editeModules]);

  const handleClick = () => {
    dispatch(updateDataModule(title, courseId, moduleId));
  };

  return (
    <Modal show={editeModule} onClose={() => setEditeModule(false)}>
      <Modal.Header>Ubah Module Kelas</Modal.Header>
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
        <Button onClick={handleClick}>Ubah</Button>
      </Modal.Footer>
    </Modal>
  );
};

EditeModule.propTypes = {
  editeModule: PropTypes.bool,
  setEditeModule: PropTypes.func,
  moduleId: PropTypes.number,
  courseId: PropTypes.string,
};

export default EditeModule;
