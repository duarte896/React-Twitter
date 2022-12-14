import "./HomeTweets.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

function HomeTweet({ tweet, user, toggle, setToggle }) {
  const handleSubmitLike = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/tweet/${tweet._id}/like`,

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

  return (
    <div className="d-flex flex-column">
      <div id="tweet">
        <div className="d-flex">
          <div className="tweetFoto">
            <img src={tweet.author.avatar} alt="Foto de perfil de usuario" />
          </div>
          <div>
            <div className="tweetUser d-flex">
              <h5 className="me-2">
                <Link
                  className="nameLink"
                  to={`/profile/${tweet.author.username}`}
                >
                  {tweet.author.firstname + " " + tweet.author.lastname}
                </Link>
              </h5>
              <h6 className="user card-subtitle mb-2 text-muted">
                @{tweet.author.username}
              </h6>
            </div>
            <div>
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
              {/*  <i className="bi bi-heart-fill text-danger"></i>
              <i className="bi bi-heart"></i> */}
              <i
                className={
                  tweet.likes.includes(user[0].loggedUser.id)
                    ? "bi bi-heart-fill text-danger"
                    : "bi bi-heart"
                }
              ></i>
            </button>

            <label htmlFor="">{tweet.likes.length}</label>
          </form>
          {tweet.author.email === user[0].loggedUser.email && (
            <form onSubmit={handleSubmitDelete}>
              <button type="submit" className="trash text-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeTweet;
