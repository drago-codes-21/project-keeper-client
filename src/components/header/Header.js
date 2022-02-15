import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
const Header = ({ currentUser }) => {
  return (
    <div className="ui inverted menu">
      <Link to="/" className="item">
        <h1>Project keeper</h1>
      </Link>

      {currentUser ? (
        <>
          <Link to="/projects" className="item">
            Projects
          </Link>
          <div className="ms-auto">
            <Dropdown />
          </div>
        </>
      ) : (
        <>
          {/* <Link className="item" to="/auth">
            Login
          </Link>{" "} */}
          <Link className="item" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Header);
