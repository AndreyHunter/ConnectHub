import DialogItem from '../../ui/Dialog-item/Dialog-item'
import UserMessage from './../../ui/User-message/User-message'
import MessageInput from './../../ui/Message-input/Message-input'

import styles from './Dialog.module.scss'

const Dialog = ({state}) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.dialog_list}>
                {state.users.map(user => (
                    <DialogItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        message={user.message}
                        image={user.image}
                    />
                ))}
            </ul>
            <section className={styles.dialog}>
                <ul className={styles.dialog_messages}>
                    {state.messages.map(message => (
                        <UserMessage
                            key={message.id}
                            message={message.message}
                            image={message.image}
                        />
                    ))}
                </ul>
                <MessageInput/>
            </section>
        </div>
    )
}

export default Dialog