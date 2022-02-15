import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { toggleSavedProject } from "../../redux/project/project.actions";
const ProjectCard = (project) => {
  const { title, description, catagory, price, imageUrl } = project;
  // const [projectId, setProjectId] = useState(null);
  const [like, setLike] = useState(false);
  const [favourites, setFavourites] = useState([]);

  // useEffect(() => {
  //   console.log(favourites);
  // }, [favourites]);

  //
  return (
    <div className="card">
      <div className=" imgbox">
        <img src={imageUrl} alt="profile" />
      </div>
      <div className="">
        <div className="header">{title}</div>
        <div className="meta">{catagory}</div>
        <div className="">{description}</div>
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
      <button
        className="ui blue button"
        // onClick={
        //   project
        //     ? project.map((item) => {
        //         return setFavourites(item, ...favourites);
        //       })
        //     : console.log("error")
        // }
      >
        ADD
      </button>
      {console.log(project)}
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
