import { Link } from "react-router-dom";
import "./Profile.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import ProfileTweet from "./ProfileTweet";
import { useEffect, useReducer, useState } from "react";
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
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",

        url: `http://localhost:8000/profile/${params.username}`,
        headers: { Authorization: `Bearer ${loggedUser.token}` },
      });
      setUserTweets(response.data.user.tweets);
      setLoggedUserFollowing(response.data.loggedUserfollowing);
      setFollowerList(response.data.user.followers);
      setFollowingList(response.data.user.following);
      setUser(response.data.user);
    };
    getUser();
  }, [toggle, loggedUserFollowing]);

  const handleSubmit = async (e, following) => {
    e.preventDefault();
    const follow = async () => {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/user/${following._id}/follow`,

        headers: { Authorization: `Bearer ${loggedUser.token}` },
        params: {},
      });
    };
    follow();
  };

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

                <div className="profilePhoto" id="prof">
                  <img src={user.avatar} alt="Imagen de usuario" />

                  {user._id !== loggedUser.loggedUser.id && (
                    <>
                      {loggedUserFollowing.includes(user._id) ? (
                        <button
                          type="submit"
                          className="btn btn-tweet rounded-pill mb-3"
                          onClick={(e) => {
                            handleSubmit(e, user);
                          }}
                        >
                          Following
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-tweet rounded-pill mb-3"
                          onClick={(e) => {
                            handleSubmit(e, user);
                          }}
                        >
                          Follow
                        </button>
                      )}
                    </>
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
                    <ProfileTweet
                      key={tweet._id}
                      tweet={tweet}
                      author={user}
                      toggle={toggle}
                      setToggle={setToggle}
                    />
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
