import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createTask } from "../../store/actions/taskActions";

function CreateTask(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const data = { ...task };
    data[e.target.id] = e.target.value;
    setTask(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    dispatch(createTask(task));
    props.history.push("/");
  };
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text tect-darken">Create new Task</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Description</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Add</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
