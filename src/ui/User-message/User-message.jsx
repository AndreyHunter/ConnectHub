import { NavLink } from 'react-router-dom';

import styles from './User-message.module.scss';

const UserMessage = ({ image, message }) => {
    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <NavLink to="1">
                    <img src={image} alt="user" />
                </NavLink>
            </div>
            <p className={styles.message}>
                {message}
                <svg className="svg-appendix" width="9" height="20">
                    <defs>
                        <filter
                            x="-50%"
                            y="-14.7%"
                            width="200%"
                            height="141.2%"
                            filterUnits="objectBoundingBox"
                            id="composerAppendix">
                            <feOffset
                                dy="1"
                                in="SourceAlpha"
                                result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur
                                stdDeviation="1"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                            fillRule="#000"
                            filter="url(#composerAppendix)"></path>
                        <path
                            d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                            fill="#FFF"
                            className="corner"></path>
                    </g>
                </svg>
            </p>
        </li>
    );
};

export default UserMessage;
