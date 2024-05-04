import PostItem from './../../ui/Post-item/Post-item'
import PostsForm from './../Posts-form/Posts-form'

import styles from './My-Posts.module.scss'

const MyPosts = ({posts}) => {
    return (
        <div className={styles.posts}>
            <div className={styles.title}>
                My Posts
            </div>

            <PostsForm/>

            <div className={styles.list_wrapper}>
                <ul className={styles.list}>
                    {posts.map((post) => (
                          <PostItem
                            key={post.id}
                            message={post.message}
                            image={post.image}
                            likes={post.likes}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyPosts