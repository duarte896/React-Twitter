import "./Home.css";
import RightSidebar from "./RightSideBar";
import LeftSidebar from "./LeftSideBar";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";
import HomeTweets from "./HomeTweets";
import axios from "axios";
function Home() {
  const getTweets = async () => {
    const response = await axios.get(`https://localhost:8000/`);

    setMovies([...movies, ...response.data.results]);
    setLoaded(true);
    //el spread es para que cada vez que se setee movies se agregue lo anterior para que funque el scroll infinito
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <LeftSidebar />
          </div>
          <div className="col-8">
            <div>
              <h2 id="titleHome">Home</h2>
              <div className="d-flex" id="tweet">
                <div className="tweetFoto">
                  <img
                    src={ProfileButtonImage}
                    alt="Foto de perfil de usuario"
                  />
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
              <HomeTweets />
            </div>
          </div>
          <div className="col-2">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
