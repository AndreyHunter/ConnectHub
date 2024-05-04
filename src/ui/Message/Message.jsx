import styles from './Message.module.scss'

const Message = ({message}) => {
    return (
        <li className={styles.message}>
            {message}
        </li>
    )
}

export default Message