import "./Login-Signup.css";
import signupLogo from "../img/logoLoginRegister.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [eMail, setEMail] = useState({});
  const [userName, setUserName] = useState({});
  const [password, setPassword] = useState({});
  const [avatar, setAvatar] = useState({});

  const createUser = async () => {
    const response = await axios({
      method: "POST",
      url: "localhost:8000/signup",
      data: {
        firstname: firstName,
        lastname: lastName,
        username: eMail,
        email: userName,
        password: password,
        avatar: avatar,
      },
      params: {
        // Aquí se pueden pasar parámetros que irían en el query string.
      },
    });
  };

  return (
    <main id="background">
      <div className="container">
        <div className="row">
          <div id="left" className="col-5 col-lg-7 text-white">
            <img className="margin-aligment" src={signupLogo} alt="logo" />
            <h2 className="margin-aligment">Hi! Welcome to Twitter Clone 👋</h2>
          </div>
          <div id="right" className="col bg-white">
            <form
              className="formRegister"
              method="post"
              onSubmit={(e) => {
                createUser(), e.preventDefault();
              }}
            >
              <h2>Sign up</h2>
              <small>Create and account and star using Twitter</small>
              <div className="mb-1">
                <label htmlFor="firstname" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="lastname" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(event) => setEMail(event.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="avatar" className="form-label"></label>
                <input
                  className="form-control"
                  type="file"
                  id="avatar"
                  name="avatar"
                  placeholder="Choose file..."
                  onChange={(event) => setAvatar(event.target.value)}
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
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="repeatPassword" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                />
              </div>
              <button
                id="skyBlueButtom"
                type="submit"
                className="form-control rounded-pill  text-white"
              >
                Sign up
              </button>
              <div className="text-center">
                <Link to="/login" id="linkRegister">
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Signup;
