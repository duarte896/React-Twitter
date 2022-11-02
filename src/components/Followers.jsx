import "./Follower-ing.css";

function Followers() {
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-3">leftSidebar"</div>
        <div class="col-6">
          <div class="d-flex mb-3 mt-3">
            <a href="/profile/<%= user.id %>">
              <i class="fa-solid fa-arrow-left"></i>
            </a>
            <div class="userinfo ms-5">
              <h5>nombre y apellido</h5>
              <h6>@nombre de usuario</h6>
            </div>
          </div>
          <div>
            <a href="/profile/<%= user._id %>/followers">numero de Followers</a>
            <a href="/profile/<%= user._id %>/following">numero de Following</a>
          </div>
          <div id="follower">
            <div class="box d-flex justify-content-between">
              <div class="d-flex">
                <div class="followerPhoto">
                  <img
                    src="<%=follower.avatar%>"
                    alt="Foto de perfil de usuario"
                  />
                </div>
                <div>
                  <h5 class="me-2">
                    <a href="/profile/<%= follower._id %>/followers">
                      nombre y apellido
                    </a>
                  </h5>
                  <h6 class="user card-subtitle mb-2 text-muted">
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

                  <button class="btn btn-tweet rounded-pill" type="submit">
                    Following
                  </button>

                  <button class="btn btn-tweet rounded-pill" type="submit">
                    Follow
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">rightSidebar"</div>
      </div>
    </div>
  </div>;
}
export default Followers;
