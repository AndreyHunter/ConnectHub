import styles from './ShowMoreButton.module.scss';

const ShowMoreButton = ({ callback }) => {
    return (
        <button className={styles.btn} onClick={callback}>
            Show more
        </button>
    );
};

export default ShowMoreButton;
