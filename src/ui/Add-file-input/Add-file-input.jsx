import { MdAttachFile } from "react-icons/md";

import styles from './Add-file-input.module.scss'

const AddFileInput = ({value, onChange}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor="fileInput" className={styles.fileIcon}>
                <MdAttachFile/>
            </label>
            <input
                type="file" 
                id='fileInput'
                value={value}
                onChange={onChange}
                className={styles.fileInput}
            />
        </div>
    )

}

export default AddFileInput