import './App.css';
import React from 'react';
import Task from './Task';
import { useState, useEffect } from 'react';
import TaskInterface, { TaskInterfacePost } from '../Interface/TaskInterface';
import Data from '../services/Data';
import FormAddTask from './FormAddTask';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const loadedTasks: TaskInterface[] = await Data.loadTasks();
      // Modification du state
      setTasks(loadedTasks);
    })();
  }, [])
  const handleClickValidate = (event: React.MouseEvent<HTMLButtonElement>, task_id: number): void => {
    console.log(`Dans handleClickValidate`, task_id);

    const copy_tasks = tasks.map(task => {
      if (task_id === task.id) {
        task.done = !task.done;
        Data.ValidateTask(task_id, task.done);
      }
      return task;
    });
    setTasks(copy_tasks);

  }
  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>, task_id: number): void => {
    console.log(`Dans handleClickDelete`, task_id);
    if (window.confirm("Voulez-vous supprimer cette tâche ?")) {
      const copy_tasks = tasks.filter(task => {
        if (task_id !== task.id) {
          Data.DeleteTask(task_id, task.done);
          return task;
        }

      });
      setTasks(copy_tasks);
    }
  }
  const handleSubmitAdd = async (event: React.SyntheticEvent, description: string) => {
    event.preventDefault();
    console.log(`Dans handleSubmitAdd, description : `, description);
    const new_task: TaskInterfacePost = {
      description: description,
      done: false,
      order: 0
    }
    await Data.addTask(new_task);
    const loadedTasks: TaskInterface[] = await Data.loadTasks();
    // Modification du state
    setTasks(loadedTasks);
  }
  const sorted_tasks = [...tasks].sort((a, b) => {
    if (a.done === b.done) return -1;
    else return 1;
  });
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      <button
        onClick={() => { setShowForm(!showForm) }}
        className='btn btn-success'>{showForm ? 'Cacher le formulaire' : 'Ajouter une tâche'}</button>
      {showForm && (<FormAddTask onSubmitAdd={handleSubmitAdd} />)}
      {sorted_tasks.map((task) => <Task key={task.id} {...task} onClickValidate={handleClickValidate} onClickDelete={handleClickDelete} />)}
    </div>
  );
}

export default App;
