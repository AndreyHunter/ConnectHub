import UserCard from '../../components/UserCard/UserCard';
import ShowMoreButton from '../../ui/Buttons/ShowMoreButton/ShowMoreButton';

import styles from './Users.module.scss';

const Users = ({ users, followHandler }) => {
    return (
        <section>
            <h2 className={styles.title}>Users</h2>

            <ul className={styles.list}>
                {users &&
                    users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            followHandler={() => followHandler(user.id)}
                        />
                    ))}
            </ul>

            {/* <div className={styles.btnWrapper}> 
                <ShowMoreButton />
           </div> */}
        </section>
    );
};

export default Users;
