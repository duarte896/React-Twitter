import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Follower-ing.css";
import RightSidebar from "./RightSideBar";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSideBar";
import axios from "axios";

function Followers() {
  const [followerList, setFollowerList] = useState([]);
  const [loggedUserFollowing, setLoggedUserFollowing] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();

  const token = useSelector((state) => state.user[0].token);

  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/profile/${params.username}/followers`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFollowerList(response.data.user.followers);
      setLoggedUserFollowing(response.data.loggedUser);
      setUser(response.data.user);
    };
    getFollowers();
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
                <Link className="blackLink" to={`/profile/${user.username}`}>
                  back{" "}
                </Link>
                <div className="userinfo ms-5">
                  <h5>{user.firstname + " " + user.lastname}</h5>
                  <h6>@{user.username}</h6>
                </div>
              </div>
              <div id="head">
                <div className="link">
                  <Link
                    className="blackLink"
                    to={`/profile/${user.username}/followers`}
                  >
                    Followers
                  </Link>
                </div>
                <div className="link">
                  <Link
                    className="blackLink"
                    to={`/profile/${user.username}/following`}
                  >
                    Following
                  </Link>
                </div>
              </div>
              <div id="follower">
                {followerList.map((follower) => {
                  return (
                    <div className="box d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="followerPhoto">
                          <img
                            src={follower.avatar}
                            alt="Foto de perfil de usuario"
                          />
                        </div>
                        <div>
                          <h5 className="me-2">
                            <Link
                              className="blackLink"
                              to={`/profile/${follower.username}`}
                            >
                              {follower.firstname + " " + follower.lastname}
                            </Link>
                          </h5>
                          <h6 className="user card-subtitle mb-2 text-muted">
                            {follower.username}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <form
                          action="/user/<%=follower._id%>/2/follow"
                          method="post"
                        >
                          {loggedUserFollowing.includes(follower._id) ? (
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
export default Followers;
