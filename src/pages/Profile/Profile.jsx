import MyPosts from './../../components/My-Posts/My-Posts'
import User from './../../components/User/User'
import ProfileTopImage from './Profile-top-image/ProfileTopImage'

import styles from './Profile.module.scss'


const Profile = ({state}) => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage/>
            <User/>
            <MyPosts posts={state.posts}/>
        </div>
    )
}

export default Profile