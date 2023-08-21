import './App.css';
import Task from './Task';
import { useState, useEffect } from 'react';
import TaskInterface from '../Interface/TaskInterface';
import Data from '../services/Data';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  useEffect(() => {
    (async () => {
      const loadedTasks: TaskInterface[] = await Data.loadTasks();
      // Modification du state
      setTasks(loadedTasks);
    })();
  }, [])
  const handleClickValidate = () => {
    console.log(`Dans handleClickValidate`);
  }
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      {tasks.map(task => <Task key={task.id} {...task, handleClickValidate}  />)}
    </div>
  );
}

export default App;
