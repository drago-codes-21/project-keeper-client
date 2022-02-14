import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_AUTH_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyB1WMWFzGFazOvrG4yQC2BA8ithWI_Dymo",
  authDomain: "project-keeper-547bc.firebaseapp.com",
  databaseURL: "https://project-keeper-547bc-default-rtdb.firebaseio.com",
  projectId: "project-keeper-547bc",
  storageBucket: "project-keeper-547bc.appspot.com",
  messagingSenderId: "1021146308414",
  appId: "1:1021146308414:web:5cd318ce5b22e87e00166f",
};
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
