import React from 'react'

import PostButton from './../../ui/Buttons/Post-button/Post-button'
import PostInput from './../../ui/Post-input/Post-input'
import styles from './Posts-form.module.scss'

const PostsForm = ({addPost}) => {

    const elem = React.createRef()

    const addPostHandle = (e) => {
        e.preventDefault()
        addPost(elem.current.value, '')
    }

    return (
        <form className={styles.form} onSubmit={addPostHandle}>
            <PostInput reF={elem}/>
            <div className={styles.wraper}>
                <PostButton/>
            </div>
        </form>
    )
}

export default PostsForm