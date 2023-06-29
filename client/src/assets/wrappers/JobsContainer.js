import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  .jobs-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  h5 {
    font-weight: 700;
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .form-textarea {
    resize: none;
  }

  .row-select-container {
    display: flex;
    justify-content: space-between;
  }

  .form-row-select {
    width: 40%;
  }

  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
