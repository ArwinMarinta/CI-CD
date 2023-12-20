import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataType,
  updateTypeById,
} from "../../redux/Actions/EditeCourses";

const EditeType = ({ editeTypes, setEditeTypes, typeId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { editeType } = useSelector((state) => state.edite);

  useEffect(() => {
    typeId && dispatch(updateTypeById(typeId));
  }, [dispatch, typeId]);

  useEffect(() => {
    setName(editeType.name || "");
  }, [editeType]);

  const handleChange = () => {
    dispatch(updateDataType(name, typeId));
  };

  return (
    <Modal show={editeTypes} onClose={() => setEditeTypes(false)}>
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
EditeType.propTypes = {
  editeTypes: PropTypes.bool,
  setEditeTypes: PropTypes.func,
  typeId: PropTypes.number,
};

export default EditeType;
