import Logo from '../../ui/Logo/Logo';
import AuthButtons from '../AuthButtons/AuthButtons';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Logo />
                <AuthButtons isAuth={false} />
            </div>
        </header>
    );
};

export default Header;
