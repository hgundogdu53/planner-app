import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAC4ZjjOfXsywmVdZsoc7vD6hWlzELthqQ",
  authDomain: "notion-planner.firebaseapp.com",
  databaseURL: "https://notion-planner.firebaseio.com",
  projectId: "notion-planner",
  storageBucket: "notion-planner.appspot.com",
  messagingSenderId: "505163193581",
  appId: "1:505163193581:web:18733186bc9a553c2480e4",
  measurementId: "G-8SV01HHGNN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
