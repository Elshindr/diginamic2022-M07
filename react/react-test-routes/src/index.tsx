import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Articles from './components/Articles';
import reportWebVitals from './reportWebVitals';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom';
import { loader as articlesLoader } from './loaders/articles';
import {actionAdd as addArticle} from './actions/article';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="articles" element={<Articles />} loader={articlesLoader} />
      </Route>
      <Route path="/add/article" action={addArticle} />
    </>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
