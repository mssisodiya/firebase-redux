import { combineReducers } from "redux";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  task: taskReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
