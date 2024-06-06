import { Link } from 'react-router-dom';
import routes from '../../routes/routes';

import { Button } from '../../ui/Buttons/Button/Button';

import styles from './AuthButtons.module.scss';

const AuthButtons = ({ isAuth }) => {
    return isAuth ? (
        <Button variant="orange">Выйти</Button>
    ) : (
        <div className={styles.buttons}>
            <Link to={routes}>
                <Button variant="orange">Войти</Button>
            </Link>
            <Button>Зарегистрироватся</Button>
        </div>
    );
};

export default AuthButtons;
