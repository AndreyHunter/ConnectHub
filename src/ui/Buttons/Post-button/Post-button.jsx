import './../buttons.scss';
import styles from './Post-button.module.scss';

const PostButton = ({ onClick }) => {
    return (
        <button onClick={onClick} type="submit" className={`btn ${styles.btn}`}>
            Add post
        </button>
    );
};

export default PostButton;
