import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataPromoById,
  updateDataPromo,
} from "../../redux/Actions/EditeCourses";

const EditePromo = ({ editePromos, setEditePromos, promoId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiredAt, setExpiredAt] = useState("");

  const { editePromo } = useSelector((state) => state.edite);

  const handleInputChange = (e) => {
    setExpiredAt(e.target.value);
  };

  const handleDateConversion = () => {
    setExpiredAt(new Date(expiredAt).toISOString());
  };

  useEffect(() => {
    promoId && dispatch(getDataPromoById(promoId));
  }, [dispatch, promoId]);

  useEffect(() => {
    setName(editePromo?.name || "");
    setDiscount(editePromo?.discount || "");
    setExpiredAt(new Date(editePromo.expiredAt).toLocaleString() || "");
  }, [editePromo]);

  const handleChange = () => {
    dispatch(updateDataPromo(name, discount, expiredAt, promoId));
  };

  return (
    <Modal show={editePromos} onClose={() => setEditePromos(false)}>
      <Modal.Header>Ubah Jenis Promo</Modal.Header>
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
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={expiredAt || ""}
              onChange={handleInputChange}
              onBlur={handleDateConversion}
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

EditePromo.propTypes = {
  editePromos: PropTypes.bool,
  setEditePromos: PropTypes.func,
  promoId: PropTypes.string,
};

export default EditePromo;
