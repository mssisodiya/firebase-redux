import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/reducers/actions/taskActions";

function CreateTask() {
  const dispatch = useDispatch();
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
  };

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
          <button className="btn pink lighten-1 z-depth-0">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
