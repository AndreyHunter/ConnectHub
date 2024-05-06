import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './../components/Header/Header'
import SideBar from './../components/SideBar/SideBar'

import Profile from './../pages/Profile/Profile'
import Chat from './../pages/Chat/Chat'

import './App.scss'

const App = ({state, addPost, addMessage}) => {
    return (
        <Router>
            <div className='app'>
                <Header/>

                <div className="app-layout">
                    <SideBar friends={state.friends}/>
                    <Routes>
                        <Route path="/" element={<Profile state={state.profilePage} addPost={addPost}/>} />
                        <Route path="/profile" element={<Profile state={state.profilePage} addPost={addPost} />} />
                        <Route path="/messages/*" element={<Chat state={state.messagesPage} addMessage={addMessage}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App