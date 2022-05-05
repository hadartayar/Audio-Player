import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import tracks from "./tracks";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main tracks={tracks}/>
  </React.StrictMode>
);
