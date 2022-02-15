import React from "react";
import { connect } from "react-redux";
import ProjectCard from "../components/project/ProjectCard";
import AuthenticationPage from "./authenticationPage";

const HomePage = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div className="ui container">
          <h1 className="ui header">
            Here are some best projects on our website
          </h1>
          <ProjectCard
            key={112}
            title={"React js project about posts"}
            description={
              "So it will display help you so muc so please do share ans use it."
            }
            price={"5566"}
            catagory={"IT"}
            imageUrl={"https://i.ibb.co/ypkgK0X/blue-beanie.png"}
          />
          <ProjectCard
            key={112}
            title={"React js project about posts"}
            description={
              "So it will display help you so muc so please do share ans use it."
            }
            price={"5566"}
            catagory={"IT"}
            imageUrl={"https://i.ibb.co/ypkgK0X/blue-beanie.png"}
          />
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
