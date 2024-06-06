import Header from './../../components/Header/Header';
import SideBarContainer from './../../components/SideBar/SideBar';

const MainLayout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            <div className="app-layout">
                <SideBarContainer />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;