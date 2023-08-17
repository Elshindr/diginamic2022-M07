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

  // Incrémente uniquement le compteur dont on a l'id
  const increment = (id) => {
    console.log(`Dans increment`);
    setCounters(counters => counters.map((counter) => {
      if (id === counter.id) counter.value++;
      return counter;
    }));
  }
  // Décrémente uniquement le compteur dont on a l'id
  const decrement = (id) => {
    console.log(`Dans decrement`);
    setCounters(counters => counters.map((counter) => {
      if (id === counter.id) counter.value--;
      return counter;
    }));
  }
  const incrementAll = () => {
    setCounters(counters => counters.map(counter => {
      counter.value++;
      return counter;
    }));
  }
  const decrementAll = () => {
    const copy_counters = counters.map(counter => {
      counter.value--;
      return counter;
    })
    setCounters(counters => copy_counters);
  }
  return (
    <div className="App container">
      <h1>Compteur</h1>
      <button
        onClick={incrementAll}
        className="btn btn-warning me-3">Incrémenter
      </button>
      <button
        onClick={decrementAll}
        className="btn btn-warning me-3">Decrémenter
      </button>
      {counters.map((counter) =>
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
        />)}

    </div>
  );
}

export default App;
