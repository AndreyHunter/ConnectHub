import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App'
import store from './store/store'

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(
        <Router>
            <React.StrictMode>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </Router>
    );
}


store.subscribe(renderApp)
renderApp()
