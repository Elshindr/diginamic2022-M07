import TaskInterface from "../Interface/TaskInterface";

interface TaskInterfaceProps extends TaskInterface{
  handleClickValidate: ()=>{};
}
const Task = (props: TaskInterfaceProps) => {
  return (
    <section className="d-flex justify-content-between my-4">
      <h2>{props.description}</h2>
      <div>
        <button 
        onClick={props.handleClickValidate}
        className="btn btn-success me-3">Valider</button>
        <button className="btn btn-danger me-3">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;