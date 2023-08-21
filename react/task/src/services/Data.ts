import TaskInterface, { TaskInterfacePost } from "../Interface/TaskInterface";
export default class Data {
  static url: string = "http://localhost:3001/tasks";
  /**
   * Récupère les tâches via l'appel de l'api de json-server en utilisant
   * le verbe "GET"
   * @returns Promise<TaskInterface[]>
   */
  static async loadTasks(): Promise<TaskInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans loadTasks", error);
      });
  }
  /**
   * Modifie la valeur de la propriété "done" via l'appel de l'api de json-server
   * en utilisant  le verbe "PATCH"
   * @returns Promise<any>
   */
  static async ValidateTask(
    task_id: number,
    done: boolean,
    order: number
  ): Promise<any> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url + "/" + task_id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ done, order }),
    })
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans ValidateTasks", error);
      });
  }
  /**
   * Supprime une tâche via l'appel de l'api de json-server
   * en utilisant  le verbe "DELETE"
   * @returns Promise<any>
   */
  static async DeleteTask(task_id: number, done: boolean): Promise<any> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url + "/" + task_id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans DeleteTasks", error);
      });
  }
  /**
   * Ajoute une tâche via l'appel de l'api de json-server
   * en utilisant  le verbe "POST"
   * @returns Promise<any>
   */
  static async addTask(task: TaskInterfacePost): Promise<any> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(task),
    })
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans addTask", error);
      });
  }
}
