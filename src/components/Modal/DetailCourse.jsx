import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDetailCourseByID } from "../../redux/Actions/DetailActions";

const DetailCourse = ({ detailCourses, setDetailCourses, courseId }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const [code, setCode] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [durations, setDurations] = useState(null);
  const [taken, setTaken] = useState(null);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);
  const [level, setLevel] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [module, setModule] = useState(null);
  const [promo, setPromo] = useState(null);
  const [namePromo, setNamePromo] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [publishedAt, setIsPublishedAt] = useState(null);
  const [image, setImage] = useState(null);
  const [publish, setIsPublish] = useState(null);

  const { detailCourse } = useSelector((state) => state.detail);

  useEffect(() => {
    courseId & dispatch(getDetailCourseByID(courseId));
  }, [dispatch, courseId]);

  useEffect(() => {
    setId(detailCourse.courseId);
    setCode(detailCourse?.code);
    setTitle(detailCourse?.title);
    setPrice(detailCourse?.originalPrice);
    setRating(detailCourse?.rating);
    setDurations(detailCourse?.duration);
    setTaken(detailCourse?.taken);
    setCategory(detailCourse?.category);
    setType(detailCourse?.type);
    setLevel(detailCourse?.level);
    setInstructor(detailCourse?.instructor);
    setModule(detailCourse?.totalModule);
    setPromo(detailCourse?.isPromo || "Tidak Ada promo");
    setNamePromo(detailCourse?.namePromo || "Tidak ada Promo");
    setDiscount(detailCourse?.discount || "Tidak Ada Diskon");
    setTotalPrice(detailCourse?.totalPrice);
    setDescription(detailCourse?.description);
    setImage(detailCourse?.imageUrl);
    setIsPublishedAt(detailCourse?.publishedAt);
    setIsPublish(detailCourse?.isPublished);
  }, [detailCourse]);

  return (
    <Modal show={detailCourses} onClose={() => setDetailCourses(false)}>
      <Modal.Header>Detail Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Id Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={id}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Kode Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={code}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Judul Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={title}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Harga Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={price}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Rating Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={rating}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Durasi Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={durations}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Banyak di Ambil
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={taken}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Kategori
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={category}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Type</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={type}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Level</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={level}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Pengajar
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={instructor}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Total Modul
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={module}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Promo</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={promo}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Promo
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={namePromo}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Diskon</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={discount}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Total Harga
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={totalPrice}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Deskripsi Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={description}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Waktu Buat Kelas
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={publishedAt}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Publish</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              defaultValue={publish}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Gambar Kelas
            </label>
            <div>
              <img src={image} />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

DetailCourse.propTypes = {
  detailCourses: PropTypes.bool,
  setDetailCourses: PropTypes.func,
};

export default DetailCourse;
