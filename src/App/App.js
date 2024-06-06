import { Route, Routes } from 'react-router-dom';
import routes from '../routes/routes';

import { HomePage } from '../pages/HomePage/HomePage';

import { ProfilePageContainer } from './../pages/ProfilePage/ProfilePageContainer.jsx';
import UserProfileContainer from '../pages/UserProfile/UserProfileContainer';
import ChatContainer from '../pages/Chat/ChatContainer';
import UsersContainer from '../pages/Users/UsersContainer';
import Registration from '../pages/Registration/Registration';

import SideBarContainer from '../components/SideBar/SideBarContainer';
import Header from './../components/Header/Header';

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.layout}>
                <SideBarContainer />
                <Routes>
                    <Route path={routes.registration} element={<Registration />} />

                    <Route path={routes.home} element={<HomePage />} />
                    <Route path={routes.profile} element={<ProfilePageContainer />} />
                    <Route path={routes.userProfile} element={<UserProfileContainer />} />
                    <Route path={routes.users} element={<UsersContainer />} />
                    <Route path={routes.messages} element={<ChatContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
