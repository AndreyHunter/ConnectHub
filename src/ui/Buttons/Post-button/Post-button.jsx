import './../buttons.scss'
import styles from './Post-button.module.scss'

const PostButton = () => {
    return (
        <button 
            type='button'
            className={`btn ${styles.btn}`}
        >
            Add post
        </button>
    )
}

export default PostButton