import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App'
import state from './redux/state'

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

