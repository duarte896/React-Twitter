import "./Profile.css";

function Profile() {
  return (
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-2">left sidebar</div>
          <div class="col-8">
            <div class="costumBorder">
              <div class="background"></div>

              <div class="profilePhoto">
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

                  <button type="submit" class="btn btn-tweet rounded-pill mb-3">
                    Following
                  </button>

                  <button type="submit" class="btn btn-tweet rounded-pill mb-3">
                    Follow
                  </button>
                </form>
              </div>
              <div class="profileinfo d-flex justify-content-between">
                <div class="userinfo">
                  <h3>Nombre y apellido</h3>
                  <h6 class="text-muted">nombre de usuario</h6>
                </div>
                <div class="userInteraction d-flex align-items-end">
                  <a
                    class="text-muted"
                    href="/profile/<%= user._id %>/followers"
                  >
                    Followers
                  </a>

                  <a
                    class="ms-5 text-muted"
                    href="/profile/<%= user._id %>/following"
                  >
                    Following
                  </a>
                </div>
              </div>
              <div class="alignTweet d-inline-block">
                <span>Tweets</span>
                <div id="spanDiv"></div>
              </div>
            </div>
          </div>
          <div class="col-2">right sidebar</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
