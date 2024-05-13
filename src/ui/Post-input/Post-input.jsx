import styles from './Post-input.module.scss';

const PostInput = ({ value, setPostText }) => {
    return (
        <div className={styles.wrapper}>
            <input
                onChange={(e) => setPostText(e.target.value)}
                value={value}
                type="text"
                className={styles.input}
                placeholder="your news..."
            />
        </div>
    );
};

export default PostInput;
