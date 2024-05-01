import './../buttons.scss'
import styles from './Post-button.module.scss'

const PostButton = () => {
    return (
        <button 
            type='button'
            className={`btn ${styles.btn}`}
        >
            Добавить пост
        </button>
    )
}

export default PostButton