import React from 'react';

function Task({ task, moveTask }) {
  return (
    <div className="task">
      <span>{task.title}</span>
      {task.status !== 'Task Done' && (
        <button onClick={() => moveTask(task.id, 'forward')}>
          {task.status === "To Do" ? 'In Progress' : 'Task Done'}
        </button>
      )}
      {task.status !== "To Do" && (
        <button onClick={() => moveTask(task.id, 'backward')}>
          {task.status === 'Task Done' ? 'In Progress' : "To Do"}
        </button>
      )}
    </div>
  );
}

export default Task;
