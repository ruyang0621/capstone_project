import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .navbar {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 135px;
  }

  .dashboard-text {
    display: none;
  }

  .btn {
    display: flex;
    gap: 0 0.5rem;
    box-shadow: var(--shadow-2);
  }

  .btn-container {
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    cursor: pointer;
  }

  .display-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .logo {
      display: none;
    }

    .dashboard-text {
      display: block;
      margin-bottom: 0;
    }
  }

  @media (max-width: 375px) {
    .logo {
      display: none;
    }
  }
`;
export default Wrapper;
