import React, { useState } from "react";
import { authentication } from "../../firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { setCurrentUser } from "../../redux/user/user.actions";
import { useCookies } from "react-cookie";
import axios from "axios";
import { connect } from "react-redux";

const PhoneLogin = ({ setCurrentUser, currentUser }) => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [num, setnum] = useState();
  const [confirmation, setconfirmation] = useState();

  const phonelog = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );

    const appVerifier = window.recaptchaVerifier;
    console.log("num", num);
    signInWithPhoneNumber(authentication, num, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("sms not sent", error);
      });
  };

  const checkCookies = async () => {
    const response = await axios.get(
      "http://localhost:7070/api/auth/checkLogin",
      { withCredentials: true }
    );
    console.log(response);
  };

  const ValidateOtp = () => {
    if (confirmation === null) return;

    const code = confirmation;
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then(async (result) => {
        // User signed in successfully.
        // const user = result.user;
        setCurrentUser(result.user);
        console.log("got user", currentUser);
        // setCookie("userToken", user.accessToken, {
        //     path: "/"
        // });

        let data = { phoneNumber: currentUser.phoneNumber };
        const response = await axios.post(
          "http://localhost:7070/api/auth/loginUserWithPhoneNum",
          data,
          { withCredentials: true }
        );
        console.log(response);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log("err", error);
      });
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="phoneNum" className="form-label">
          Phone num
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNum"
          aria-describedby="emailHelp"
          value={num}
          onChange={(e) => {
            setnum(e.target.value);
          }}
        />
        <div id="phonerHelp" className="form-text">
          We'll never share your number with anyone else.
        </div>
      </div>
      <div className="btn btn-primary" onClick={() => phonelog()}>
        Submit
      </div>

      <div id="recaptcha-container"></div>
      <div className="mb-3">
        <label htmlFor="confirmation" className="form-label">
          confirmation code
        </label>
        <input
          type="number"
          className="form-control"
          id="confirmation"
          value={confirmation}
          onChange={(e) => {
            setconfirmation(e.target.value);
          }}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="btn btn-primary" onClick={() => ValidateOtp()}>
        confirmation
      </div>

      <div className="btn btn-danger" onClick={() => checkCookies()}>
        Check cookies
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
export default connect(mapStateToProps, mapDispatchToProps)(PhoneLogin);
