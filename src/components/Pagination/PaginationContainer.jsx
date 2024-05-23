import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { getUsers, setCurrentPageAction } from '../../store/users/users-actions';

const PaginationContainer = () => {
    const pages = useSelector((state) => state.usersPage.pages);
    const currentPage = useSelector((state) => state.usersPage.currentPage);
    const pageSize = useSelector((state) => state.usersPage.pageSize);
    const dispatch = useDispatch();

    const changePageHandler = (page, perPage) => {
        dispatch(getUsers(page, perPage));
        dispatch(setCurrentPageAction(page));
    };

    const calcPagesCount = () => {
        const pagesLength = [];

        for (let i = 1; i <= pages; i++) {
            pagesLength.push(i);
        }

        return pagesLength;
    };

    return (
        <Pagination
            pages={calcPagesCount(pages)}
            currentPage={currentPage}
            pageSize={pageSize}
            changePageHandler={changePageHandler}
        />
    );
};

export default PaginationContainer;
