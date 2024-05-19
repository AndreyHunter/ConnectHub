import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import styles from './Logo.module.scss';
import routes from '../../routes/routes';

const Logo = () => {
    return (
        <NavLink to={routes.home} className={styles.logo}>
            <img src={logo} alt="logo" className={styles.image} />
            ConnectHub
        </NavLink>
    );
};

export default Logo;
