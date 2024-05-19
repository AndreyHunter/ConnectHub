import styles from './PaginationButtons.module.scss';

const PaginationButtons = ({ pages, currentPage, pageSize, changePageHandler }) => {
    const total = pages.length;

    const renderPages = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        const startPage = Math.max(currentPage - 3, 1);
        const endPage = Math.min(currentPage + 3, total);

        if (total <= maxVisiblePages) {
            pageNumbers.push(...pages);
        } else {
            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push('...');
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < total) {
                if (endPage < total - 1) {
                    pageNumbers.push('...');
                }
                pageNumbers.push(total);
            }
        }

        return pageNumbers;
    };

    const handlePageClick = (page) => {
        if (page === '...') {
            if (currentPage < total / 2) {
                changePageHandler(currentPage + 5, pageSize);
            } else {
                changePageHandler(currentPage - 5, pageSize);
            }
        } else {
            changePageHandler(page, pageSize);
        }
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
                        onClick={!isDots ? () => handlePageClick(page) : null}>
                        {page}
                    </li>
                );
            })}
        </ul>
    );
};

export default PaginationButtons;
