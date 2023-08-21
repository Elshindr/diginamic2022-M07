import { useRef } from 'react';
const FormAddTask = (props: { onSubmitAdd: Function }) => {
  const inputRef = useRef<any>();
  return (
    <form
      onSubmit={(event) => {
        //const description:(null|string) = "Acheter le pain";
        //const description:(null|string) = document.getElementById("task-description").value;
        //const description: (null|string) ?= document.querySelector<HTMLInputElement>('#task-description').value;
        if (inputRef.current != null) {
          const description = inputRef.current.value;
          props.onSubmitAdd(event, description);
        }



      }}
      className="form d-flex gap-2 mt-4 align-items-center">
      <label className="form-label" htmlFor="task-description">Tâche : </label>
      <input ref={inputRef} type="text" id="task-description" className="form-control w-25" />
      <input type="submit" className="btn btn-success" value="Ajouter une tâche" />
    </form>
  );
}

export default FormAddTask;