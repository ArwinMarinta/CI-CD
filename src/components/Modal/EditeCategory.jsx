import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FileInput, Label } from "flowbite-react";
import {
  getCategoryById,
  updateDataCategori,
} from "../../redux/Actions/EditeCourses";

const EditeCategory = ({ editeCategorys, setEditeCategorys, categoryId }) => {
  const dispatch = useDispatch();
  const [photoCategory, setPhotoCategory] = useState(null);
  const [name, setName] = useState("");
  const [isPublished, setIsPublished] = useState("");

  const { editeCategory } = useSelector((state) => state.edite);

  useEffect(() => {
    categoryId && dispatch(getCategoryById(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    setName(editeCategory?.name || "");
    setIsPublished(editeCategory?.isPublished || "");
    setPhotoCategory(editeCategory?.urlPhoto || "");
  }, [editeCategory]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setPhotoCategory(selectedFile);
    } else {
      const filename = editeCategory?.urlPhoto.match(/\/([^\/?#]+)$/)[1];

      setPhotoCategory(filename);
    }
  };

  const handleChange = () => {
    dispatch(updateDataCategori(name, isPublished, photoCategory, categoryId));
  };

  return (
    <Modal show={editeCategorys} onClose={() => setEditeCategorys(false)}>
      <Modal.Header>Ubah Data Kategori</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div>
            <div>
              <Label htmlFor="file-upload-helper-text" value="Upload file" />
            </div>
            <FileInput
              id="file-upload-helper-text"
              helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              onChange={handleFileChange}
            />
            {photoCategory && (
              <div>
                <img
                  src={photoCategory}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Kategori
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
            <label className="font-Poppins text-[15px] mb-[4px]">Publish</label>
            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full">
                <div className="relative w-full border rounded-2xl">
                  <select
                    className="appearance-none h-full w-full rounded-2xl bg-transparent  text-gray-700 py-3"
                    value={isPublished}
                    onChange={(e) => setIsPublished(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value={true}>true</option>
                    <option value={false}>false</option>
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

EditeCategory.propTypes = {
  editeCategorys: PropTypes.bool,
  setEditeCategorys: PropTypes.func,
  categoryId: PropTypes.number,
};

export default EditeCategory;
