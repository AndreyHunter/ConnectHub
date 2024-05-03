import MyPosts from '../My-Posts/My-Posts'
import User from './../User/User'
import styles from './Profile.module.scss'

const ProfileTopImage = () => {
    return (
        <div className={styles.image}>
            <img src="https://images.wallpaperscraft.ru/image/single/most_noch_tuman_123534_2560x1440.jpg" alt="" />
        </div>
    )
} 

const Profile = ({posts}) => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage/>
            <User/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile