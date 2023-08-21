import TaskInterface from "../Interface/TaskInterface";
interface TaskInterfaceProps extends TaskInterface {
  onClickValidate: (event: React.MouseEvent<HTMLButtonElement>, task_id: number) => void;
  onClickDelete: (event: React.MouseEvent<HTMLButtonElement>, task_id: number) => void;
}
const Task = (props: TaskInterfaceProps): React.JSX.Element => {
  const class_validate = props.done ? "text-decoration-line-through" : "";
  return (
    <section className="d-flex justify-content-between my-4">
      <h2 className={class_validate}>{props.description}</h2>
      <div>
        <button
          onClick={(event) => {
            props.onClickValidate(event, props.id);
          }}
          className="btn btn-success me-3">{props.done ? "Invalider" : "Valider"}</button>
        <button
          onClick={(event) => {
            props.onClickDelete(event, props.id);
          }}
          className="btn btn-danger me-3">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;