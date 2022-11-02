import "./RightSideBar.css";

function rightSidebar() {
  return (
    <aside className="position-fixed">
      <div className="sidebarTopWrapper mt-4 d-flex flex-column justify-content-between">
        <h2>What´s happening</h2>
        <div>
          <h3>Programming-Trending</h3>
          <p>#MongoVsSequelize</p>
          <span>97.5K Tweets</span>
        </div>
        <div>
          <h3>Entretainment-Trending</h3>
          <p>#StarWars</p>
          <span>97.5K Tweets</span>
        </div>
        <div>
          <h3>News-Trending</h3>
          <p>#LifeInMars</p>
          <span>97.5K Tweets</span>
        </div>
      </div>
      <div className="sidebarBottomWrapper">
        <h2>Who to follow</h2>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex divSuggestions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/181/181549.png"
              alt="profilePicture"
            />
            <div>
              <p>Hack Academy</p>
              <span>@HackAcademyDev</span>
            </div>
          </div>

          <button className="btn btn-primary">Follow</button>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex divSuggestions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/181/181549.png"
              alt="profilePicture"
            />
            <div>
              <p>JavaScript</p>
              <span>@JavaScript</span>
            </div>
          </div>

          <button className="btn btn-primary">Follow</button>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex divSuggestions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/181/181549.png"
              alt="profilePicture"
            />
            <div>
              <p>MongoDB</p>
              <span>@MongoDB</span>
            </div>
          </div>

          <button className="btn btn-primary">Follow</button>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex divSuggestions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/181/181549.png"
              alt="profilePicture"
            />
            <div>
              <p>Node.js</p>
              <span>@Node.js</span>
            </div>
          </div>

          <button className="btn btn-primary">Follow</button>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex divSuggestions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/181/181549.png"
              alt="profilePicture"
            />
            <div>
              <p>MDN Web Docs</p>
              <span>@MozDevNet</span>
            </div>
          </div>

          <button className="btn btn-primary">Follow</button>
        </div>
      </div>
    </aside>
  );
}

export default rightSidebar;
