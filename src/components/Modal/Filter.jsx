import PropTypes from "prop-types";
import exit from "../../assets/exit.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../redux/Actions/CourseActions";
function Filter({
  showModal,
  setShowModal,
  setTypeCourse,
  category,
  setCategory,
  typeCourse,
  setSave,
}) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.course);

  const handleSave = () => {
    setShowModal(false);
    setSave(true);
  };

  const handleCategory = (value) => {
    setCategory((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };
  const handleTypeCourse = (value) => {
    setTypeCourse((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };
  const handleCancel = () => {
    setShowModal(false);
    setCategory([]);
    setTypeCourse([]);
    // Reset state atau lakukan sesuatu yang diperlukan saat menekan "Cancel"
  };
  const Out = () => {
    setShowModal(false);
  };
  useEffect(() => {
    dispatch(filterData());
  }, [dispatch]);
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full backdrop-blur-xl bg-white/80 drop-shadow-2xl outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-blue-600/80 rounded-t-lg">
                  <h3 className="text-3xl font-semibold text-white">
                    Filter Course
                  </h3>
                  <button
                    className="bg-white rounded-full hover:h-6 flex justify-center hover:w-6 w-auto hover:rotate-90 transition duration-700"
                    onClick={() => Out()}
                  >
                    <img src={exit} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="font-bold">Tipe Kelas</p>
                  <ul className="flex flex-row gap-x-3 m-2">
                    <li className="flex gap-x-3 items-center">
                      <input
                        type="checkbox"
                        checked={typeCourse.includes("Free")}
                        onChange={() => handleTypeCourse("Free")}
                      />
                      <label>Free</label>
                    </li>
                    <li className="flex gap-x-3 items-center">
                      <input
                        type="checkbox"
                        checked={typeCourse.includes("Premium")}
                        onChange={() => handleTypeCourse("Premium")}
                      />
                      <label>Premium</label>
                    </li>
                  </ul>
                  <p className="font-bold">Kategori</p>
                  <ul className="flex flex-row gap-x-3 m-2 grid grid-rows-3 grid-flow-col ">
                    {filter.map((kategori) => (
                      <>
                        <li
                          className="flex gap-x-3 items-center"
                          key={kategori.name}
                        >
                          <input
                            type="checkbox"
                            checked={category.includes(kategori.slug)}
                            onChange={() => handleCategory(kategori.slug)}
                          />
                          <label>{kategori.name}</label>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCancel()}
                  >
                    Hapus Dan Keluar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSave()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
Filter.propTypes = {
  setShowModal: PropTypes.func,
  setSave: PropTypes.func,
  showModal: PropTypes.bool,
  setTypeCourse: PropTypes.func,
  category: PropTypes.string,
  typeCourse: PropTypes.string,
  setCategory: PropTypes.func,
};

export default Filter;
