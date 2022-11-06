import "./Home.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import HomeTweet from "./HomeTweet";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [newTweetContent, setNewTweetContent] = useState("");
  const user = useSelector((state) => state.user);
  const [toggle, setToggle] = useState();

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/",
        headers: { Authorization: `Bearer ${user[0].token}` },
      });

      setTweets(response.data);
    };

    getTweets();
  }, [toggle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/tweet/store`,
      data: {
        content: `${newTweetContent}`,
      },
      headers: { Authorization: `Bearer ${user[0].token}` },
      params: {},
    });
    setToggle(!toggle);
    console.log("hola");
  };

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
                <form onSubmit={handleSubmit}>
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
                    value={newTweetContent}
                    onChange={(e) => setNewTweetContent(e.target.value)}
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
                  return (
                    <HomeTweet
                      key={tweet._id}
                      tweet={tweet}
                      user={user}
                      toggle={toggle}
                      setToggle={setToggle}
                    />
                  );
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
