import Like from './../Like/Like'
import SharedButton from './../Buttons/Shared-button/Shared-button'

import styles from './Post-item.module.scss'

const PostItem = ({message, image, likes, reposts}) => {
    return (
        <li className={styles.item}>
            <div className={styles.post}>
                <img 
                    className={styles.image}
                    src={image} 
                    alt="postImage" />
                {message}
            </div>
            <div className={styles.actions_info}>
                <div className={styles.actions_count}>
                    <div>Лайков: {likes}</div>
                    <div>Поделились: {reposts}</div>
                </div>
                <div className={styles.actions}>
                    <Like/>
                    <SharedButton/>
                </div>
            </div>
        </li>
    )
}

export default PostItem