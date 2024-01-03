import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDataPromo } from "../../redux/Actions/CourseActions";

const AddPromo = ({ addPromo, setAddPromo }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiredAt, setExpiredAt] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(AddDataPromo(name, discount, expiredAt));
  };
  const handleDateConversion = () => {
    if (expiredAt) {
      const convertedDate = new Date(expiredAt);
      setExpiredAt(convertedDate.toISOString());
    }
  };
  return (
    <Modal show={addPromo} onClose={() => setAddPromo(false)}>
      <Modal.Header>Tambah Jenis Promo</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Promo
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
            <label className="font-Poppins text-[15px] mb-[4px]">Diskon</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Berlaku Hingga
            </label>
            <input
              type="datetime-local"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={expiredAt}
              onChange={(e) => setExpiredAt(e.target.value)}
              onBlur={handleDateConversion}
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

AddPromo.propTypes = {
  addPromo: PropTypes.bool,
  setAddPromo: PropTypes.func,
};

export default AddPromo;
