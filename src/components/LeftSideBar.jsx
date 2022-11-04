import "./LeftSideBar.css";
import HomeSvg from "../img/HomeImage.svg";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import TwitterLogoImage from "../img/TwitterLogoImage.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LeftSidebar() {
  const user = useSelector((state) => state.user[0].loggedUser);

  return (
    <div className="izquierdo mt-4 d-flex flex-column justify-content-between position-fixed">
      <div className="d-flex flex-column">
        <Link to="/" className="mb-4">
          <img src={TwitterLogoImage} alt="Home Icon" />
        </Link>
        <Link to="/" className="mb-4 links">
          <img className="me-4" src={HomeSvg} alt="Home Icon" />
          Home
        </Link>
        <Link to={`/profile/${user.username}`} className="mb-4 asdf links">
          <img className="me-4" src={ProfileButtonImage} alt="Home Icon" />
          Profile
        </Link>
        <div className="d-grid gap-2">
          <Link
            to="/"
            id="btn-tweet"
            className="btn btn-tweet rounded-pill"
            role="button"
          >
            Tweet
          </Link>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="btn-popover"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="<a href='/logout'>Log out @<%= user.username  %></a>"
          data-bs-html="true"
        >
          <img src={ProfileButtonImage} alt="" />
        </button>
      </div>
    </div>
  );
}

export default LeftSidebar;
