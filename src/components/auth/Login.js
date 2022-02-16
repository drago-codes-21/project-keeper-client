import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_SERVER,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      console.log(response);
      if (response.statusText === "OK") {
        setCurrentUser({ ...data });
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <form onSubmit={handleSubmit}>
            <legend className="f1 fw6 ph0 mh0">Login</legend>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
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
                {password.length > 0 && password.length < 6 ? (
                  <div className={"ui right pointing blue basic label"}>
                    Your password must be 6 characters or more
                  </div>
                ) : null}
                <label className="db fw6 lh-copy f6">Password</label>
                <input
                  placeholder="Password"
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="ui divider"></div>
                {error ? (
                  <label
                    htmlFor="phoneNum"
                    className="ui pointing red basic label"
                  >
                    Please check your credentials
                  </label>
                ) : null}

                <button
                  type="submit"
                  className={`${
                    email && password.length > 5
                      ? "ui black button"
                      : "ui black disabled button"
                  } " grow pointer f6 dib"`}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
