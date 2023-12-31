import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      transition: var(--transition);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
    }
    .sidebar-content {
      position: sticky;
      top: 0;
    }

    .show-sidebar {
      margin-left: 0;
    }

    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }

    .logo {
      height: 45px;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 3rem;
      text-transform: capitalize;
      transition: var(--transition);
    }

    .nav-link:hover {
      background: var(--grey-100);
      padding-left: 3.5rem;
      color: var(--grey-900);
    }

    .nav-link:hover .nav-icon {
      color: var(--primary-500);
    }

    .nav-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      transition: var(--transition);
    }

    .active {
      color: var(--grey-900);
    }

    .active .nav-icon {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
