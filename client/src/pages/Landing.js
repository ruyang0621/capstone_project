import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <img src={main} alt="job tracker" className="main-img" />
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Students often apply to dozens of positions within an application
            cycle. There also are many factors that exist to increase the
            difficulty for students to manage their applications. The
            application process may take several weeks to several months and
            include different statuses(i.e. interview, declined, pending). This
            web app is designed to help students to track their job-hunting
            efforts in a more intuitive way.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
