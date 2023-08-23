import TaskInterface, {
  Direction,
  TaskInterfacePost,
} from "./../Interface/TaskInterface";

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
        console.log(`Tasks dans loadTasks`, tasks);
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
   * Modifie la valeur de la propriété "order" via l'appel de l'api de json-server
   * en utilisant  le verbe "PATCH"
   * @returns Promise<any>
   */
  static async reOrderTask(task_id: number, order: number): Promise<any> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url + "/" + task_id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ order }),
    })
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans reOrderTask", error);
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
  /**
   * Réordonne le tableau en faisant un double map
   * Met à jour le fichier json en faisant des requetes http avec le verbe patch
   * @returns Promise<any>
   */
  static reOrderTasks(
    tasks: TaskInterface[],
    task_id: number,
    direction: Direction
  ): TaskInterface[] {
    //console.log(`Dans reOrderTasks, tasks`, tasks, task_id, direction);
    let next = false;
    const reordererdTasks = tasks
      .map((task, index) => {
        task.order = index;
        return task;
      })
      .map((task, index, tasks) => {
        if (task.id === task_id) {
          task.order++;
          console.log(
            `Je passe dans task.id === task_id : task.id, task.order `,
            task.id,
            task.order
          );
          next = true;
        } else if (next) {
          //console.log(`Je passe dans task.id === task_id : `, task.id);
          task.order--;
          next = false;
        } else task.order = index;
        return task;
      });
    console.log(`reordererdTasks : `, reordererdTasks);
    reordererdTasks.forEach((task) => {
      this.reOrderTask(task.id, task.order);
    });
    return reordererdTasks;
  }
  /**
   * Modifie la valeur de la propriété "done" via l'appel de l'api de json-server
   * en utilisant  le verbe "PUT"
   * @returns Promise<any>
   */
  static putTasks(tasks: TaskInterface[]): any {
    tasks.forEach(async (task: TaskInterface) => {
      await fetch(this.url + "/" + task.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(task),
      })
        .then((response) => {
          return response.json();
        })
        .then((tasks) => {
          return tasks;
        })
        .catch((error) => {
          console.error("Erreur attrapée dans putTasks", error);
        });
    });
  }
}
