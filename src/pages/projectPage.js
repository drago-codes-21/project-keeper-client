import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProjectForm from "../components/project/ProjectForm";
const ProjectPage = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <ProjectForm />
      ) : (
        <div>
          <h1>You should login first</h1>
          <Link to="/auth">
            <button className="btn btn-primary">Sign In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(ProjectPage);
