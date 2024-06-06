import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import MyPostsContainer from '../../components/My-Posts/My-Posts-container';
import ProfileTopImage from '../../components/ProfileTopImage/ProfileTopImage';
import defaultProfileBag from './../../assets/images/defaultProfileBag.jpg';
import Loader from '../../ui/Loader/Loader';

import styles from './ProfilePage.module.scss';

const ProfilePage = ({ profile }) => {
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
                background={profile.profileSettings?.profileBackground || defaultProfileBag}
            />
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
};

export { ProfilePage };
