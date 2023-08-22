import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <header>
      <h1>Header commun</h1>
      <nav>
        <ul>
          <li><Link to="/" >Accueil</Link></li>
          <li><Link to="/articles" >Articles</Link></li>
        </ul>
      </nav>
     </header>
     <main>
      <Outlet />
     </main>
    </div>
  );
}

export default App;
