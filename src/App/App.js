import { Route, Routes } from 'react-router-dom';

import Header from './../components/Header/Header';
import SideBar from './../components/SideBar/SideBar';
import Profile from './../pages/Profile/Profile';
import Chat from './../pages/Chat/Chat';

import './App.scss';

const App = ({ state, dispatch }) => {
    return (
        <div className="app">
            <Header />

            <div className="app-layout">
                <SideBar friends={state.friends} />
                <Routes>
                    <Route
                        path="/"
                        element={<Profile state={state.profilePage} dispatch={dispatch} />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile state={state.profilePage} dispatch={dispatch} />}
                    />
                    <Route
                        path="/messages/*"
                        element={<Chat state={state.messagesPage} dispatch={dispatch} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
