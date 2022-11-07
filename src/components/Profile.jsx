import { Link } from "react-router-dom";
import "./Profile.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile() {
  const params = useParams();
  const loggedUser = useSelector((state) => state.user[0]);
  const [userTweets, setUserTweets] = useState([]);
  const [user, setUser] = useState([]);
  const [loggedUserFollowing, setLoggedUserFollowing] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",

        url: `http://localhost:8000/profile/${params.username}`,
        headers: { Authorization: `Bearer ${loggedUser.token}` },
      });
      setUserTweets(response.data.user.tweets);
      setLoggedUserFollowing(response.data.loggedUserFollowing);
      setFollowerList(response.data.user.followers);
      setFollowingList(response.data.user.following);
      setUser(response.data.user);
    };
    getUser();
  }, []);
  console.log(user._id);
  console.log(loggedUser.loggedUser.id);
  return (
    user && (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <LeftSidebar />
            </div>
            <div className="col-8">
              <div className="costumBorder">
                <div className="background"></div>

                <div className="profilePhoto">
                  <img src={user.avatar} alt="Imagen de usuario" />

                  {user._id !== loggedUser.loggedUser.id && (
                    <form action="/user/<%=user._id%>/follow" method="post">
                      {1 < 0 ? (
                        <button
                          type="submit"
                          className="btn btn-tweet rounded-pill mb-3"
                        >
                          Following
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-tweet rounded-pill mb-3"
                        >
                          Follow
                        </button>
                      )}
                    </form>
                  )}
                </div>
                <div className="profileinfo d-flex justify-content-between">
                  <div className="userinfo">
                    <h3>{user.firstname + " " + user.lastname}</h3>
                    <h6 className="text-muted">{"@" + user.username}</h6>
                  </div>
                  <div className="userInteraction d-flex align-items-end">
                    <Link
                      className="text-muted me-2"
                      to={`/profile/${user.username}/followers`}
                    >
                      {followerList.length} Followers
                    </Link>
                    <Link
                      className="text-muted"
                      to={`/profile/${user.username}/following`}
                    >
                      {followingList.length} Following
                    </Link>
                  </div>
                </div>
                <div className="alignTweet d-inline-block">
                  <span>Tweets</span>
                  <div id="spanDiv"></div>
                </div>
              </div>
              {userTweets &&
                userTweets.map((tweet) => {
                  return (
                    <div key={tweet._id} className="d-flex flex-column">
                      <div id="tweet">
                        <div className="d-flex">
                          <div className="tweetFoto">
                            <img
                              src={user.avatar}
                              alt="Foto de perfil de usuario"
                            />
                          </div>
                          <div>
                            <div className="tweetUser d-flex">
                              <h5 className="me-2">
                                <Link
                                  className="nameLink"
                                  to={`/profile/${user.username}`}
                                >
                                  {user.firstname + " " + user.lastname}
                                </Link>
                              </h5>
                              <h6 className="user card-subtitle mb-2 text-muted">
                                {"@" + user.username + " . " + tweet.createdAt}
                              </h6>
                            </div>
                            <p className="card-text">{tweet.content}</p>
                          </div>
                        </div>
                        <div className="actions">
                          <form
                            className="marginHeart"
                            action="/tweet/<%= tweets[i].id %>/like"
                            method="post"
                          >
                            <button type="submit">
                              <i className="fa-solid fa-heart"></i>
                            </button>

                            <label htmlFor="">
                              aca iria el numero de likes
                            </label>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-2">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
