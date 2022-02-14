import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
import ProjectForm from "./components/project/ProjectForm";
// import PhoneLogin from "./components/auth/PhoneLogin";
// import EmailLogin from "./components/auth/EmailLogin";
import UserProfile from "./components/project/UserProfile";
import { connect } from "react-redux";
import AuthenticationPage from "./pages/authenticationPage";
import HomePage from "./pages/homePage";

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
    <>
      <Header />
      <Routes>
        {/*currentUser && <Route path="/userDetail" element={<UserProfile />} />}
        {!currentUser && <Route path="/login" element={<Login />} />}
        {!currentUser && <Route path="/register" element={<Register />} />}
        
        <Route path="/phoneLogin" element={<PhoneLogin />} />
      {!currentUser && <Route path="/emailLogin" element={<EmailLogin />} />} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectForm />} />
        <Route path="/userDetail" element={<UserProfile />} />
        <Route path="/auth" element={<AuthenticationPage />} />
      </Routes>
    </>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(App);
