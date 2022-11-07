import "./HomeTweets.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import axios from "axios";

function ProfileTweet({ tweet, author, toggle, setToggle }) {
  const user = useSelector((state) => state.user);
  const handleSubmitLike = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/tweet/${tweet._id}/like`,
      data: {
        content: `${user[0].loggedUser.id}`,
      },
      params: { id: tweet._id },
      headers: { Authorization: `Bearer ${user[0].token}` },
    });
    setToggle(!toggle);
  };

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/tweet/${tweet._id}`,

      headers: { Authorization: `Bearer ${user[0].token}` },
    });
    setToggle(!toggle);
  };
  console.log(user[0].loggedUser);
  return (
    <div className="d-flex flex-column">
      <div id="tweet">
        <div className="d-flex">
          <div className="tweetFoto">
            <img src={author.avatar} alt="Foto de perfil de usuario" />
          </div>
          <div>
            <div className="tweetUser d-flex">
              <h5 className="me-2">
                <Link className="nameLink" to={``}>
                  {author.firstname + " " + author.lastname}
                </Link>
              </h5>
              <h6 className="user card-subtitle mb-2 text-muted">
                @{author.username}
              </h6>
            </div>
            <div className="d-flex justify-content-between ">
              <p className="card-text">{tweet.content}</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <form className="marginHeart" onSubmit={handleSubmitLike}>
            <p>
              <input type="hidden" id="user" name="user" value="" />
            </p>

            <button type="submit">
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <label htmlFor="">{tweet.likes.length}</label>
          </form>
          {author.email === user[0].loggedUser.email && (
            <form onSubmit={handleSubmitDelete}>
              <button type="submit" className="trash">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileTweet;
