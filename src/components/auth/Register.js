import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      process.env.REACT_APP_REGISTER_SERVER,
      JSON.stringify({ username, email, password }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <form onSubmit={handleSubmit}>
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Username</label>
                <input
                  type="text"
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="ui divider"></div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Email address</label>
                <input
                  placeholder="Email"
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="ui divider"></div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Password</label>
                <input
                  placeholder="Password"
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button
                  type="submit"
                  className={`${
                    email && password && username
                      ? "ui black button"
                      : "ui black disabled button"
                  } " grow pointer f6 dib"`}
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <Link to="/">
                  <button className="ui red button">Login Page</button>
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </article>
  );
};

export default Register;
