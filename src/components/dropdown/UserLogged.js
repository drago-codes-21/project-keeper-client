import React from "react";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
const UserLogged = ({ setCurrentUser }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* <CgProfile /> */}
        Profile
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <Link className="dropdown-item" to="/userDetail">
            User
          </Link>
        </li>
        <li>
          <span
            className="dropdown-item LINK"
            onClick={() => setCurrentUser(null)}
          >
            logout
          </span>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(UserLogged);
