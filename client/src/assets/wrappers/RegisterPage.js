import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    width: 50%;
  }

  .form {
    max-width: 500px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }

  .btn {
    margin-top: 1rem;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .member-btn {
    border: transparent;
    background: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
