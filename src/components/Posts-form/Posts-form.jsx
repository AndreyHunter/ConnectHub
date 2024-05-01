import PostButton from './../../ui/Buttons/Post-button/Post-button'
import PostInput from './../../ui/Post-input/Post-input'
import styles from './Posts-form.module.scss'

const PostsForm = () => {
    return (
        <form className={styles.form}>
            <PostInput/>
            <div className={styles.btn_wraper}><PostButton/></div>
        </form>
    )
}

export default PostsForm