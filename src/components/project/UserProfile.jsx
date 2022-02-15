import { connect } from "react-redux";
import "./project.css";
const UserProfile = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="mainbox vh-100">
      {currentUser ? (
        <div className="text-center mx-auto p-5" style={{ width: "fit-content", minWidth: "500px" }}>
          <div className="box " style={{ minHeight: "500px"}}>
            <div className="card-body" >
              <div className="avatar">
                <img
                  //   src={"https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                  src={currentUser.photoURL}
                  className="card-img-top"
                  alt=""
                />
                <h5 className="card-title">{currentUser.displayName}</h5>
              </div>
              {currentUser.phoneNumber ? (
                <p className="card-text">
                  <span className="phone">{currentUser.phoneNumber}</span>
                </p>
              ) : (
                <p className="card-text">
                  {currentUser.email}
                  <br />
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Sorry you need to login first</div>
      )}
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(UserProfile);
