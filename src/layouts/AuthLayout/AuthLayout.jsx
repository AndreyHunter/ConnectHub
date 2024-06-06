import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }) => {
    return (
        <div className={styles.wrapper}> 
            {children}
        </div>
    );
};

export default AuthLayout;