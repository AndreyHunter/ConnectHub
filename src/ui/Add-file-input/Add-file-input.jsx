import { MdAttachFile } from 'react-icons/md';

import styles from './Add-file-input.module.scss';

const AddFileInput = ({ setFile }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor="fileInput" className={styles.fileIcon}>
                <MdAttachFile />
            </label>
            <input
                onChange={(e) => setFile(e.target.value)}
                type="file"
                id="fileInput"
                className={styles.fileInput}
            />
        </div>
    );
};

export default AddFileInput;
