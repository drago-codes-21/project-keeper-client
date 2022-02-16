import React from "react";
import { Link } from "react-router-dom";
const UserNotLogged = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Profile
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <Link className="dropdown-item" to="/auth">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNotLogged;
