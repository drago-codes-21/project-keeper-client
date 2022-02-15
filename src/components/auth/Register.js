import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dt, setDt] = useState("");
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
    setDt(response);
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
                  Login
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </article>
    // <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    //   <main className="pa4 black-80">
    //     <div className=" measure">
    // <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    //         <legend className="f1 fw6 ph0 mh0">Register</legend>
    //         <div className="mt3">
    //           <label className="db fw6 lh-copy f6" htmlFor="name">
    //             Name
    //           </label>
    //           <input
    //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //             type="text"
    //             name="name"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </div>
    //         <div className="mt3">
    //           <label className="db fw6 lh-copy f6" htmlFor="email-address">
    //             Email
    //           </label>
    //           <input
    //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //             type="email"
    //             name="email-address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="mv3">
    //           <label className="db fw6 lh-copy f6" htmlFor="password">
    //             Password
    //           </label>
    //           <input
    //             className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //             type="password"
    //             name="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //       </fieldset>
    //       <div className="">
    // {/* <input
    //   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
    //   type="submit"
    //   value="Register"
    //   onSubmit={handleSubmit}
    // /> */}
    //         <button onSubmit={handleSubmit}>SUb</button>
    //       </div>
    //     </div>
    //   </main>
    // </article>
  );
};

export default Register;
