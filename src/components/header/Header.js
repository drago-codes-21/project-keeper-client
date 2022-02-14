import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const logoutUser = () => {
    removeCookie("userToken");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Project keeper
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth">
                Authentication
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/phoneLogin">
                Phone Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emailLogin">
                Email Login
              </Link>
            </li> */}
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
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
                <span className="dropdown-item" onClick={() => logoutUser()}>
                  logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
