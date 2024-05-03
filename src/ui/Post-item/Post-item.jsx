import Like from './../../ui/Like/Like'

import styles from './Post-item.module.scss'

const PostItem = ({text, image, likes}) => {
    return (
        <li>
            <div className={styles.item}>
                <img 
                    className={styles.image}
                    src={image} 
                    alt="postImage" />
                {text}
            </div>
            <div className={styles.actions_info}>
                <div>Лайков: {likes}</div>
                <Like/>
            </div>
        </li>
    )
}

export default PostItem