import DialogItem from '../../ui/Dialog-item/Dialog-item';

import styles from './Messages.module.scss';

const Messages = ({ users }) => {
    return (
        <ul className={styles.dialog_list}>
            {users.map((user) => (
                <DialogItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    message={user.message}
                    image={user.image}
                />
            ))}
        </ul>
    );
};

export default Messages;
