import DialogItem from '../../ui/Dialog-item/Dialog-item';

import styles from './Messages.module.scss';

const Messages = ({ dialogs }) => {
    return (
        <ul className={styles.dialog_list}>
            {dialogs.map((dialog) => (
                <DialogItem
                    key={dialog.id}
                    id={dialog.id}
                    name={dialog.name}
                    message={dialog.message}
                    image={dialog.image}
                />
            ))}
        </ul>
    );
};

export default Messages;
