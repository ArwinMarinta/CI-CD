import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromo } from "../../redux/Actions/AddCourses";
import {
  deletPomoCourse,
  getDetailCourse,
  updatePomoCourse,
} from "../../redux/Actions/DetailActions";

const PromoCourse = ({ promoCourse, setPromoCourse, courseId }) => {
  const dispatch = useDispatch();
  const [promoId, setPromodId] = useState("");
  const [promos, setPromos] = useState("");

  const { promo } = useSelector((state) => state.select);

  const { detailCourse } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getPromo());
  }, [dispatch]);

  useEffect(() => {
    setPromos(detailCourse?.namePromo);
  }, [detailCourse]);

  const handleUpdate = () => {
    dispatch(updatePomoCourse(promoId, courseId));
  };
  const handleDelete = () => {
    dispatch(deletPomoCourse(courseId));
  };

  return (
    <Modal show={promoCourse} onClose={() => setPromoCourse(false)}>
      <Modal.Header>Tambah dan Hapus Promo Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-10">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Pilih Promo Kelas
            </label>
            <div className="w-full">
              <div className="inset-y-0 right-0 flex items-center w-full">
                <div className="relative w-full border rounded-2xl">
                  <select
                    className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                    onChange={(e) => setPromodId(e.target.value)}
                    value={promoId}
                  >
                    <option value="" disabled hidden>
                      Pilih Promo
                    </option>
                    {promo &&
                      promo.map((types) => (
                        <option key={types.id} value={types.id}>
                          {types.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <label className="font-Poppins text-[15px] mb-[4px]">
                Promo Saat ini
              </label>
              <input
                type="text"
                className="border w-full py-3 px-4 rounded-2xl"
                value={promos}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdate}>Tambah</Button>
        <Button color="failure" onClick={handleDelete}>
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PromoCourse.propTypes = {
  promoCourse: PropTypes.bool,
  setPromoCourse: PropTypes.func,
};

export default PromoCourse;
