import PostsForm from './../Posts-form/Posts-form'
import PostItem from './../../ui/Post-item/Post-item'
import logoImage from './../../assets/images/user-image.jpg'

import styles from './My-posts.module.scss'

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.title}>
                My Posts
            </div>

            <PostsForm/>
            
            <ul className={styles.list}>
                <PostItem 
                    image={logoImage}
                    text='Hey, why nobody love me?'
                />
            </ul>
        </div>
    )
}

export default MyPosts