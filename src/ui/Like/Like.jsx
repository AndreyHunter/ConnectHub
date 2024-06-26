import styles from './Like.module.scss';

const Like = ({ toggleLike }) => {
    return (
        <div className={styles.like} onClick={toggleLike}>
            <img
                src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png"
                alt="like"
            />
        </div>
    );
};

export default Like;
