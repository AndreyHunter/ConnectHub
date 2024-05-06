import DialogItem from '../../ui/Dialog-item/Dialog-item'

import styles from './Messages.module.scss'

const Messages = ({state}) => {
    return (
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
    )
}

export default Messages