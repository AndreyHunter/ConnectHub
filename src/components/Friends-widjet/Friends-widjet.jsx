import FriendSmItem from './../../ui/Friend-sm-item/Friend-sm-item'

import {getRandomItemsFromArray} from './../../utils/Array-utils'
import styles from './Friends-widjet.module.scss'


const FriendsWidjet = ({friends}) => {
    const randomUsers = getRandomItemsFromArray(friends, 4)

    return (
        <ul className={styles.widjet}>
            {randomUsers.map(friend => (
                <FriendSmItem
                    key={friend.id}
                    image={friend.image}
                    name={friend.name}
                />
            ))}
        </ul>
    )
}

export default FriendsWidjet