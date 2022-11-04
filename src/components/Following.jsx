import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Follower-ing.css";
import RightSidebar from "./RightSideBar";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSideBar";
import axios from "axios";

function Following() {
  const [loggedUserFollowing, setLoggedUserFollowing] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();

  const token = useSelector((state) => state.user[0].token);

  useEffect(() => {
    const getfollowing = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/profile/${params.username}/following`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFollowingList(response.data.user.following);
      setLoggedUserFollowing(response.data.loggedUser);
      setUser(response.data.user);
    };
    getfollowing();
  }, []);

  return (
    user && (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <LeftSidebar />
            </div>
            <div className="col-6">
              <div className="d-flex mb-3 mt-3">
                <Link to={`/profile/${user.username}`}>back </Link>
                <div className="userinfo ms-5">
                  <h5>{user.firstname + " " + user.lastname}</h5>
                  <h6>@{user.username}</h6>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user.username}/followers`}>
                  Followers
                </Link>
                <Link to={`/profile/${user.username}/following`}>
                  Following
                </Link>
              </div>
              <div id="following">
                {followingList.map((following) => {
                  return (
                    <div className="box d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="followingPhoto">
                          <img
                            src={following.avatar}
                            alt="Foto de perfil de usuario"
                          />
                        </div>
                        <div>
                          <h5 className="me-2">
                            <Link to={`/profile/${following.username}`}>
                              {following.firstname + " " + following.lastname}
                            </Link>
                          </h5>
                          <h6 className="user card-subtitle mb-2 text-muted">
                            {following.username}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <form
                          action="/user/<%=follower._id%>/2/follow"
                          method="post"
                        >
                          {loggedUserFollowing.includes(following._id) ? (
                            <button
                              className="btn btn-tweet rounded-pill"
                              type="submit"
                            >
                              Following
                            </button>
                          ) : (
                            <button
                              className="btn btn-tweet rounded-pill"
                              type="submit"
                            >
                              Follow
                            </button>
                          )}
                        </form>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default Following;
