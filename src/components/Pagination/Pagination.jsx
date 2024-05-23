import styles from './Pagination.module.scss';

const Pagination = ({ pages, currentPage, pageSize, changePageHandler }) => {
    const total = pages.length;

    const renderPages = () => {
        const maxVisiblePages = 5;
        const delta = 2;
        const pagination = [];

        const startRange = Math.max(currentPage - delta, 1);
        const endRange = Math.min(currentPage + delta, total);

        if (pages <= maxVisiblePages) {
            return pages;
        }

        if (startRange > 1) {
            pagination.push(1);
            if (startRange > 2) {
                pagination.push('...');
            }
        }

        for (let i = startRange; i <= endRange; i++) {
            pagination.push(i);
        }

        if (endRange < total) {
            if (endRange < total - 1) {
                pagination.push('...');
            }
            pagination.push(total);
        }

        return pagination;
    };

    return (
        <ul className={styles.list}>
            {renderPages().map((page, index) => {
                const isCurrent = page === currentPage;
                const isDots = page === '...';
                const clazz = `${styles.item} ${isCurrent ? styles.active : ''} ${isDots ? styles.dots : ''}`;

                return (
                    <li
                        key={index}
                        className={clazz}
                        onClick={!isDots ? () => changePageHandler(page, pageSize) : null}>
                        {page}
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
