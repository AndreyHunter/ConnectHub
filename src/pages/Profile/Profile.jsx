import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import MyPostsContainer from './../../components/My-Posts/My-Posts-container';
import ProfileTopImage from './Profile-top-image/ProfileTopImage';
import defaultProfileBag from './../../assets/images/defaultProfileBag.jpg';
import Loader from './../../ui/Loader/Loader';

import styles from './Profile.module.scss';

const Profile = ({ profile, isLoading }) => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage
                background={profile.profileSettings?.profileBackground || defaultProfileBag}
            />
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <ProfileInfo profile={profile} isLoading={isLoading} />
            )}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
