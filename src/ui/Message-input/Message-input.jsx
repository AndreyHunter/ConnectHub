import styles from './Message-input.module.scss'

const MessageInput = ({value, setMessage})  => {
    return (
        <input 
            onChange={(e) => setMessage(e.target.value)}
            value={value}
            type="text" 
            className={styles.input} 
        />
    )
}

export default MessageInput