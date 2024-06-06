import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import store from './store/index';
import { Provider, connect } from 'react-redux';
import App from './App/App';

import './index.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));

const ConecctedApp = connect()(App);

root.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <ConecctedApp />
            </React.StrictMode>
        </Provider>
    </Router>,
);
