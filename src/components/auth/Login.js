import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

const Login = ({ currentUser, setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const server = "http://localhost:7070/api/auth/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      server,
      JSON.stringify({ email, password }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = response.data;
    console.log(response);
    // console.log(response.data);
    // console.log({ ...data });
    if (response.statusText === "OK") {
      setCurrentUser({ ...data });
    }
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser._id);
    } else {
      console.log("err");
    }
  }, [currentUser]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="options">
        <div className="form-group">
          <label>Email address</label>
          <input
            placeholder="Email"
            className="form-control"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        {currentUser ? <div>yess</div> : <div>Nooo</div>}
      </div>
    </form>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
