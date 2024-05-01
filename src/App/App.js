import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import Profile from '../components/Profile/Profile'

import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Header/>

            <div className="app-layout">
                <SideBar/>
                <Profile/>
            </div>
        </div>
    )
}

export default App