import routes from './../../routes/routes'
import { Link } from 'react-router-dom';


import FollowButton from '../Buttons/FollowButton/FollowButton';

import styles from './AvatarWithFollowButton.module.scss';

const AvatarWithFollowButton = ({src, alt, id, userName, followHandler, isFollow }) => {
    return (
        <div className={styles.avatar}>
            <Link to={`${routes.users}/${id}=${userName}`}>
                <img src={src} alt={alt} />
            </Link>
            <FollowButton callback={followHandler} isFollow={isFollow} />
        </div>
    );
};

export default AvatarWithFollowButton;
