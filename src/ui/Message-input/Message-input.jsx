import styles from './Message-input.module.scss'

const MessageInput = ({value, onChange})  => {
    return (
        <input 
            onChange={onChange}
            value={value}
            type="text" 
            className={styles.input} 
        />
    )
}

export default MessageInput