import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  addNewProject,
  getAllProjects,
} from "../../redux/project/project.actions";
import ProjectCard from "./ProjectCard";

const ProjectForm = ({
  newProject,
  addNewProject,
  currentUser,
  projectData,
  getAllProjects,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [postData, setPostData] = useState(null);
  const [Id, setId] = useState("");

  // const [proj, setProj] = useState("");
  const server = "http://localhost:7070/api/project/new";
  const server2 = "http://localhost:7070/api/project/all/projects";

  // const addToFavourites = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.get(
  //     `http://localhost:7070/api/project/${postData._id}`
  //   );
  //   console.log(response);
  // };

  const getAllProductsHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(server2);
    const data = response.data;
    console.log(data);
    setPostData(data);
    setImageUrl(data.imageUrl);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      server,
      JSON.stringify({
        userId: Id,
        title,
        catagory,
        price,
        description,
        imageUrl,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = response.data;
    console.log(data);
    if (response.statusText === "OK") {
      addNewProject(data);
    }
  };
  useEffect(() => {
    addNewProject();
  }, [addNewProject]);
  useEffect(() => {
    if (currentUser._id) {
      setId(currentUser._id);
    } else {
      setId(currentUser.accessToken);
      console.log(currentUser.accessToken);
    }
  }, [currentUser]);
  useEffect(() => {
    getAllProjects(projectData);
  }, [projectData, getAllProjects]);
  useEffect(() => {}, []);
  return (
    <div className="ui container">
      <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="form-group">
            <label className="ui pointing blue basic label">Title</label>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="ui pointing blue basic label">Description</label>
            <input
              placeholder="Add some description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="ui pointing blue basic label">Catagory</label>
            <input
              placeholder="Mention project's catagory"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="ui pointing blue basic label">Price</label>
            <input
              placeholder="Price in $"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="ui pointing blue basic label">Image url</label>
            <input
              placeholder="put image link"
              value={imageUrl}
              type="text"
              className="form-control"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="ui blue button"
            onClick={() => addNewProject(newProject)}
          >
            Submit
          </button>
          <button className="ui red button " onClick={getAllProductsHandler}>
            Get All Public Projects
          </button>

          <div className="ui link cards">
            {currentUser && postData
              ? postData.map((item) => {
                  return (
                    <ProjectCard
                      key={item._id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      catagory={item.catagory}
                      imageUrl={imageUrl}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ project, user, data }) => ({
  newProject: project,
  currentUser: user.currentUser,
  projectData: data,
});
const mapDispatchToProps = (dispatch) => ({
  addNewProject: (project) => dispatch(addNewProject(project)),
  getAllProjects: (data) => dispatch(getAllProjects(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
