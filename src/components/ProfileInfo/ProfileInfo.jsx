import UserLogo from '../../ui/User-logo/User-logo';
import ProfileContacts from '../ProfileContacts/ProfileContacts';
import DefaultLogo from './../../assets/images/user-image.jpg';

import styles from './ProfileInfo.module.scss';

const ProfileInfo = ({ profile }) => {
    return (
        <div className={styles.profile}>
            <UserLogo image={profile.photos?.small || profile.photos?.large || DefaultLogo} />

            <div className={styles.info}>
                <section>
                    <div className={styles.title}>{profile.fullName || profile.name}</div>
                    <div className={styles.location}>
                        <div>Country: {profile.location.country}</div>
                        <div>City: {profile.location.city}</div>
                    </div>
                    <ul className={styles.list}>
                        {profile.dateOfbirth && <li>Date of Birth: {profile.dateOfbirth}</li>}
                    </ul>
                </section>
                <ProfileContacts contacts={profile.contacts}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
