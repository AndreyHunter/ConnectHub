import { useState } from 'react';

import styles from './Shared-button.module.scss';

const SharedButton = () => {
    const [isActive, SetIsActive] = useState(false);

    const onToggleState = () => {
        SetIsActive(!isActive);
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={onToggleState} className={styles.btn}>
                <img
                    className={styles.img}
                    src="https://www.svgrepo.com/show/451571/emblem-shared.svg"
                    alt="Shared-button"
                />
            </button>
            {isActive && (
                <div className={styles.shared}>
                    <img
                        src="https://www.svgrepo.com/show/303292/telegram-logo.svg"
                        alt="telegram"
                        className={styles.sosial}
                    />
                    <img
                        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                        alt="facebook"
                        className={styles.sosial}
                    />
                    <img
                        src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                        alt="instagram"
                        className={styles.sosial}
                    />
                </div>
            )}
        </div>
    );
};

export default SharedButton;
