import React, { useState } from 'react';
import { addMessageAction } from './../../store/Actions/messages-actions';

import AddFileInput from '../../ui/Add-file-input/Add-file-input';
import MessageInput from './../../ui/Message-input/Message-input';
import AddSmile from '../../ui/AddSmile/Add-smile';

import styles from './Add-message-form.module.scss';

const AddMessageForm = ({ dispatch }) => {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');

    const handleAddMessage = (e) => {
        e.preventDefault();
        if (!message) return;
        dispatch(addMessageAction(message, file));
        setMessage('');
        setFile('');
    };

    return (
        <form className={styles.form} onSubmit={handleAddMessage}>
            <MessageInput value={message} setMessage={setMessage} />
            <div className={styles.actions}>
                <AddFileInput setFile={setFile} />
                <AddSmile onSmileSelect={(smile) => setMessage(message + smile)} />
            </div>

            <button className={styles.btn}></button>
        </form>
    );
};

export default AddMessageForm;
