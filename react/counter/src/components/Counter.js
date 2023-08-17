const Counter = (props) => {

  return (
    <div className="my-2">
      <button
        onClick={() => {
          props.onIncrement(props.counter.id);
        }}
        className="btn btn-warning me-3">Incrémenter
      </button>
      <button
        onClick={() => {
          props.onDecrement(props.counter.id)
        }}
        className="btn btn-warning me-3">Decrémenter
      </button>
      <button className="btn btn-success me-3">{props.counter.value}</button>
      <button
        onClick={(event) => {
          props.onDelete(event, props.counter.id)
        }}
        className="btn btn-danger me-3">Supprimer
      </button>
    </div>
  );
}

export default Counter;