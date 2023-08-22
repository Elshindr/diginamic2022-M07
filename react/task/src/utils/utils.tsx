import TaskInterface, {
  Direction,
} from "../Interface/TaskInterface";
/**
   * Réordonne le tableau en faisant un sort puis un double map
   * Met à jour le fichier json en faisant des requetes http avec le verbe patch
   * @returns Promise<any>
   */
export function reOrderTasks(
  tasks: TaskInterface[],
  task_id: number,
  direction: Direction
): TaskInterface[] {
  console.log(`Dans reOrderTasks, tasks`, tasks, task_id, direction);
  let next = false;
  const reordererdTasks = tasks.sort((a, b) => {
    return (a.order - b.order);
  }).map((task, index) => {
    task.order = index;
    return task;
  }).map((task, index, tasks) => {
    if (task.id === task_id) {
      task.order = (direction) ? task.order + 1 : task.order - 1;
      if(direction) next = true;
      if (!direction) tasks[index - 1].order++;
    } else if (next) {
      task.order--;
      next = false;
    } else task.order = index;
    return task;
  });
  console.log(`reordererdTasks : `, reordererdTasks);

  return reordererdTasks;
}
export const getMinimumOrder = (copy_tasks: TaskInterface[]): number => {
  const mini: any = copy_tasks.reduce((accumulator: any, currentValue: any) => {
    if (accumulator.hasOwnProperty("order")) {
      if (accumulator.order > currentValue.order) return currentValue;
      return accumulator
    }
  });
  return mini.order - 1;
}
export const getMaximumOrder = (copy_tasks: TaskInterface[]): number => {
  const maxi: any = copy_tasks.reduce((accumulator: any, currentValue: any) => {
    if (accumulator.hasOwnProperty("order")) {
      if (currentValue.order > accumulator.order) return currentValue;
      return accumulator;
    }
  });
  return maxi.order + 1;
}