import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCiFLk8_W1CFHgnBo9_aTAGxK8EHto6gdA",
  authDomain: "tasks-3f687.firebaseapp.com",
  projectId: "tasks-3f687",
  storageBucket: "tasks-3f687.appspot.com",
  messagingSenderId: "313642345509",
  appId: "1:313642345509:web:e486d7e04be28d665c0bcc",
};
// Initialize Firebase
const fs = firebase.initializeApp(firebaseConfig);
// const fs = firebase.firestore().settings({ timestampsInSnapshots: true });

export default fs;
