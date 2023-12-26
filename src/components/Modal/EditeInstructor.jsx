import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInstructorById,
  updateDataInstructor,
} from "../../redux/Actions/EditeCourses";

const EditeInstructor = ({
  editeInstructors,
  setEditeInstructors,
  instructorId,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const { editeInstructor } = useSelector((state) => state.edite);

  useEffect(() => {
    instructorId && dispatch(getInstructorById(instructorId));
  }, [dispatch, instructorId]);

  useEffect(() => {
    setName(editeInstructor.name || "");
  }, [editeInstructor]);

  const handleChange = () => {
    dispatch(updateDataInstructor(name, instructorId));
  };

  return (
    <Modal show={editeInstructors} onClose={() => setEditeInstructors(false)}>
      <Modal.Header>Ubah Data Pengajar</Modal.Header>
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
