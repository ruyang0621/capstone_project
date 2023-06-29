import Wrapper from "../assets/wrappers/Navbar";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleSidebar, user, logoutUser } = useAppContext();

  return (
    <Wrapper>
      <div className="navbar">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <TbLayoutSidebarLeftExpand />
        </button>
        <Logo />
        <h3 className="dashboard-text">dashboard</h3>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={showDropdown ? "dropdown display-dropdown" : "dropdown"}
          >
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
