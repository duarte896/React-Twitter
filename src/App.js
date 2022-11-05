import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Following from "./components/Following";
import NoMatch from "./components/NoMatch";
import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user.length === 0 ? <Navigate replace to="/login" /> : <Home />
          }
        />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/:username/followers" element={<Followers />} />
        <Route path="/profile/:username/following" element={<Following />} />
        <Route
          path="/login"
          element={user.length === 0 ? <Login /> : <Navigate replace to="/" />}
        />
        <Route
          path="/signup"
          element={user.length === 0 ? <Signup /> : <Navigate replace to="/" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
