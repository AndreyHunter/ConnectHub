import { Route, Routes } from 'react-router-dom';
import routes from '../routes/routes';

import Header from './../components/Header/Header';
import SideBarContainer from '../components/SideBar/SideBarContainer';
import Profile from './../pages/Profile/Profile';
import ChatContainer from '../pages/Chat/ChatContainer';

import './App.scss';
import UsersContainer from '../pages/Users/UsersContainer';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app-layout">
                <SideBarContainer />
                <Routes>
                    <Route path={routes.home} element={<Profile />} />
                    <Route path={routes.profile} element={<Profile />} />
                    <Route path={routes.messages} element={<ChatContainer />} />
                    <Route path={routes.users} element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
