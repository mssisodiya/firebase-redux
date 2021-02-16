import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

function TaskDetails(props) {
  const auth = useSelector((state) => state.firebase.auth);

  const id = props.match.params.id;
  useFirestoreConnect([
    {
      collection: "tasks",
      doc: id,
    },
  ]);
  const task = useSelector(
    ({ firestore: { data } }) => data.tasks && data.tasks[id]
  );
  console.log(task);

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container section task-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Task Title - {task.title}</span>
          <p>{task.content}</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>
            Posted by {task.authorFirstname} {task.authorLastname}
          </div>
          <div> {moment(task.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
