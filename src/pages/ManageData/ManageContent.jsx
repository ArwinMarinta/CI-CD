import NavSide from "../../components/Header/Side";
import Navbar from "../../components/Header/Desktop";
import AddIcon from "../../assets/add.svg";
import { useParams } from "react-router-dom";
import HeadContent from "../../data/HeadContents";
import AddContent from "../../components/Modal/AddContent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContent,
  getContentById,
} from "../../redux/Actions/CourseActions";
import EditeContent from "../../components/Modal/EditeContent";

const ManageContent = () => {
  const { modulesId, courseId } = useParams();
  const dispatch = useDispatch();

  const [activeModal, setActiveModal] = useState(null);
  const [contentId, setContentId] = useState(null);

  const { contents } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getContentById(modulesId, courseId));
  }, [dispatch, modulesId, courseId]);

  const handleDelete = (contentId) => {
    dispatch(deleteContent(contentId));
  };

  const handleOpenModal = (modalType, contentId) => {
    setActiveModal(modalType);
    setContentId(contentId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setContentId(null);
  };
  return (
    <div className="flex  ">
      <NavSide />
      <div className="w-[100%] lg:w-[85%] mb-14  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center container mt-16 mx-auto">
          <div className="flex flex-row justify-between w-full mb-4 items-center">
            <div className="font-bold font-Montserrat text-xl  ">
              Data Konten
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleOpenModal("addContent")}
                className="bg-DARKBLUE05 flex flex-row justify-center items-center p-[6px] rounded-2xl gap-1 text-white font-bold font-Montserrat"
              >
                <img src={AddIcon} />
                <p>Tambah</p>
              </button>
              <AddContent
                addContent={activeModal === "addContent"}
                setAddContent={handleCloseModal}
                moduleId={modulesId}
                contentId
              />
            </div>
          </div>

          <table className="table table-striped w-full text-left">
            <thead className="font-Montserrat text-base">
              <tr>
                {HeadContent.map((data) => (
                  <th key={data.id} scope="col" className="bg-LightBlue5 py-4">
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" table-fixed overflow-x-auto w-full ">
              {contents.map((data) => (
                <tr
                  key={data.contentId}
                  className="bg-white border-b font-Montserrat text-xs "
                >
                  <td scope="row" className=" py-4 pl-4">
                    {data.contentId}
                  </td>
                  <td className=" py-4 ">{data.title ?? "-"}</td>
                  <td className=" py-4 ">{data.videoUrl ?? "-"}</td>
                  <td className=" py-4 ">{data.duration ?? "-"} Menit</td>

                  <td className="pr-4">
                    <div className="flex flex-row gap-2 font-bold text-white">
                      <div>
                        <button
                          onClick={() =>
                            handleOpenModal("editeContent", data.contentId)
                          }
                          className="p-1 bg-DARKBLUE05 rounded-xl "
                        >
                          Ubah
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(data.contentId)}
                        className="p-1 bg-red-600 rounded-xl"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <EditeContent
            editeContents={activeModal === "editeContent"}
            setEditeContent={handleCloseModal}
            modulesId={modulesId}
            contentId={contentId}
            courseId={courseId}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageContent;
