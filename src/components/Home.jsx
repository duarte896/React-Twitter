import "./Home.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import HomeTweet from "./HomeTweet";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/",
      });
      console.log(response.data);
      setTweets(response.data);
    };

    getTweets();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <LeftSidebar />
          </div>
          <div className="col-8">
            <div>
              <h2 id="titleHome">Home</h2>
              <div className="d-flex" id="tweet">
                <div className="tweetFoto">
                  <img
                    src={ProfileButtonImage}
                    alt="Foto de perfil de usuario"
                  />
                </div>
                <form action="/tweet/store" method="post">
                  <p>
                    <input type="hidden" id="user" name="user" />
                  </p>
                  <textarea
                    name="tweetContent"
                    id="tweetContent"
                    placeholder="What's happening?"
                    cols="40"
                    rows="3"
                    maxLength="140"
                  ></textarea>
                  <div className="btn-form">
                    <button
                      id="btn-tweet"
                      className="btn btn-tweet rounded-pill"
                      type="submit"
                    >
                      Tweet
                    </button>
                  </div>
                </form>
              </div>
              {tweets &&
                tweets.map((tweet) => {
                  return <HomeTweet key={tweet._id} tweet={tweet} />;
                })}
            </div>
          </div>
          <div className="col-2">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
