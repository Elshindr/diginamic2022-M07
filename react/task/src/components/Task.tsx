import { TaskInterfaceProps, Direction } from "../Interface/TaskInterface";

const Task = (props: TaskInterfaceProps): React.JSX.Element => {
  const class_validate = props.done ? "text-decoration-line-through" : "";
  return (
    <section className="d-flex justify-content-between my-4">
      <h2 className={class_validate}>{props.description}</h2>
      <div className="d-flex">
        <button
          onClick={(event) => {
            props.onClickValidate(event, props.id);
          }}
          style={{"width" : "90px"}}
          className="btn btn-success me-3">{props.done ? "Invalider" : "Valider"}
        </button>
        <button
          onClick={(event) => {
            props.onClickDelete(event, props.id);
          }}
          className="btn btn-danger me-3">Supprimer
        </button>
        <div style={{"width" : "150px"}} >
          {(props.index < props.tasks_length - 1) && (
            <button
              onClick={(event) => {
                props.onClickOrderButton(event, props.id, props.index, Direction.Down);
              }}
              className="btn btn-warning me-3">V
            </button>
          )}
          {(props.index > 0) && (
            <button
              onClick={(event) => {
                props.onClickOrderButton(event, props.id, props.index, Direction.Up);
              }}
              className="btn btn-warning me-3">^
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Task;