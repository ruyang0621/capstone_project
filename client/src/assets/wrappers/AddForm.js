import styled from "styled-components";

const Wrapper = styled.section`
  .add-job-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .show-add-job-form {
    z-index: 99;
    opacity: 1;
  }

  .form-container {
    width: 90vw;
    max-width: 500px;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-4);
    padding: 2rem 3rem;
    margin: 3rem auto;
  }

  .form {
    width: unset;
    box-shadow: none;
    padding: 0;
    margin: 0rem auto;
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

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
  }

  .reset-btn {
    background: var(--grey-500);
  }
  .reset-btn:hover {
    background: var(--grey-800);
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .h3 {
    margin-bottom: 0;
  }

  .close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-500);
    align-self: start;
    cursor: pointer;
  }
`;
export default Wrapper;
