import "./Login-Signup.css";
import loginLogo from "../img/logoLoginRegister.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <main id="background">
      <div className="container">
        <div className="row" id="cardHeight">
          <div id="left" className="col-5 col-lg-7 text-white">
            <img className="margin-aligment" src={loginLogo} alt="logo " />
            <h2 className="margin-aligment">Hi! Welcome to Twitter Clone 👋</h2>
          </div>
          <div id="right" className="col bg-white">
            <form className="formLogin" action="">
              <h2>Login</h2>
              <small>Ready to start using Twitter?</small>
              <div className="mb-1">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button
                id="skyBlueButtom"
                type="submit"
                className="form-control rounded-pill  text-white"
              >
                Login
              </button>
              <div className="text-center">
                <Link to="/signup" id="linkRegister">
                  Don't have an account? Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Login;
