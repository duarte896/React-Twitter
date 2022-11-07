import "./LeftSideBar.css";
import HomeSvg from "../img/HomeImage.svg";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import TwitterLogoImage from "../img/TwitterLogoImage.svg";
import TweetLogoImage from "../img/logoTweetHome.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../redux/usersSlice";
import { Button } from "react-bootstrap";

function LeftSidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user[0].loggedUser);
  function handleSubmitLogout() {
    dispatch(reset());
  }
  return (
    <div className="izquierdo mt-4  position-fixed">
      <div className="d-flex flex-column">
        <Link to="/" className="mb-4 d-block">
          <img src={TwitterLogoImage} alt="Home Icon" />
        </Link>
        <Link to="/" className="mb-3 links">
          <img className="me-4" src={HomeSvg} alt="Home Icon" />
          <p className="link-sidebar">Home</p>
        </Link>
        <Link to={`/profile/${user.username}`} className="mb-4 links">
          <img className="me-4" src={ProfileButtonImage} alt="Home Icon" />
          <p className="link-sidebar">Profile</p>
        </Link>
      </div>
      <div className="tweet-div">
        <button id="btn-tweet" className=" btn rounded-pill w-100 ">
          <Link to="/" className=" btn-tweet-link">
            Tweet
          </Link>
          <Link to="/" className="tweet-logo btn-tweet-link">
            <img src={TweetLogoImage} />
          </Link>
        </button>
      </div>
      <div className="tweet-div position-absolute bottom-0">
        <form onSubmit={handleSubmitLogout}>
          <Button
            className="  rounded-pill  w-100"
            type="submit"
            variant="danger"
          >
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LeftSidebar;
