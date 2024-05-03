import DialogItem from '../../ui/Dialog-item/Dialog-item.jsx'

import styles from './Dialog.module.scss'

const Dialog = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.dialog_list}>
                {data.map(user => (
                    <DialogItem
                        key={user.id}
                        id={user.id}
                        title={user.title}
                        message={user.message}
                        image={user.image}
                    />
                ))}
            </ul>
            <div className={styles.dialog_messages}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quo tempora nesciunt cum quae nobis, aut odit nisi quam quas quidem repudiandae dolor dolore cumque libero expedita eveniet quisquam fuga.
            </div>
        </div>
    )
}

export default Dialog