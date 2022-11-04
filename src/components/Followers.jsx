import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Follower-ing.css";
import RightSidebar from "./RightSideBar";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSideBar";
import axios from "axios";

function Followers() {
  const [followerList, setFollowerList] = useState([]);
  const params = useParams();

  const token = useSelector((state) => state.user[0].token);
  console.log(token);

  const getFollowers = async () => {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8000/profile/${params.id}/followers`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFollowerList(response.data);
  };
  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <LeftSidebar />
          </div>
          <div className="col-6">
            <div className="d-flex mb-3 mt-3">
              <Link to="/profile">back </Link>
              <div className="userinfo ms-5">
                <h5>nombre y apellido</h5>
                <h6>@nombre de usuario</h6>
              </div>
            </div>
            <div>
              <Link to="/followers">numero de Followers </Link>
              <Link to="/following">numero de Following</Link>
            </div>
            <div id="follower">
              <div className="box d-flex justify-content-between">
                <div className="d-flex">
                  <div className="followerPhoto">
                    <img src="" alt="Foto de perfil de usuario" />
                  </div>
                  <div>
                    <h5 className="me-2">
                      <a href="/profile/<%= follower._id %>/followers">
                        nombre y apellido
                      </a>
                    </h5>
                    <h6 className="user card-subtitle mb-2 text-muted">
                      nombre de usuario
                    </h6>
                  </div>
                </div>
                <div>
                  <form action="/user/<%=follower._id%>/2/follow" method="post">
                    <p>
                      <input
                        type="hidden"
                        id="user"
                        name="user"
                        value="<%= loggeduser.id %>"
                      />
                    </p>
                    <p>
                      <input
                        type="hidden"
                        id="user"
                        name="hostuser"
                        value="<%= user.id %>"
                      />
                    </p>

                    <button
                      className="btn btn-tweet rounded-pill"
                      type="submit"
                    >
                      Following
                    </button>

                    <button
                      className="btn btn-tweet rounded-pill"
                      type="submit"
                    >
                      Follow
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Followers;
