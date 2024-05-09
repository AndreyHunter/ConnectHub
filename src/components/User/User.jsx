import UserLogo from './../../ui/User-logo/User-logo';
import logoImage from './../../assets/images/user-image.jpg';
import styles from './User.module.scss';

const User = () => {
    return (
        <div className={styles.user}>
            <UserLogo image={logoImage} />
            <div>
                <a href="#!" className={styles.title}>
                    Dmitry K.
                </a>
                <ul className={styles.list}>
                    <li>Date of Birth: 2 january</li>
                    <li>City: Minsk</li>
                    <li>Education: BSU'11</li>
                    <li>Web Site: https://it-kamasutra.com</li>
                </ul>
            </div>
        </div>
    );
};

export default User;
