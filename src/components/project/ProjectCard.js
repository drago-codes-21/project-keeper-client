import React from "react";

const ProjectCard = (project) => {
  const { title, description, catagory, price, image } = project;
  return (
    <div className="card-box">
      <h3>{title}</h3>
      <div>{description}</div>
      <div>{catagory}</div>
      <div>{price}$</div>
      <div>{image}</div>
    </div>
  );
};

export default ProjectCard;
