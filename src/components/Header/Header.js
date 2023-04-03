import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src="" alt="IDP logo" />
        </Link>
      </div>
      <div className="navlinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/fileupload"}>File Upload</Link>
      </div>
    </div>
  );
};

export default Header;
