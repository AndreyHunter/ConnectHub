import MyPosts from './../My-Posts/My-posts'
import User from './../User/User'
import styles from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.image}>
                <img src="https://images.wallpaperscraft.ru/image/single/most_noch_tuman_123534_2560x1440.jpg" alt="" />
            </div>

            <User/>
            <MyPosts/>
        </div>
    )
}

export default Profile