import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import Profile from './../components/Profile/Profile'
import Dialog from './../components/Dialog/Dialog' 

import './App.scss'

const userData = [
    {
        id: 1,
        title: 'Vladimir',
        message: 'Вречера я туда сходил и...',
        image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg'
    },
    {
        id: 2,
        title: 'Dasha',
        message: 'Го сходим прогулятся?',
        image: 'https://w7.pngwing.com/pngs/1022/853/png-transparent-girl-lady-user-woman-famous-character-vol-colored-icon.png'
    },
    {
        id: 3,
        title: 'Alex',
        message: 'Знаешь, ты наверно прав...',
        image: 'https://i1.sndcdn.com/avatars-000692052683-rldagd-t240x240.jpg'
    }
]

const postsData = [
    {
        id: 1,
        image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
        text: 'Hey, why nobody love me?',
        likes: 12
    },
    {
        id: 2,
        image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
        text: 'it"s out new Program! Hey!',
        likes: 7
    }
]


const App = () => {
    return (
    <Router>
        <div className='app'>
            <Header/>

            <div className="app-layout">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Profile/>} />
                    <Route path="/profile" element={<Profile posts={postsData} />} />
                    <Route path="/messages*" element={<Dialog data={userData} />} />
                </Routes>
            </div>
        </div>
    </Router>
    )
}

export default App