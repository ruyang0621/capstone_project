import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;

  .contacts-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  h5 {
    font-weight: 700;
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .row-name-container {
    display: flex;
    justify-content: space-between;
  }

  .small-form-row {
    width: 40%;
  }
  @media (min-width: 992px) {
    .contacts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
