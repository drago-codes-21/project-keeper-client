import React, { useState } from "react";
import axios from "axios";
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
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="options">
        <div className="form-group ">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
            placeholder="Password"
            className="form-control"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
