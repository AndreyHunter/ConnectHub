import { NavLink } from 'react-router-dom'
import styles from './Dialog-item.module.scss'

const DialogItem = ({title, message, image, id}) => {
    const path = `${id}-${title}`

    return (
        <li className={styles.item} data-id={id}>
           <div className={styles.image}>
                <NavLink to={path}>
                    <img src={image} alt={title} />
                </NavLink>
           </div>
            <div className={styles.text}>
                <NavLink
                    to={path} 
                    className={styles.title}>
                    {title}
                </NavLink>
                <p className={styles.message}>
                    {message}
                </p>
            </div>
        </li>
    )
}

export default DialogItem