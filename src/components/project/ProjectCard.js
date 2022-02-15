import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { toggleSavedProject } from "../../redux/project/project.actions";
const ProjectCard = (project) => {
  const { title, description, catagory, price, imageUrl } = project;
  // const [projectId, setProjectId] = useState(null);
  const [like, setLike] = useState(false);
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt="profile" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">{catagory}</div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">Public</span>
        <span>Price :{price} $</span>
      </div>
      <div
        className={`${like ? "ui red button" : "ui black button"}`}
        onClick={() => setLike(!like)}
      >
        <i className="heart icon"></i> Like
      </div>
      <button className="ui blue button" onClick={""}>
        ADD
      </button>
      {/* {console.log({ project._id })} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedCollection: state.savedCollection,
});
const mapDispatchToProps = (dispatch) => ({
  toggleSavedProject: (project) => dispatch(toggleSavedProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
