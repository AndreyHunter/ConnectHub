import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App'
import state from './store/state'
import {addPost, addMessage} from './store/state'



import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} addMessage={addMessage}/>
  </React.StrictMode>
);

