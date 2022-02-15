import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { toggleSavedProject } from "../../redux/project/project.actions";
const ProjectCard = ({ title, description, catagory, price, imageUrl, settingFavPro }) => {
  // const [projectId, setProjectId] = useState(null);
  const [ like, setLike ] = useState(false);
  const [ favourites, setFavourites ] = useState([]);

  // useEffect(() => {
  //   console.log(favourites);
  // }, [favourites]);

  //
  return (
    <div className="col-lg-4 col-mg-6 col-sm-12">
      <div className="card rounded-3 ">
        <img src={imageUrl} alt="profile" className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title fs-3">{title}</h5>
          <div className="card-text mb-2">
            <div> <span className="fw-bold">Catagory:</span> {catagory}</div>
            <div> <span className="fw-bold">Description:</span> {description}</div>
            <div className="extra content">
              {/* <span className="right floated">Public</span> */}
              <span><span className="fw-bold">Price: </span> {price} $</span>
            </div>
          </div>
          <div
            className={`${like ? "btn btn-danger" : "btn btn-dark"} w-100 mb-2`}
            onClick={() => setLike(!like)}
          >
            <i className="heart icon"></i> Like
          </div>
          <div
            className="btn btn-primary w-100"
            onClick={() => {
              // project.map((item) => {
              //     return setFavourites(item, ...favourites);
              //   })
              // let fav = favourites;
              // fav.push(project)
              let project = {
                title: title, description: description, catagory: catagory, price: price, imageUrl: imageUrl
              }
              settingFavPro(project)
              // console.log(project)
              // console.log("error")
            }}
          >
            ADD
          </div>
        </div>
        {/* {console.log(project)} */}
      </div>
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
