import React, { useState } from "react";
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

  // useEffect(() => {
  //   if (currentUser) {
  //     console.log(currentUser._id);
  //   } else {
  //     console.log("err");
  //   }
  // }, [currentUser]);

  return (
    <div className="ui container segments">
      <form onSubmit={handleSubmit}>
        <h2 className="ui header">Login</h2>
        <div className="ui form">
          <div className="ui feild">
            <label className="ui pointing blue basic label">Email :</label>
            <input
              placeholder="Email"
              className="form-control"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="ui divider"></div>
          <div className="feild">
            <label className={"ui pointing blue basic label"}>Password :</label>
            {password.length > 0 && password.length < 6 ? (
              <div className={"ui right pointing red basic label"}>
                Your password must be 6 characters or more
              </div>
            ) : null}
            <input
              className="form-control"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="ui divider"></div>
            <button
              type="submit"
              className={`${
                email && password ? "ui blue button" : "ui blue disabled button"
              } `}
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          {/* {currentUser ? <div>yess</div> : <div>Nooo</div>} */}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
