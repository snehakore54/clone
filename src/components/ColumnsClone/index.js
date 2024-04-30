import React from 'react';
import TaskFolders from '../TaskFolders';

function ColumnsClone({ title, tasks, moveTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskFolders key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
}

export default ColumnsClone;
