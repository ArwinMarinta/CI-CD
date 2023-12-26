import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function Pagination({ setPageNumber, pageNumber }) {
  const { page } = useSelector((state) => state.course);

  const handlePage = (value) => {
    setPageNumber(value);
  };

  const renderPagination = () => {
    if (page.length < 1) {
      return null;
    }

    const currentIndex = page.indexOf(pageNumber);
    const prevPage = currentIndex > 0 ? page[currentIndex - 1] : null;
    const nextPage =
      currentIndex < page.length - 1 ? page[currentIndex + 1] : null;

    return (
      <nav
        aria-label="Page navigation example"
        className="my-10 flex justify-center"
      >
        <ul className="inline-flex -space-x-px text-sm">
          {prevPage !== null && (
            <li key={prevPage}>
              <button
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 text-gray-500 bg-white hover:bg-blue-400 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => handlePage(prevPage)}
              >
                {prevPage}
              </button>
            </li>
          )}

          <li key={pageNumber}>
            <button
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${"text-white bg-blue-500 hover:bg-blue-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"}`}
              onClick={() => handlePage(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>

          {nextPage !== null && (
            <li key={nextPage}>
              <button
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 text-gray-500 bg-white hover:bg-blue-400 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => handlePage(nextPage)}
              >
                {nextPage}
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  return <div>{renderPagination()}</div>;
}

Pagination.propTypes = {
  setPageNumber: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default Pagination;
