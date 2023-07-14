import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem;
  margin-bottom: 3rem;
  header {
    border-bottom: 1px solid var(--primary-200);
    h5 {
      letter-spacing: 0;
    }
    p {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--grey-700);
    }
  }

  .note-detail {
    color: var(--primary-600);
  }

  .read-or-hide {
    color: var(--primary-300);
    text-decoration: underline;
    text-transform: capitalize;
    font-style: italic;
    cursor: pointer;
  }

  .text {
    text-transform: none;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    column-gap: 1rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .edit-btn,
  .delete-btn {
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    margin-right: 1rem;
    background-color: var(--orange-dark);
  }

  .delete-btn {
    background-color: var(--yellow-dark);
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
export default Wrapper;
