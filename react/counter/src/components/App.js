import './App.css';
import Counter from './Counter';
import { useState, useEffect } from 'react';
import Data from '../services/Data';

function App({ title }) {
  // Destructuring pour gérer le state
  const [counter, setCounter] = useState(0);

  // Use Effect avec comme deuxième paramètre [] imite le hook componentDidMount
  useEffect(() => {
    //Imite ComponentDidMount et ne s'exécute qu'au premier rendu.
    console.log(`Test useEffect `);
    // Appel du service Data
    (async () => {
      const counters = await Data.loadCounters();
      console.log(`counters dans useEffect : `, counters);
    })();


  }, []);
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
