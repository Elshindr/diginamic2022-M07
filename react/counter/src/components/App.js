import './App.css';
import Counter from './Counter';
import { useState, useEffect } from 'react';
import Data from '../services/Data';

function App() {
  // Destructuring pour gérer le state
  const [counters, setCounters] = useState([]);

  // Use Effect avec comme deuxième paramètre [] imite le hook componentDidMount
  useEffect(() => {
    //Imite ComponentDidMount et ne s'exécute qu'au premier rendu.
    console.log(`Dans useEffect `);
    // Appel du service Data
    (async () => {
      setCounters(await Data.loadCounters());
      console.log(`counters dans useEffect : `, counters);
    })();
  }, []);
  /* const maVariable = useState(0)[0];
  const setMaVariable = useState(0)[1]; */
  const increment = () => {
    /* setCounter(counter => counter + 1); */
  }
  const decrement = () => {
    /* setCounter(counter => counter - 1); */
  }
  return (
    <div className="App container">
      <h1>Compteur</h1>
      <button
        onClick={increment}
        className="btn btn-warning me-3">Incrémenter
      </button>
      <button
        onClick={decrement}
        className="btn btn-warning me-3">Decrémenter
      </button>
      {counters.map(counter => <Counter key={counter.id} counter={counter} />)}
      
    </div>
  );
}

export default App;
