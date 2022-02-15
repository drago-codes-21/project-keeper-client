import React from "react";
import GoogleLogin from "../components/auth/GoogleLogin";
import Login from "../components/auth/Login";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
const AuthenticationPage = ({ currentUser }) => {
  return (
    <div className="container">
      <Login />
      <div className="buttons">
        <GoogleLogin />
        <Link to="/phoneLogin">
          <button className="ui red goodle button" type="button">
            <AiFillPhone className="ui large icon" />
            PhoneLogin
          </button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(AuthenticationPage);
