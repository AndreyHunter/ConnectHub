import styles from './Button.module.scss';

const Button = ({ props, children, variant = 'default', width, height }) => {
    const black = variant === 'default';
    const primary = variant === 'primary';
    const orange = variant === 'orange';

    return (
        <button
            {...props}
            className={styles.button}
            style={{
                width,
                height,
                backgroundColor: black ? 'black' : primary ? '#3232c3' : orange ? 'rgb(240, 100, 0)' : null,
                color: black ? 'white' : primary ? 'white' : orange ? 'white' : 'black',
            }}>
            {children}
        </button>
    );
};

export { Button };
