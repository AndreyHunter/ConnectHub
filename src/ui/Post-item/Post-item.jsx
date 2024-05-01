import styles from './Post-item.module.scss'

const PostItem = ({text, image}) => {
    return (
        <div className={styles.item}>
            <img 
                className={styles.image}
                src={image} 
                alt="postImage" />
            {text}
        </div>
    )
}

export default PostItem