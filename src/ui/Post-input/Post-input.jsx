import styles from './Post-input.module.scss';

const PostInput = ({ value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <input
                onChange={(e) => onChange(e.target.value)}
                value={value}
                type="text"
                className={styles.input}
                placeholder="your news..."
            />
        </div>
    );
};

export default PostInput;
