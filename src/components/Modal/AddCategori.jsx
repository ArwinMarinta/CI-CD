import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { FileInput, Label } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataCategory } from "../../redux/Actions/CourseActions";

const AddCategori = ({ addCategori, setAddCategori }) => {
  const dispatch = useDispatch();
  const [picture, setPitcure] = useState(null);
  const [category, setCategory] = useState("");
  //   const [publish, setPublish] = useState("");

  const handleCategory = () => {
    dispatch(addDataCategory(picture, category));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const newProfilePicture = URL.createObjectURL(selectedFile);
      setPitcure(newProfilePicture);
    }
  };

  console.log(picture);
  //   console.log(category);

  return (
    <Modal show={addCategori} onClose={() => setAddCategori(false)}>
      <Modal.Header>Tambah Kategori Kelas</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div>
            <div>
              <Label htmlFor="file-upload-helper-text" value="Upload file" />
            </div>
            <FileInput
              id="file-upload-helper-text"
              helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              //   onChange={(e) => setPitcure(e.target.files[0])}
              //   onChange={(e) => setPitcure(e.target.value)}
              onChange={handleFileChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">
              Nama Kategori
            </label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col">
            <label className="font-Poppins text-[15px] mb-[4px]">Publish</label>
            <input
              type="text"
              className="border w-full py-3 px-4 rounded-2xl"
              placeholder="Text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCategory}>Tambah</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddCategori.propTypes = {
  addCategori: PropTypes.bool,
  setAddCategori: PropTypes.func,
};

export default AddCategori;
