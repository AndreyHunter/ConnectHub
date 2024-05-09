import logo from './../../assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.image} />
            <a href="#!">ConnectHub</a>
        </div>
    );
};

export default Logo;
