import "./HomeTweets.css";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function HomeTweets() {
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const response = await axios.get(`http://localhost:8000/`);

    setTweets([response.data.tweets]);
    console.log(response.data.tweets);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="d-flex flex-column">
      <div id="tweet">
        <div className="d-flex">
          <div className="tweetFoto">
            <img src={ProfileButtonImage} alt="Foto de perfil de usuario" />
          </div>
          <div>
            <div className="tweetUser d-flex">
              <h5 className="me-2">
                <a href="/profile/<%= tweets[i].author._id %> ">
                  Nombre del usuario
                </a>
              </h5>
              <h6 className="user card-subtitle mb-2 text-muted">
                @Fulano.DeTal99
              </h6>
            </div>
            <p className="card-text">
              contenido del tweet Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ea, sint?
            </p>
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

export default HomeTweets;
