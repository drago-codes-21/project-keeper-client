import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1WMWFzGFazOvrG4yQC2BA8ithWI_Dymo",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
