import UserLogo from '../../ui/User-logo/User-logo';
import DefaultLogo from './../../assets/images/user-image.jpg';

import styles from './ProfileInfo.module.scss';

const ProfileInfo = ({ profile }) => {
    return (
        <div className={styles.user}>
            <UserLogo image={profile.photos?.small || profile.photos?.large || DefaultLogo} />
            <div>
                <div className={styles.title}>{profile?.fullName}</div>

                <div className={styles.info}>
                    <ul className={styles.list}>
                        <li>Date of Birth: {profile.dateOfbirth}</li>
                        <li>Country: {profile.location?.country}</li>
                        <li>City: {profile.location?.city}</li>
                    </ul>
                    <div>
                        Contacts
                        <ul className={styles.list}>
                            {profile.contacts?.phone && <li>Phone: {profile.contacts?.phone}</li>}
                            {profile.contacts?.email && <li>Email: {profile.contacts?.email}</li>}
                            {profile.contacts?.youtube && (
                                <li>Youtube: {profile.contacts?.youtube}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
