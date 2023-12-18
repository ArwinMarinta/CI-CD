import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
// import { useDispatch } from "react-redux";

const AddContent = ({ addContent, setAddContent }) => {
  //   const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [isDemo, setIsDemo] = useState("");
  const [moduleId, setModuleId] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch;
  //   };

  return (
    <Modal show={addContent} onClose={() => setAddContent(false)}>
      <Modal.Header>Tambah Konten</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Judul Konten
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Link Video
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Durasi Video
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Type Konten
            </label>
            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full">
                <div className="relative w-full border rounded-2xl">
                  <select
                    className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                    value={isDemo}
                    onChange={(e) => setIsDemo(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value="option1">true</option>
                    <option value="option2">false</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Judul Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={moduleId}
              onChange={(e) => setModuleId(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddContent.propTypes = {
  addContent: PropTypes.bool,
  setAddContent: PropTypes.func,
};
export default AddContent;
