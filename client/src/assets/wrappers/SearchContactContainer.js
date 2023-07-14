import styled from "styled-components";

const Wrapper = styled.section`
  .search-bar-title {
    margin-bottom: 1rem;
  }
  .form {
    width: 100%;
    max-width: 100%;
    box-shadow: var(--shadow-2);
    margin-top: 0;
  }

  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }

  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }

  .btn-block {
    align-self: end;
    margin-top: 1rem;
    line-height: 0;
    background-color: #38b000;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1280px) {
    .form-center {
      grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
    }
  }
`;

export default Wrapper;
