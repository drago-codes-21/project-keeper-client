import React from "react";
import { connect } from "react-redux";
import AuthenticationPage from "./authenticationPage";
import SampleData from "../components/sample/SampleData";
const HomePage = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div className="container">
          <h1 className="ui header " style={{ marginLeft: "400px" }}>
            Best projects on our website
          </h1>
          <SampleData />
        </div>
      ) : (
        <AuthenticationPage />
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
