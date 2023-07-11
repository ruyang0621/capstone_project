import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  border-top: 5px solid var(--primary-500);
  padding-top: 1.38rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Wrapper;
