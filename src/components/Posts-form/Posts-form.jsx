import { useState } from 'react';

import PostButton from './../../ui/Buttons/Post-button/Post-button';
import PostInput from './../../ui/Post-input/Post-input';

import styles from './Posts-form.module.scss';

const PostsForm = ({ addPost }) => {
    const [postText, setPostText] = useState('');

    const addPostHandler = (e) => {
        e.preventDefault();
        if (!postText) return;
        addPost(postText);
        setPostText('');
    };

    return (
        <form className={styles.form} onSubmit={addPostHandler}>
            <PostInput value={postText} onChange={setPostText} />
            <div className={styles.wraper}>
                <PostButton />
            </div>
        </form>
    );
};

export default PostsForm;
