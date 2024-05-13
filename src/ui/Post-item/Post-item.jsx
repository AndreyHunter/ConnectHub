import Like from './../Like/Like';
import SharedButton from './../Buttons/Shared-button/Shared-button';

import styles from './Post-item.module.scss';

const PostItem = ({ message, image, likes, reposts, deletePost, editPost, toggleLike }) => {
    return (
        <li className={styles.item}>
            <div className={styles.post}>
                <img className={styles.image} src={image} alt="postImage" />
                {message}
            </div>
            <div className={styles.actions_info}>
                <div className={styles.actions_count}>
                    <div>Лайков: {likes}</div>
                    <div>Поделились: {reposts}</div>
                </div>
                <div className={styles.actions}>
                    <Like toggleLike={toggleLike} />
                    <SharedButton />
                </div>
            </div>
            <button type="button" onClick={deletePost}>
                УДАЛИТЬ ПОСТ
            </button>
            <button type="button" onClick={editPost}>
                РЕДАКТИРОВАТЬ ПОСТ
            </button>
        </li>
    );
};

export default PostItem;
