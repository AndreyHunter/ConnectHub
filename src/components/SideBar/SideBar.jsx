import FriendsWidjet from './../Friends-widjet/Friends-widjet'
import { NavLink } from 'react-router-dom'

import styles from './SideBar.module.scss'

const SideBar = ({friends}) =>  {
    const clazz = ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            to='/profile' 
                            className={clazz}>
                            Profile
                        </NavLink> 
                    </li> 
                    <li>
                        <NavLink 
                            to='/messages' 
                            className={clazz}>
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/news' 
                            className={clazz}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/music' 
                            className={clazz}>
                            Music
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <NavLink
                        to='/settings' 
                        className={clazz}>
                        Settings
                    </NavLink>
                </div>
            </nav>

            <section className={styles.friends}>
                <NavLink to='/friends'>
                    <span>Friends: {friends.length}</span>
                </NavLink>
                <FriendsWidjet friends={friends}/>
            </section>
        </aside>
    )
   
}

export default SideBar