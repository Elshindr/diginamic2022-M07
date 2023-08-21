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
  const handleClickValidate = (event: Event, task_id: number) => {
    console.log(`Dans handleClickValidate`, task_id);
  }
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      {tasks.map((task) => <Task key={task.id} {...task} onClickValidate={ handleClickValidate } />)}
    </div>
  );
}

export default App;
