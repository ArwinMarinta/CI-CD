import { Modal, Button } from "flowbite-react";
import PropTypes, { bool } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editeContentById,
  updateContent,
} from "../../redux/Actions/EditeCourses";

const EditeContent = ({
  editeContents,
  setEditeContent,
  modulesId,
  courseId,
  contentId,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState();
  const [isDemo, setIsDemo] = useState("");
  const [demo, setDemo] = useState("");

  const { editeContent } = useSelector((state) => state.edite);

  console.log(isDemo);
  useEffect(() => {
    courseId &&
      modulesId &&
      contentId &&
      dispatch(editeContentById(courseId, modulesId, contentId));
  }, [dispatch, contentId, modulesId, courseId]);

  useEffect(() => {
    setTitle(editeContent.title || "");
    setVideoUrl(editeContent.videoUrl || "");
    setDuration(editeContent.duration || "");
    // setIsDemo(editeContent.isDemo || "");
  }, [editeContent]);

  const handleClik = () => {
    dispatch(
      updateContent(
        title,
        videoUrl,
        duration,
        isDemo,
        modulesId,
        contentId,
        courseId
      )
    );
  };

  const handleIsDemo = (e) => {
    setDemo(e.target.value);
    if (demo === true) {
      setIsDemo(true);
    } else {
      setIsDemo(false);
    }
  };

  return (
    <Modal show={editeContents} onClose={() => setEditeContent(false)}>
      <Modal.Header>Ubah Konten Module</Modal.Header>
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
              Link URL
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
            <label className="font-Poppins text-[15px] mb-[4px]">Durasi</label>
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
                    className="appearance-none h-full w-full rounded-2xl bg-transparent text-gray-700 py-3"
                    onChange={handleIsDemo}
                    // value={String(isDemo)}
                  >
                    {/* <option value="" disabled hidden>
                      "Silahkan Pilih"
                    </option> */}
                    <option value={true}>False</option>
                    <option value={false}>True</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClik}>Ubah</Button>
      </Modal.Footer>
    </Modal>
  );
};

EditeContent.propTypes = {
  editeContents: PropTypes.bool,
  setEditeContent: PropTypes.func,
  modulesId: PropTypes.string,
  courseId: PropTypes.string,
  contentId: PropTypes.number,
};

export default EditeContent;
