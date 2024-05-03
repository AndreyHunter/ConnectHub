import PostItem from '../../ui/Post-item/Post-item'
import PostsForm from '../Posts-form/Posts-form'

import styles from './My-Posts.module.scss'

const MyPosts = ({posts}) => {
    return (
        <div className={styles.posts}>
            <div className={styles.title}>
                My Posts
            </div>

            <PostsForm/>
            
            <ul className={styles.list}>
                {posts.map((post) => (
                      <PostItem
                      key={post.id}
                      text={post.text}
                      image={post.image}
                      likes={post.likes}
                  />
                ))}
            </ul>
        </div>
    )
}

export default MyPosts