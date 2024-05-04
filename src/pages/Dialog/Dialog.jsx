import DialogItem from '../../ui/Dialog-item/Dialog-item'
import Message from '../../ui/Message/Message'

import styles from './Dialog.module.scss'

const Dialog = ({state}) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.dialog_list}>
                {state.users.map(user => (
                    <DialogItem
                        key={user.id}
                        id={user.id}
                        title={user.title}
                        message={user.message}
                        image={user.image}
                    />
                ))}
            </ul>
            <ul className={styles.dialog_messages}>
                {state.messages.map(message => (
                    <Message 
                        key={message.id}
                        message={message.message}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Dialog