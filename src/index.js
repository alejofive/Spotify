import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './containers/Home';
import Playlist from './containers/Playlist';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<h2>about</h2>} path="/about" />
        <Route element={<Playlist />} path="/playlist" />
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

