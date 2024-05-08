import PostItem from './../../ui/Post-item/Post-item'
import PostsForm from './../Posts-form/Posts-form'

import styles from './My-Posts.module.scss'

const MyPosts = ({posts, dispatch, postText}) => {
    return (
        <div className={styles.posts}>
            <div className={styles.title}>
                My Posts
            </div>

            <PostsForm dispatch={dispatch} postText={postText}/>

            <div className={styles.list_wrapper}>
                <ul className={styles.list}>
                    {posts.map((post) => (
                          <PostItem
                            key={post.id}
                            message={post.message}
                            image={post.image}
                            likes={post.likes}
                            reposts={post.reposts}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyPosts