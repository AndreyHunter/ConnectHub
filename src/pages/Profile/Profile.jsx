import MyPosts from './../../components/My-Posts/My-Posts';
import User from './../../components/User/User';
import ProfileTopImage from './Profile-top-image/ProfileTopImage';

import styles from './Profile.module.scss';

const Profile = ({ state, dispatch }) => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage />
            <User />
            <MyPosts posts={state.posts} dispatch={dispatch} postText={state.postText} />
        </div>
    );
};

export default Profile;
