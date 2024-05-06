import styles from './Post-input.module.scss'

const PostInput = ({reF}) => {
    return (
        <div className={styles.wrapper}>
            <input
            ref={reF}
            type="text" 
            className={styles.input}
            placeholder='your news...'
            />
        </div>
    )
}

export default PostInput