import MyPostsContainer from './../../components/My-Posts/My-Posts-container';
import User from './../../components/User/User';
import ProfileTopImage from './Profile-top-image/ProfileTopImage';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage />
            <User />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
