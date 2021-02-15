import fs from "../../../config/firebaseConfig";

export const createTask = (task) => {
  console.log(fs);
  const fb = fs.firestore();
  return (dispatch) => {
    const req = fb.collection("tasks").add({
      ...task,
      authorFirstname: "Manish",
      authorLastname: "singh",
      authorId: 12345,
      createdAt: new Date(),
    });
    return req
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
