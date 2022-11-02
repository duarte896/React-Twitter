import "./Follower-ing.css";
import { Link } from "react-router-dom";

function Following() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-3">leftSidebar"</div>
          <div className="col-6">
            <div className="d-flex mb-3 mt-3">
              <Link to="/profile">back </Link>
              <div className="userinfo ms-5">
                <h5>nombre y apellido</h5>
                <h6>nombre de usuario</h6>
              </div>
            </div>
            <div className="w-100 justify-content-center">
              <Link to="/followers">numero de Followers </Link>
              <Link to="/following">numero de Following</Link>
            </div>
            <div id="follower">
              <div className="box d-flex justify-content-between">
                <div className="d-flex">
                  <div className="followerPhoto">
                    <img
                      src="<%=following.avatar%>"
                      alt="Foto de perfil de usuario"
                    />
                  </div>
                  <div>
                    <h5 className="me-2">
                      <a href="/profile/<%= following._id %>/following">
                        Nombre y Apellido
                      </a>
                    </h5>
                    <h6 className="user card-subtitle mb-2 text-muted">
                      @nombre de usuario
                    </h6>
                  </div>
                </div>
                <div>
                  <form
                    action="/user/<%=following._id%>/3/follow"
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
          <div className="col-3">rightSidebar"</div>
        </div>
      </div>
    </div>
  );
}
export default Following;
