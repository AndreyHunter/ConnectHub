import styles from './Post-input.module.scss'

const PostInput = () => {
    return (
        <div className={styles.wrapper}>
            <input 
            type="text" 
            className={styles.input}
            placeholder='your news...'
            />
        </div>
    )
}

export default PostInput