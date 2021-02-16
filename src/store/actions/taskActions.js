import { useSelector } from "react-redux";
import fs from "../../config/firebaseConfig";

const fb = fs.firestore();

export const createTask = (task) => {
  return async (dispatch, getState) => {
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    await fb
      .collection("tasks")
      .add({
        ...task,
        authorFirstname: profile.firstName,
        authorLastname: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
