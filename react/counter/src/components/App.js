import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App({title}) {
  // Destructuring pour gérer le state
  const [counter, setCounter] = useState(0);
  /* const maVariable = useState(0)[0];
  const setMaVariable = useState(0)[1]; */
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App container">
      <h1>Compteur</h1>
      <button 
      onClick={increment}
      className="btn btn-warning me-3">Incrémenter</button>
      <button 
      onClick={decrement}
      className="btn btn-warning me-3">Decrémenter</button>
      <Counter counter={counter} />
    </div>
  );
}

export default App;
