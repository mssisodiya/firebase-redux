import { combineReducers } from "redux";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import { firestoreReducer } from "redux-firestore";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
