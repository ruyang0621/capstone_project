import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImg} alt="not found" />
        <h3>Ops! page not found.</h3>
        <p>The page you're looking for cannot be found.</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
