import { useAppContext } from "../context/appContext";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const ContactPageBtnContainer = () => {
  const { numOfContactPages, contactPage, changeContactPage } = useAppContext();
  const pages = Array.from({ length: numOfContactPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = contactPage - 1;
    if (newPage < 1) {
      newPage = numOfContactPages;
    }
    changeContactPage(newPage);
  };
  const nextPage = () => {
    let newPage = contactPage + 1;
    if (newPage > numOfContactPages) {
      newPage = 1;
    }
    changeContactPage(newPage);
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
              className={
                pageNumber === contactPage ? "pageBtn active" : "pageBtn"
              }
              key={pageNumber}
              onClick={() => changeContactPage(pageNumber)}
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
export default ContactPageBtnContainer;
