import PostItem from './../../ui/Post-item/Post-item';
import PostsForm from './../Posts-form/Posts-form';

import styles from './My-Posts.module.scss';

const MyPosts = ({ posts, addPost, deletePost, editPost, toggleLike }) => {

    const editPostHandler = (id, value) => {
        if (!value) return;
        editPost(id, value);
    };

    return (
        <div className={styles.posts}>
            <div className={styles.title}>My Posts</div>

            <PostsForm addPost={addPost}/>

            <div className={styles.list_wrapper}>
                <ul className={styles.list}>
                    {posts.map((post) => (
                        <PostItem
                            key={post.id}
                            message={post.message}
                            image={post.image}
                            likes={post.likes}
                            reposts={post.reposts}
                            deletePost={() => deletePost(post.id)}
                            editPost={() => editPostHandler(post.id, prompt())}
                            toggleLike={() => toggleLike(post.id)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyPosts;
