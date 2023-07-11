import { useAppContext } from "../context/appContext";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfJobPages, jobPage, changeJobPage } = useAppContext();

  const pages = Array.from({ length: numOfJobPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = jobPage - 1;
    if (newPage < 1) {
      newPage = numOfJobPages;
    }
    changeJobPage(newPage);
  };
  const nextPage = () => {
    let newPage = jobPage + 1;
    if (newPage > numOfJobPages) {
      newPage = 1;
    }
    changeJobPage(newPage);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <BsArrowBarLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === jobPage ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => changeJobPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <BsArrowBarRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
