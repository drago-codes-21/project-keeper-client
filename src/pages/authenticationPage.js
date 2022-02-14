import React from "react";
import EmailLogin from "../components/auth/EmailLogin";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import PhoneLogin from "../components/auth/PhoneLogin";

const AuthenticationPage = () => {
  return (
    <div className="container">
      <div className="authPage">
        <Login />
        <Register />
      </div>
      <EmailLogin />
      <PhoneLogin />
    </div>
  );
};

export default AuthenticationPage;
