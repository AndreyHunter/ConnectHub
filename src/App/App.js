import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './../components/Header/Header'
import SideBar from './../components/SideBar/SideBar'

import Profile from './../pages/Profile/Profile'
import Dialog from './../pages/Dialog/Dialog' 

import './App.scss'

const App = ({state}) => {
    return (
        <Router>
            <div className='app'>
                <Header/>

                <div className="app-layout">
                    <SideBar friends={state.friends}/>
                    <Routes>
                        <Route path="/" element={<Profile state={state.profilePage}/>} />
                        <Route path="/profile" element={<Profile state={state.profilePage} />} />
                        <Route path="/messages/*" element={<Dialog state={state.messagesPage}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App