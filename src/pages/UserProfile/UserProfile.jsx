import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import ProfileTopImage from '../../components/ProfileTopImage/ProfileTopImage';
import defaultProfileBag from './../../assets/images/defaultProfileBag.jpg';
import Loader from './../../ui/Loader/Loader';

import styles from './UserProfile.module.scss';

const UserProfile = ({ profile }) => {
    if (!profile) {
        return (
            <div className={styles.loader}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={styles.profile}>
            <ProfileTopImage
                background={profile?.profileSettings?.profileBackground || defaultProfileBag}
            />
            <ProfileInfo profile={profile} />
        </div>
    );
};

export default UserProfile;
