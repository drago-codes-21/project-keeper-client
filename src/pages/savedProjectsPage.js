import React from "react";
import { connect } from "react-redux";
import ProjectCard from "../components/project/ProjectCard";
const SavedProjectsPage = ({ savedCollection }) => {
  return (
    <div>
      <div className="ui link cards">
        {console.log(savedCollection)}
        {savedCollection ? (
          savedCollection.map((item) => {
            return (
              <ProjectCard
                key={item._id}
                title={item.title}
                description={item.description}
                price={item.price}
                catagory={item.catagory}
                imageUrl={""}
              />
            );
          })
        ) : (
          <div>Sorryyyy</div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  savedCollection: state.savedCollection,
});
export default connect(mapStateToProps)(SavedProjectsPage);
