import React, { useState } from 'react'
import AddFileInput from '../../ui/Add-file-input/Add-file-input'
import MessageInput from './../../ui/Message-input/Message-input'

import styles from './Add-message-form.module.scss'
import AddSmile from '../../ui/AddSmile/Add-smile'

const AddMessageForm = ({addMessage}) => {
    const [message, setMessage] = useState('')
    const [file, setFile] = useState('')

    const handleAddMessage = (e) => {
        e.preventDefault()
        addMessage(message, file)
        setMessage('')
        setFile('')
    }

    const handleSmileSelect = (smile) => {
        setMessage((prevState) => prevState + smile)
    }

    return (
        <form className={styles.form} onSubmit={handleAddMessage}>
            <MessageInput value={message} onChange={(e) => setMessage(e.target.value)}/>   
            <div className={styles.actions}>
               <AddFileInput value={file} onChange={(e) => setFile(e.target.value)}/>
               <AddSmile onSmileSelect={handleSmileSelect}/>
            </div>

            <button className={styles.btn}></button>
        </form>
    )
}

export default AddMessageForm