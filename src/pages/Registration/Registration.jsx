import RegistrationFormContainer from './../../components/RegistrationForm/RegistrationFormContainer';

import styles from './Registration.module.scss';

const Registration = () => {
    return (
        <div className={styles.wrapper}>
            <RegistrationFormContainer />
        </div>
    );
};

export default Registration;
