import ReactDOM from 'react-dom/client';
import Game from './Game';
import React from 'react';
import reactLogo from "./react.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app-bar">Tic Tac Toe <button className='restart' onClick={() => { window.location.reload() }}>Start over</button> </div>
    <Game />
    <div className='about'> Developed by Palash Chatterjee <br /> made with <img className='react-logo' src={reactLogo} /> </div>
  </React.StrictMode>
);