import { NavLink } from 'react-router-dom';
import styles from './Dialog-item.module.scss';

const DialogItem = ({ name, message, image, id }) => {
    const path = `${id}-${name}`;

    return (
        <li className={styles.item} data-id={id}>
            <div className={styles.image}>
                <NavLink to={path}>
                    <img src={image} alt={name} />
                </NavLink>
            </div>
            <div className={styles.text}>
                <NavLink to={path} className={styles.title}>
                    {name}
                </NavLink>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
};

export default DialogItem;
