import { connect } from "react-redux";

const UserProfile = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="mainbox vh-100">
      {currentUser ? (
        <div
          className="text-center mx-auto p-5"
          style={{ width: "fit-content", minWidth: "500px" }}
        >
          <div className="box " style={{ minHeight: "500px" }}>
            <div className="card-body">
              <div className="avatar">
                <img
                  src={currentUser.photoURL}
                  className="card-img-top"
                  alt=""
                />
                <div className="inline-block">
                  <h3>{currentUser.displayName || currentUser.username}</h3>
                </div>
              </div>
              {currentUser.phoneNumber ? (
                <p className="card-text">
                  <span className="phone">
                    Phone Number :{currentUser.phoneNumber}
                  </span>
                </p>
              ) : (
                <p className="card-text">Email: {currentUser.email}</p>
              )}
            </div>
            <div className="ui divider"></div>
            <div>DOB: 21/08/2001 </div>
            <div>
              <span>Occupation:</span> React Developer
            </div>
            <div>Interest: Coding, Chess</div>
            {console.log(currentUser.metadata.creationTime)}
            <div>
              User Created:
              {currentUser.metadata.creationTime}
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
