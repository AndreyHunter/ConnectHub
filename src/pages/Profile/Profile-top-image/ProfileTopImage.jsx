import styles from './ProfileTopImage.module.scss';

const ProfileTopImage = ({background}) => {
    return (
        <div className={styles.image}>
            <img
                src={background}
                alt="profile background"
            />
        </div>
    );
};

export default ProfileTopImage;
