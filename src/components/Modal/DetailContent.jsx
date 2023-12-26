import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailContentById } from "../../redux/Actions/DetailActions";

const DetailContent = ({
  detailContents,
  setDetailContents,
  modulesId,
  courseId,
  contentId,
}) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [sequence, setSequence] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [durations, setDurations] = useState("");
  const [publishedAt, setIsPublishedAt] = useState("");
  const [idCourse, setIdCourse] = useState("");
  const [idModule, setIdModule] = useState("");

  const { detailContent } = useSelector((state) => state.detail);

  useEffect(() => {
    modulesId &&
      courseId &&
      contentId &&
      dispatch(getDetailContentById(modulesId, courseId, contentId));
  }, [dispatch, modulesId, courseId, contentId]);

  useEffect(() => {
    setId(detailContent?.contentId);
    setTitle(detailContent?.title);
    setSequence(detailContent?.sequence);
    setUrlVideo(detailContent?.videoUrl);
    setDurations(detailContent?.duration);
    setIsPublishedAt(detailContent?.isDemo);
    setIdCourse(detailContent?.courseId);
    setIdModule(detailContent?.moduleId);
  }, [detailContent]);

  return (
    <Modal show={detailContents} onClose={() => setDetailContents(false)}>
      <Modal.Header>Detail Konten Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Id Konten
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={id}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Judul Konten
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={title}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Urutan Konten
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              defaultValue={sequence}
            />
          </div>
          <div>
            <iframe
              className="w-full aspect-video rounded-2xl bg-black"
              src={`https://www.youtube.com/embed/${urlVideo}`}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Durasi Konten Video
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              defaultValue={durations}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Publish Konten
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              defaultValue={publishedAt}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              ID Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              defaultValue={idCourse}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              ID Module
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              defaultValue={idModule}
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

DetailContent.propTypes = {
  detailContents: PropTypes.bool,
  setDetailContents: PropTypes.func,
  contents: PropTypes.array,
};

export default DetailContent;
