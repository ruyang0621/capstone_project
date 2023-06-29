import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .sidebar-content {
    background-color: var(--white);
    height: 95vh;
    width: var(--fluid-width);
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-500);
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }

  .logo {
    height: 55px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--primary-900);
  }

  .nav-link:hover .nav-icon {
    color: var(--primary-500);
  }

  .nav-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }

  .active {
    color: var(--primary-900);
  }

  .active .nav-icon {
    color: var(--primary-500);
  }
`;
export default Wrapper;
