import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useCookies } from "react-cookie";
import Header from "./components/header/Header";
import UserProfile from "./components/profile/UserProfile";
import AuthenticationPage from "./pages/authenticationPage";
import HomePage from "./pages/homePage";
import ProjectPage from "./pages/projectPage";
import SavedProjectsPage from "./pages/savedProjectsPage";
import PhoneLogin from "./components/auth/PhoneLogin";
import Register from "./components/auth/Register";

const App = ({ currentUser }) => {
  const [cookies, setCookie] = useCookies(["userToken"]);
  const [isUserSigned, setisUserSigned] = useState(false);

  useEffect(() => {
    const fun = () => {
      if (cookies.userToken && cookies.userToken !== "") {
        console.log("cookies", cookies);
        setisUserSigned(true);
      }
    };

    fun();
  }, [cookies]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/userDetail" element={<UserProfile />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" /> : <AuthenticationPage />}
        />
        <Route path="/saved" element={<SavedProjectsPage />} />
        <Route path="/phoneLogin" element={<PhoneLogin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(App);
