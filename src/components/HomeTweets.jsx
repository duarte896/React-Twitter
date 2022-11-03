import "./HomeTweets.css";
import ProfileButtonImage from "../img/ProfileButtonImage.svg";

function HomeTweets() {
  return (
    <div class="d-flex flex-column">
      <div id="tweet">
        <div class="d-flex">
          <div class="tweetFoto">
            <img src={ProfileButtonImage} alt="Foto de perfil de usuario" />
          </div>
          <div>
            <div class="tweetUser d-flex">
              <h5 class="me-2">
                <a href="/profile/<%= tweets[i].author._id %> ">
                  Nombre del usuario
                </a>
              </h5>
              <h6 class="user card-subtitle mb-2 text-muted">
                @Fulano.DeTal99
              </h6>
            </div>
            <p class="card-text">
              contenido del tweet Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ea, sint?
            </p>
          </div>
        </div>
        <div class="actions">
          <form
            class="marginHeart"
            action="/tweet/<%= tweets[i].id %>/like"
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

            <button type="submit">
              <i class="fa-solid fa-heart"></i>
            </button>

            <label for="">aca iria el numero de likes</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeTweets;
