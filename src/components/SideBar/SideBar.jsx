import './SideBar.scss'

const SideBar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a href="#!" className="sidebar__link">Profile</a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#!" className="sidebar__link">Messages</a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#!" className="sidebar__link">News</a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#!" className="sidebar__link">Music</a>
                    </li>
                </ul>

                <a href="#!" className="sidebar__link">Settings</a>
            </nav>
        </aside>
    )
}

export default SideBar