import './App.css';
import React from 'react';
import Task from './Task';
import { useState, useEffect } from 'react';
import TaskInterface, { TaskInterfacePost, Direction } from '../Interface/TaskInterface';
import Data from '../services/Data';
import FormAddTask from './FormAddTask';
import { reOrderTasks, getMaximumOrder, getMinimumOrder } from './../utils/utils';

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
        task.order = (task.done) ? getMinimumOrder([...tasks]) : getMaximumOrder([...tasks]);
        console.log(`order : `, task.order);
        task.done = !task.done;
        Data.ValidateTask(task_id, task.done, task.order);
      }
      return task;
    });
    setTasks(copy_tasks);

  }
  const handleClickOrderButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    task_id: number,
    index: number,
    direction: Direction): void => {
    //console.log(`Dans handleClickOrderButton, task_id, direction, tasks `, task_id, direction, tasks);
    if ((index < tasks.length - 1) && direction === 1) {
      const reorderedTasks = reOrderTasks([...tasks], task_id, direction);
      setTasks(reorderedTasks);
    }
    else if ((index > 0) && direction === 0) {
      const reorderedTasks = reOrderTasks([...tasks], task_id, direction);
      setTasks(reorderedTasks);
    }
    Data.putTasks([...tasks]);
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
    const order = getMinimumOrder([...tasks]);
    console.log(`Dans handleSubmitAdd, description, order : `, description, order);
    const new_task: TaskInterfacePost = {
      description: description,
      done: false,
      order: order
    }
    await Data.addTask(new_task);
    const loadedTasks: TaskInterface[] = await Data.loadTasks();
    // Modification du state
    setTasks(loadedTasks);
  }
  const sorted_tasks = [...tasks].sort((a, b) => {
    return (a.order - b.order);
  });

  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      <button
        onClick={() => { setShowForm(!showForm) }}
        className='btn btn-success'>{showForm ? 'Cacher le formulaire' : 'Ajouter une tâche'}</button>
      {showForm && (<FormAddTask onSubmitAdd={handleSubmitAdd} />)}
      {sorted_tasks.map((task, index) => <Task
        key={task.id}
        {...task}
        onClickValidate={handleClickValidate}
        onClickDelete={handleClickDelete}
        onClickOrderButton={handleClickOrderButton}
        index={index}
        tasks_length={sorted_tasks.length} />)}
    </div>
  );
}

export default App;
