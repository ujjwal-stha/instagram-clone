import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_YOURAPIKEY,
  authDomain: process.env.REACT_APP_YOURAUTHDOAMIN,
  projectId: process.env.REACT_APP_YOURPROJECTID,
  storageBucket: process.env.REACT_APP_YOURSTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_YOURMESSAGINGSENDERID,
  appId: process.env.REACT_APP_YOURAPPID,
  measurementId: process.env.REACT_APP_YOURMEASUREMENTID,
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
