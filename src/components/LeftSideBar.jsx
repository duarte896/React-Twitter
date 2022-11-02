import "./LeftSideBar.css";
import HomeSvg from "../img/HomeImage.svg";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import TwitterLogoImage from "../img/TwitterLogoImage.svg";

function leftSidebar() {
  return (
    <div class="izquierdo mt-4 d-flex flex-column justify-content-between position-fixed">
      <div class="d-flex flex-column">
        <a class="mb-4" href="/">
          <img src={TwitterLogoImage} alt="Home Icon" />
        </a>
        <a class="mb-4 links" href="/">
          <img class="me-4" src={HomeSvg} alt="Home Icon" />
          Home
        </a>
        <a class="mb-4 asdf links" href="/profile/<%= loggeduser._id  %> ">
          <img class="me-4" src={ProfileButtonImage} alt="Home Icon" />
          Profile
        </a>
        <div class="d-grid gap-2">
          <a
            id="btn-tweet"
            class="btn btn-tweet rounded-pill"
            href="/"
            role="button"
          >
            Tweet
          </a>
        </div>
      </div>

      <div>
        <button
          type="button"
          class="btn-popover"
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

export default leftSidebar;
