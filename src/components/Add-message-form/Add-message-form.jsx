import AddFileInput from '../../ui/Add-file-input/Add-file-input';
import MessageInput from './../../ui/Message-input/Message-input';
import AddSmile from '../../ui/AddSmile/Add-smile';

import styles from './Add-message-form.module.scss';

const AddMessageForm = ({ addMessage, messageText, filePath, setMessageText, setFilePath }) => {

    const handleAddMessage = (e) => {
        e.preventDefault();
        if (!messageText) return;
        addMessage(messageText, filePath);
        setMessageText('')
        setFilePath('')
    };

    return (
        <form className={styles.form} onSubmit={handleAddMessage}>
            <MessageInput value={messageText} setMessage={setMessageText} />
            <div className={styles.actions}>
                <AddFileInput setFile={setFilePath} />
                <AddSmile onSmileSelect={(smile) => setMessageText(messageText + smile)} />
            </div>

            <button className={styles.btn}></button>
        </form>
    );
};

export default AddMessageForm;
