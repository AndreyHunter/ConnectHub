import { Link } from 'react-router-dom';
import AvatarWithFollowButton from '../../ui/AvatarWithFollowButton/AvatarWithFollowButton';

import styles from './UserCard.module.scss';
import routes from '../../routes/routes';

const UserCard = ({ user, followHandler }) => {
    const sliceStrLength = (str) => (str.length > 30 ? `${str.trim().slice(0, 30)}...` : str);

    return (
        <li className={styles.user}>
            <AvatarWithFollowButton
                src={user.avatar}
                alt={user.name}
                id={user.id}
                userName={user.name}
                followHandler={followHandler}
                isFollow={user.isFollow}
            />
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <Link to={`${routes.users}/${user.id}=${user.name}`} className={styles.name}>
                        {user.name}
                    </Link>
                    <p className={styles.status}>
                        {user.status ? sliceStrLength(user.status) : 'Not-status'}
                    </p>
                </div>
                <div className={styles.location}>
                    <div className={styles.country}>{user.location.country}</div>
                    <div className={styles.city}>{user.location.city}</div>
                </div>
            </div>
        </li>
    );
};

export default UserCard;
