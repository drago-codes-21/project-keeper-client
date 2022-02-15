import React from "react";
import { connect } from "react-redux";
import UserLogged from "./UserLogged";
import UserNotLogged from "./UserNotLogged";

const Dropdown = ({ currentUser }) => {
  return <div>{currentUser ? <UserLogged /> : <UserNotLogged />}</div>;
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Dropdown);
