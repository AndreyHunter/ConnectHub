import User from '../User/User'
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-image">
                <img src="https://images.wallpaperscraft.ru/image/single/most_noch_tuman_123534_2560x1440.jpg" alt="" />
            </div>

            <User/>

        </div>
    )
}

export default Profile