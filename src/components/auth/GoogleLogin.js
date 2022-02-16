import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { useCookies } from "react-cookie";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
const GoogleLogin = ({ currentUser, setCurrentUser }) => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  const Login = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        setCurrentUser(result.user);
        console.log("user sing in from google", result.user);

        // let data = { "email": user.email }
        const response = await axios.post(
          "http://localhost:7070/api/auth/loginUserWithEmail",
          result.user,
          { withCredentials: true }
        );
        console.log(response);
        // setCookie("userToken", user.accessToken, {
        //     path: "/"
        // });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <div className="ui blue goodle button" onClick={() => Login()}>
        <i className="google icon" />
        Sign in with google
      </div>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);
