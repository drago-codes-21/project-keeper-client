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
  const [postData, setPostData] = useState(null);

  const server = "http://localhost:7070/api/project/new";
  const server2 = "http://localhost:7070/api/project/all/projects";

  const getAllProductsHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(server2);
    const data = response.data;
    console.log(data);
    setPostData(data);
    getAllProjects({ ...data });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      server,
      JSON.stringify({
        userId: currentUser._id,
        title,
        catagory,
        price,
        description,
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
    // console.log(data._id);
    // getProduct(data._id);
  };
  useEffect(() => {
    addNewProject();
  }, [addNewProject]);
  useEffect(() => {
    if (currentUser) {
      console.log("post render with user");
    } else {
      console.log("without user");
    }
  }, [currentUser]);
  useEffect(() => {
    getAllProjects(projectData);
  }, [projectData, getAllProjects]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-group">
          <label>Title</label>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            placeholder="Add some description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Catagory</label>
          <input
            placeholder="Mention project's catagory"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            placeholder="Price in $"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        {/* <div className="form-group">
          <label>Image Url</label>
          <input
            placeholder=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="url"
            className="form-control"
          /> */}
        {/* </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => addNewProject(newProject)}
        >
          Submit
        </button>
        {/* <ProjectCard project={newProject} /> */}

        <button className="btn btn-danger" onClick={getAllProductsHandler}>
          Get Product
        </button>
        {/* {postData.map((item) => {
          return <div>{item.price}</div>;
        })} */}
        {/* {<ProjectCard postData={postData} />} */}
        {/* {postData.map((item) => {
          return <ProjectCard item={item} />;
        })} */}
        {/* {postData.map((item) => (
            <div>{item.price}</div>
          ))} */}
        {/* // <ProjectCard item={item} /> */}
        {/* {postData ? (
          postData.map((item) => {
            return <div key={item._id}>{item.title}</div>;
          })
        ) : (
          <div>Sorry</div>
        )} */}

        {/* {projectData ? (
          projectData.map((item) => {
            return (
              <ProjectCard
                key={item._id}
                title={item.title}
                description={item.description}
                price={item.price}
                catagory={item.catagory}
              />
            );
          })
        ) : (
          <div>Sorryyyy</div>
        )} */}
        {/* {console.log(projectData)} */}

        {currentUser && postData ? (
          postData.map((item) => {
            return (
              <ProjectCard
                key={item._id}
                title={item.title}
                description={item.description}
                price={item.price}
                catagory={item.catagory}
              />
            );
          })
        ) : (
          <div>Sorryyyy</div>
        )}
      </div>
    </form>
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
  // getUserProjects: (project) => dispatch(getUserProjects(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
