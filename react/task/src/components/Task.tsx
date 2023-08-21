import TaskInterface from "../Interface/TaskInterface";
/* import { MouseEvent } from "react"; */
/* interface TaskInterfaceProps {
  task: TaskInterface;
  onClickValidate: Function;
} */
const Task = (props: TaskInterface & { onClickValidate: Function}) => {
  return (
    <section className="d-flex justify-content-between my-4">
      <h2>{props.description}</h2>
      <div>
        <button
          onClick={(event) => {
            props.onClickValidate(event, props.id);
          }}
          className="btn btn-success me-3">Valider</button>
        <button className="btn btn-danger me-3">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;