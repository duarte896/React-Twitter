import loginLogo from "../img/logoLoginRegister.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login-Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main id="background">
      <div className="container">
        <div className="row" id="cardHeight">
          <div id="left" className="col-5 col-lg-7 text-white">
            <img className="margin-aligment" src={loginLogo} alt="logo " />
            <h2 className="margin-aligment">Hi! Welcome to Twitter Clone 👋</h2>
          </div>
          <div id="right" className="col bg-white">
            <form className="formLogin" action="" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
