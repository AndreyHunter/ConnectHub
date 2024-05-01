import styles from './SideBar.module.scss'

const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <a href="#!" className={styles.link}>Profile</a>
                    </li>
                    <li>
                        <a href="#!" className={styles.link}>Messages</a>
                    </li>
                    <li>
                        <a href="#!" className={styles.link}>News</a>
                    </li>
                    <li>
                        <a href="#!" className={styles.link}>Music</a>
                    </li>
                </ul>

                <div>
                    <a href="#!" className={styles.link}>Settings</a>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar