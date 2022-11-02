import "./Home.css";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-2">
            {/* <%- include("partials/leftSidebar") %> */}
          </div>
          <div className="col-8">
            <div>
              <h2 id="titleHome">Home</h2>
              <div className="d-flex" id="tweet">
                <div className="tweetFoto">
                  <img alt="Foto de perfil de usuario" />
                </div>
                <form action="/tweet/store" method="post">
                  <p>
                    <input type="hidden" id="user" name="user" />
                  </p>
                  <textarea
                    name="tweetContent"
                    id="tweetContent"
                    placeholder="What's happening?"
                    cols="40"
                    rows="3"
                    maxLength="140"
                  ></textarea>
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
              {/* <%- include("partials/homeTweets") %> */}
            </div>
          </div>
          <div className="col-2">
            {/* <%- include("partials/rightSidebar") %> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
