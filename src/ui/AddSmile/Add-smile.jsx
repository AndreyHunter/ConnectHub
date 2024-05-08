import { FaRegSmile } from "react-icons/fa";
import smiles from './smiles'

import styles from './Add-smile.module.scss'
import { useState, useEffect, useRef } from 'react'

const AddSmile = ({onSmileSelect}) => {
    const [showSmiles, setShowSmiles] = useState(false)
    const smileRef = useRef(null)

    const setSmile = () => {
        setShowSmiles(!showSmiles)
    }

    const handleSmileSelect = (smile) => {
        onSmileSelect(smile)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (smileRef.current && !smileRef.current.contains(event.target)) {
                setShowSmiles(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
       <div className={styles.wrapper}>
            <button type="button" className={styles.smileBtn} onClick={setSmile}>
                <FaRegSmile/>
            </button>
            {showSmiles &&
                <ul className={styles.list} ref={smileRef}>
                    {smiles.map((smile, index) => (
                        <span 
                            key={index} 
                            onClick={() => handleSmileSelect(smile)} 
                            className={styles.smile}>
                            {smile}
                        </span>
                    ))}
                </ul>
            }
       </div>
    )
}

export default AddSmile