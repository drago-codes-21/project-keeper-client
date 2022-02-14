import { connect } from "react-redux";
import "./project.css";
const UserProfile = ({ currentUser }) => {
  return (
    <div className="col-md-4 animated fadeIn box">
      {currentUser ? (
        <div className="card">
          <div className="card-body">
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
