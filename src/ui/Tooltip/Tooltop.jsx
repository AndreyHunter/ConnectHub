import { useState } from 'react';

import styles from './Tooltio.module.scss';

const Tooltip = ({ title, question, answer }) => {
    const [show, setShow] = useState(false);

    const toggleDisplay = () => {
        setShow(!show);
    };

    return (
        <div className={styles.tooltip}>
            <div className={styles.title}>{title}</div>
            <p className={styles.desc}>{question}</p>
            <button onClick={toggleDisplay} className={styles.more}>
                Answer
            </button>
            {show ? <div className={styles.answer}>{answer}</div> : null}
        </div>
    );
};

export default Tooltip;
