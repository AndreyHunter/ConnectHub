import { useSelector } from 'react-redux';

import FriendsWidjet from './../Friends-widjet/Friends-widjet';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';
import routes from '../../routes/routes';

const SideBar = ({ friends }) => {
    const clazz = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <NavLink to={routes.profile} className={clazz}>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.users} className={clazz}>
                            Find Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.messages} className={clazz}>
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.news} className={clazz}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.music} className={clazz}>
                            Music
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <NavLink to={routes.settings} className={clazz}>
                        Settings
                    </NavLink>
                </div>
            </nav>

            {/* <section className={styles.friends}>
                <NavLink to={routes.friends}>
                    <span>Friends: {friends.length}</span>
                </NavLink>
                <FriendsWidjet friends={friends} />
            </section> */}
        </aside>
    );
};

export default SideBar;
