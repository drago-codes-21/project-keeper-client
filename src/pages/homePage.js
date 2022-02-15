import React from "react";
import { connect } from "react-redux";
import ProjectCard from "../components/project/ProjectCard";
import AuthenticationPage from "./authenticationPage";
import SampleData from "../components/SampleData";
const HomePage = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div className="ui container">
          <h1 className="ui header">
            Here are some best projects on our website
          </h1>
          {/* <div className=" wrapper ">
            
          </div> */}
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
