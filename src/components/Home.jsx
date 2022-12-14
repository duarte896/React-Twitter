import "./Home.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import HomeTweet from "./HomeTweet";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [newTweetContent, setNewTweetContent] = useState("");
  const user = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

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
    setNewTweetContent("");
    setToggle(!toggle);
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
              <div className="d-flex" id="create-tweet">
                <div className="home-image">
                  <img
                    className="tweet-image"
                    src={user[0].loggedUser.avatar}
                    alt="Foto de perfil de usuario"
                  />
                </div>
                <form className="form-home" onSubmit={handleSubmit}>
                  {/* <p>
                    <input type="hidden" id="user" name="user" />
                  </p> */}
                  <div class="mb-3">
                    <label for="tweet-content" class="form-label"></label>
                    <textarea
                      class="form-control"
                      id="tweet-content"
                      placeholder="What's happening?"
                      rows="3"
                      maxLength="140"
                      value={newTweetContent}
                      onChange={(e) => setNewTweetContent(e.target.value)}
                    ></textarea>
                  </div>
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
          <div className="col-sm-12 col-md-2 ">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
