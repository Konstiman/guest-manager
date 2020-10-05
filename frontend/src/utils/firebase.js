import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMFn_wYNGvbL9_3-G0gUbtI45M8sfvHTg",
  authDomain: "guest-manager-59db9.firebaseapp.com",
  databaseURL: "https://guest-manager-59db9.firebaseio.com",
  projectId: "guest-manager-59db9",
  storageBucket: "guest-manager-59db9.appspot.com",
  messagingSenderId: "714852626873",
  appId: "1:714852626873:web:290a9562096baf984e0668",
  measurementId: "G-5T15YGJ5WY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const firebaseAppAuth = firebaseApp.auth();

export const config = firebaseConfig;
export const withAuth = withFirebaseAuth({ firebaseAppAuth });

