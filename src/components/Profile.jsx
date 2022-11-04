import { Link } from "react-router-dom";
import "./Profile.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const params = useParams();
  console.log(params.id);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8000/profile/${params.id}`,
    });
    setUser(response.data);
  };
  getUser();
  useEffect(() => {
    getUser();
  }, []);
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
                  <img src="" alt="Imagen de usuario" />
                  <form action="/user/<%=user._id%>/follow" method="post">
                    <p>
                      <input
                        type="hidden"
                        id="user"
                        name="user"
                        value="<%= loggeduser.id %>"
                      />
                    </p>

                    <button
                      type="submit"
                      className="btn btn-tweet rounded-pill mb-3"
                    >
                      Following
                    </button>

                    <button
                      type="submit"
                      className="btn btn-tweet rounded-pill mb-3"
                    >
                      Follow
                    </button>
                  </form>
                </div>
                <div className="profileinfo d-flex justify-content-between">
                  <div className="userinfo">
                    <h3>Nombre y apellido</h3>
                    <h6 className="text-muted">nombre de usuario</h6>
                  </div>
                  <div className="userInteraction d-flex align-items-end">
                    <Link className="text-muted" to="/followers">
                      Followers
                    </Link>
                    <Link className="text-muted" to="/following">
                      Following
                    </Link>
                  </div>
                </div>
                <div className="alignTweet d-inline-block">
                  <span>Tweets</span>
                  <div id="spanDiv"></div>
                </div>
              </div>
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
