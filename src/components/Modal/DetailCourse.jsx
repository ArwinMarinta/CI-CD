import { Modal, Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCourse } from "../../redux/Actions/DetailActions";

const DetailCourse = ({ detailCourses, setDetailCourses, courseId }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [durations, setDurations] = useState("");
  const [taken, setTaken] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [instructor, setInstructor] = useState("");
  const [module, setModule] = useState("");
  const [promo, setPromo] = useState("");
  const [namePromo, setNamePromo] = useState("");
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [description, setDescription] = useState("");
  const [publishedAt, setIsPublishedAt] = useState("");
  const [image, setImage] = useState("");

  const { courseDetail } = useSelector((state) => state.detail);

  useEffect(() => {
    courseId & dispatch(getDetailCourse(courseId));
  }, [dispatch, courseId]);

  useEffect(() => {
    setId(courseDetail.courseId || "");
    setCode(courseDetail?.code);
    setTitle(courseDetail?.title);
    setPrice(courseDetail?.originalPrice);
    setRating(courseDetail?.rating);
    setDurations(courseDetail?.duration);
    setTaken(courseDetail?.taken);
    setCategory(courseDetail?.category);
    setType(courseDetail?.type);
    setLevel(courseDetail?.level);
    setInstructor(courseDetail?.instructor);
    setModule(courseDetail?.totalModule);
    setPromo(courseDetail?.isPromo || "Tidak Ada promo");
    setNamePromo(courseDetail?.namePromo || "Tidak ada Promo");
    setDiscount(courseDetail?.discount || "Tidak Ada Diskon");
    setTotalPrice(courseDetail?.totalPrice);
    setDescription(courseDetail?.description);
    setImage(courseDetail?.imageUrl);
    setIsPublishedAt(courseDetail?.publishedAt);
  }, [courseDetail]);

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
