import styles from './FollowButton.module.scss';

const FollowButton = ({ callback, isFollow }) => {
    const followText = isFollow ? 'UnFollow' : 'Follow';

    return (
        <button type="button" className={styles.btn} onClick={callback}>
            {followText}
        </button>
    );
};

export default FollowButton;
