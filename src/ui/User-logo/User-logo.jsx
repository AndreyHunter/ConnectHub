import styles from './User-logo.module.scss';

const UserLogo = ({ image }) => {
    return (
        <div className={styles.logo}>
            <img src={image} alt="user-logo" className={styles.img} />
        </div>
    );
};

export default UserLogo;
