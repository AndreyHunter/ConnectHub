import Messages from '../../components/Messages/Messages'
import UserMessage from '../../ui/User-message/User-message'
import AddMessageForm from '../../components/Add-message-form/Add-message-form'

import styles from './Chat.module.scss'

const Chat = ({state, addMessage}) => {
    return (
        <div className={styles.wrapper}>
            <Messages state={state}/>
            
            <section className={styles.chat}>
                <ul className={styles.chat_messages}>
                    {state.messages.map(message => (
                        <UserMessage
                            key={message.id}
                            message={message.message}
                            image={message.image}
                        />
                    ))}
                </ul>
                <AddMessageForm addMessage={addMessage}/>
            </section>
        </div>  
    )
}

export default Chat