import TaskInterface from "../Interface/TaskInterface";
export default class Data {
  static url:string = "http://localhost:3001/tasks";
  static async loadTasks():Promise<TaskInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
    .then(response => {
      return response.json();
    })
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadTasks", error)
    })
  }
}