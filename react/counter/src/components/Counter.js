const Counter = (props) => {
  return (
    <div className="my-2">
      <button
        onClick={()=>{
          props.onIncrement(props.counter.id);
        }}
        className="btn btn-warning me-3">Incrémenter
      </button>
      <button
        onClick={ () => {
          props.onDecrement(props.counter.id)
        } }
        className="btn btn-warning me-3">Decrémenter
      </button>
      <button className="btn btn-success">{props.counter.value}</button>
    </div>
  );
}

export default Counter;