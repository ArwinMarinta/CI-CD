import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function Pagination({ setPageNumber, pageNumber }) {
  const { page } = useSelector((state) => state.course);
  const handlePage = (value) => {
    setPageNumber(value);
  };
  return (
    <div>
      {" "}
      {
        <nav
          aria-label="Page navigation example "
          className="my-10 flex justify-center"
        >
          <ul className="inline-flex -space-x-px text-sm">
            {page.map((item) => (
              <li key={item}>
                <button
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                    pageNumber === item
                      ? "text-white bg-blue-500 hover:bg-blue-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "text-gray-500 bg-white hover:bg-blue-400 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white "
                  }`}
                  onClick={() => handlePage(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      }
    </div>
  );
}
Pagination.propTypes = {
  autoPage: PropTypes.bool,
  setPageNumber: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default Pagination;
