import React, { useState } from 'react';
import './App.css';
import ColumnsClone from './components/ColumnsClone';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Javascript', status: "To Do" },
    { id: 2, title: 'CSS', status: 'In Progress' },
    { id: 3, title: 'HTML', status: 'Task Done' },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleInputChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const addTask = () => {
    if (newTaskTitle.trim() === ''){
      return "";
    }
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: "To Do",
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const moveTask = (id, direction) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        if (direction === 'forward') {
          task.status = task.status === "To Do" ? 'In Progress' : 'Task Done';
        } else if (direction === 'backward') {
          task.status = task.status === 'Task Done' ? 'In Progress' :"To Do";
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className='heading'>Clone</h1>
      <div className="task-board">
        <ColumnsClone
          title="To Do's Task"
          tasks={tasks.filter(task => task.status === "To Do")}
          moveTask={moveTask}
        />
        <ColumnsClone
          title="In Progress"
          tasks={tasks.filter(task => task.status === 'In Progress')}
          moveTask={moveTask}
        />
        <ColumnsClone
          title="Task Done"
          tasks={tasks.filter(task => task.status === 'Task Done')}
          moveTask={moveTask}
        />
      </div>
      <div className="add-task" style={{marginLeft:'38%', marginRight:'38%',display:'flex', flexDirection:'row'}}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleInputChange}
          placeholder="Enter task title"
          className='styling-input'
        />
        <button onClick={addTask} className='btn-txt'>Add Task</button>
      </div>
    </div>
  );
}

export default App;
