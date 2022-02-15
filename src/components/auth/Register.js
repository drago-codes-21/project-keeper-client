import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const server = "http://localhost:7070/api/auth/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      server,
      JSON.stringify({ username, email, password }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
  };

  return (
    <div className="ui container segments">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="ui form">
          <div className="ui feild">
            <label className="ui pointing blue basic label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="ui feild">
            <label className="ui pointing blue basic label">
              Email address
            </label>
            <input
              placeholder="Email"
              className="form-control"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="ui feild">
            <label className="ui pointing blue basic label">Password</label>
            <input
              placeholder="Password"
              className="form-control"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/auth">
              <button type="submit" className="ui red button">
                Register
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
