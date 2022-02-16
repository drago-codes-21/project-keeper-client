import React, { useState } from "react";
import { authentication } from "../../firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { setCurrentUser } from "../../redux/user/user.actions";
import axios from "axios";
import { connect } from "react-redux";

const PhoneLogin = ({ setCurrentUser, currentUser }) => {
  const [num, setnum] = useState();
  const [confirmation, setconfirmation] = useState();

  const phonelog = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
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
        console.log("got user", result.user);
        // setCookie("userToken", user.accessToken, {
        //     path: "/"
        // });

        let data = { phoneNumber: result.user.phoneNumber };
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
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <div className="ui feild">
            <label htmlFor="phoneNum" className="ui pointing blue basic label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNum"
              aria-describedby="emailHelp"
              value={num}
              placeholder="Phone Number"
              onChange={(e) => {
                setnum(e.target.value);
              }}
            />
            <div id="phonerHelp" className="form-text">
              We'll never share your number with anyone else.
            </div>
          </div>
          <div className="ui blue button" onClick={() => phonelog()}>
            Submit
          </div>

          <div id="recaptcha-container"></div>
          <div className="mb-3">
            <label
              htmlFor="confirmation"
              className="ui pointing blue basic label"
            >
              confirmation code
            </label>
            <input
              type="number"
              className="form-control"
              id="confirmation"
              placeholder="Otp code"
              value={confirmation}
              onChange={(e) => {
                setconfirmation(e.target.value);
              }}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="ui blue button" onClick={() => ValidateOtp()}>
            confirmation
          </div>

          <div className="ui red button" onClick={() => checkCookies()}>
            Check cookies
          </div>
        </div>
      </main>
    </article>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhoneLogin);
