import styles from './User-logo.module.scss';

const UserLogo = ({ image }) => {
    return (
        <div className={styles.logo}>
            <a href="#!">
                <img src={image} alt="user-logo" className={styles.img} />
            </a>
        </div>
    );
};

export default UserLogo;
