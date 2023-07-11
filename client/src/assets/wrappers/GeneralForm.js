import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow-2);
  padding: 3rem 4rem;
  border-radius: var(--borderRadius);
  border-top: 5px solid var(--primary-500);

  h3 {
    margin-top: 0;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .form-center button {
    align-self: end;
    height: 2.5rem;
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Wrapper;
