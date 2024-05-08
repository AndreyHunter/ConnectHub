import React, { useState } from 'react'
import { addPostAction } from './../../store/Actions/profile-actions'

import PostButton from './../../ui/Buttons/Post-button/Post-button'
import PostInput from './../../ui/Post-input/Post-input'

import styles from './Posts-form.module.scss'

const PostsForm = ({dispatch}) => {
    const [postText, setPostText] = useState('')

    const addPostHandle = (e) => {
        e.preventDefault()
        if (!postText) return;
        dispatch(addPostAction(postText))
        setPostText('')
    }

    return (
        <form className={styles.form} onSubmit={addPostHandle}>
            <PostInput value={postText} setPostText={setPostText}/>
            <div className={styles.wraper}>
                <PostButton/>
            </div>
        </form>
    )
}

export default PostsForm