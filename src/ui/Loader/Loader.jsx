import loader from '../../assets/oval.svg';

import styles from './Loader.module.scss';

const Loader = () => {
    return <img src={loader} alt="loader" className={styles.loader} />;
};

export default Loader;
