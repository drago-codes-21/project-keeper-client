import React from "react";
import ProjectCard from "../project/ProjectCard";
const SampleData = () => {
  return (
    <div className="row g-4">
      <ProjectCard
        key={112}
        title={"React js project about posts"}
        description={
          "Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence"
        }
        price={"5566"}
        catagory={"Science"}
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGGdrvYk1Qc0nwmAPsA5w58KfDEY04tLi9w&usqp=CAU"
        }
      />
      <ProjectCard
        key={113}
        title={"React js project about posts"}
        description={
          "Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence"
        }
        price={"5566"}
        catagory={"Science"}
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGGdrvYk1Qc0nwmAPsA5w58KfDEY04tLi9w&usqp=CAU"
        }
      />
    </div>
  );
};

export default SampleData;
