import React from "react";

function TaskDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section task-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Task Title - {id}</span>
          <p> Loreem ipusm Loreem ipusm Loreem ipusmLoreem ipusmLoreem ipusm</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Manish</div>
          <div>12 Feb, 6pm</div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
