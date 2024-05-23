import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import ProfileTopImage from '../Profile/Profile-top-image/ProfileTopImage';
import defaultProfileBag from './../../assets/images/defaultProfileBag.jpg';
import Loader from './../../ui/Loader/Loader';

import styles from './UserProfile.module.scss';

const UserProfile = ({ profile, isLoading }) => {
    return (
        <div className={styles.profile}>
            <ProfileTopImage
                background={profile?.profileSettings?.profileBackground || defaultProfileBag}
            />
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <ProfileInfo profile={profile} isLoading={isLoading} />
            )}
        </div>
    );
};

export default UserProfile;
