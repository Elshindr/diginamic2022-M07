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
        task.order = (task.done) ? getMinimumOrder() : getMaximumOrder();
        console.log(`order : `, task.order);
        task.done = !task.done;
        Data.ValidateTask(task_id, task.done, task.order);
      }
      return task;
    });
    setTasks(copy_tasks);

  }
  const handleClickOrderButton = (event: React.MouseEvent<HTMLButtonElement>, task_id: number): void => {
    console.log(`Dans handleClickOrderButton`, task_id);

    /* const copy_tasks = tasks.map(task => {
      if (task_id === task.id) {
        task.order = (task.done) ? getMinimumOrder() : getMaximumOrder();
        task.done = !task.done;
        Data.ValidateTask(task_id, task.done);
      }
      return task;
    });
    setTasks(copy_tasks); */

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
    const order = getMinimumOrder();
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
  const getMinimumOrder = (): number => {
    const copy_tasks = [...tasks];
    const mini: any = copy_tasks.reduce((accumulator: any, currentValue: any) => {
      if (accumulator.hasOwnProperty("order")) {
        if (accumulator.order > currentValue.order) return currentValue;
        return accumulator
      }
    });
    return mini.order - 1;
  }
  const getMaximumOrder = (): number => {
    const copy_tasks = [...tasks];
    const maxi: any = copy_tasks.reduce((accumulator: any, currentValue: any) => {
      if (accumulator.hasOwnProperty("order")) {
        if (currentValue.order > accumulator.order) return currentValue;
        return accumulator;
      }
    });
    return maxi.order + 1;
  }
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      <button
        onClick={() => { setShowForm(!showForm) }}
        className='btn btn-success'>{showForm ? 'Cacher le formulaire' : 'Ajouter une tâche'}</button>
      {showForm && (<FormAddTask onSubmitAdd={handleSubmitAdd} />)}
      {sorted_tasks.map((task) => <Task
        key={task.id}
        {...task}
        onClickValidate={handleClickValidate}
        onClickDelete={handleClickDelete}
        onClickOrderButton={handleClickOrderButton} />)}
    </div>
  );
}

export default App;
