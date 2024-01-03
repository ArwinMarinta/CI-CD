import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePublish } from "../../redux/Actions/CourseActions";

const Publish = ({ publish, setPublish, courseId }) => {
  const dispatch = useDispatch();
  const [published, setPublished] = useState("");

  //   console.log(courseId);

  const handleChange = () => {
    dispatch(changePublish(published, courseId));
  };

  return (
    <Modal show={publish} onClose={() => setPublish(false)}>
      <Modal.Header>Publish dan UnPublish Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-10">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Pilih Keterangan
            </label>
            <div className="w-full">
              <div className="inset-y-0 right-0 flex items-center w-full">
                <div className="relative w-full border rounded-2xl">
                  <select
                    className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                    onChange={(e) => setPublished(e.target.value)}
                    value={published}
                  >
                    <option value="" disabled hidden>
                      Silahkan Pilih Keterangan

                    </option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleChange}>Ubah</Button>
      </Modal.Footer>
    </Modal>
  );
};

Publish.propTypes = {
  publish: PropTypes.bool,
  setPublish: PropTypes.func,
  courseId: PropTypes.number,
};

export default Publish;
