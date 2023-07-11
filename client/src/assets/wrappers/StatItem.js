import styled from "styled-components";

const Wrapper = styled.article`
  padding: 0 2rem;
  .stat-title {
    text-transform: uppercase;
    margin: 0;
    font-size: 0.8rem;
    color: var(--grey-500);
  }
  .count {
    font-size: 1.75rem;
    color: ${(props) => props.color};
  }
`;
export default Wrapper;
