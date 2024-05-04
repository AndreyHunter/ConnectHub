import styles from './Message-input.module.scss'

const MessageInput = ()  => {
    return (
        <div className={styles.wrapper}>
            <input 
                type="text" 
                className={styles.input} 
            />
            <div className={styles.actions}>
               <div className={styles.icon}>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/5311/5311970.png" 
                        alt="add-file" 
                    />
               </div>
               <div className={styles.icon}>
                    <img 
                        src="https://www.svgrepo.com/show/494000/smile.svg" 
                        alt="smile" 
                    />
               </div>
            </div>
        </div>
    )
}

export default MessageInput