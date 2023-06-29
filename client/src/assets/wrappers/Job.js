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

  .content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .job-note {
    color: var(--primary-600);
  }

  .read-or-hide {
    color: var(--primary-300);
    text-decoration: underline;
    text-transform: capitalize;
    font-style: italic;
    cursor: pointer;
  }

  .interviewing {
    background: var(--green-light);
    color: #0f5132bf;
  }

  .pending {
    background: #fcefc7;
    color: #f7ad02;
  }
  .applied {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--letterSpacing);
    width: 130px;
    height: 30px;
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
