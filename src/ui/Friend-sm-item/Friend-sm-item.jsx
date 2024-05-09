import { NavLink } from 'react-router-dom';
import styles from './Friend-sm-item.module.scss';

const FriendSmItem = ({ image, name }) => {
    return (
        <li className={styles.friend}>
            <NavLink>
                <img src={image} alt={name} />
                {name}
            </NavLink>
        </li>
    );
};

export default FriendSmItem;
