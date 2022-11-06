import "./HomeTweets.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HomeTweet({ tweet, user, toggle, setToggle }) {
  const handleSubmit = async (e) => {
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
                <Link to={`/profile/${tweet.author.username}`}>
                  {tweet.author.firstname + " " + tweet.author.lastname}
                </Link>
              </h5>
              <h6 className="user card-subtitle mb-2 text-muted">
                @{tweet.author.username}
              </h6>
            </div>
            <div className="d-flex justify-content-between ">
              <p className="card-text">{tweet.content}</p>
              {tweet.author.email === user[0].loggedUser.email && (
                <form onSubmit={handleSubmit}>
                  <button type="submit" className="trash">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="actions">
          <form
            className="marginHeart"
            action="/tweet/<%= tweets[i].id %>/like"
            method="post"
          >
            <p>
              <input
                type="hidden"
                id="user"
                name="user"
                value="<%= loggeduser.id %>"
              />
            </p>

            <button type="submit">
              <i className="fa-solid fa-heart"></i>
            </button>

            <label htmlFor="">aca iria el numero de likes</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeTweet;
