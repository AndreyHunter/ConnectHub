import UserCard from '../../components/UserCard/UserCard';
import PaginationButtons from '../../ui/PaginationButtons/PaginationButtons';
import PreLoader from '../../ui/CustomLoader/CustomLoader';

import styles from './Users.module.scss';

const Users = ({
    users,
    followHandler,
    changePageHandler,
    pagesLength,
    currentPage,
    pageSize,
    isLoading,
    error,
}) => {
    return (
        <section>
            <h2 className={styles.title}>Users</h2>

            {error && <div>{error}</div>}

            <section className={styles.wrapp}>
                <ul className={styles.list}>
                    {users &&
                        users.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                followHandler={() => followHandler(user.id)}
                            />
                        ))}
                </ul>

                {isLoading && (
                    <div className={styles.loader}>
                        <PreLoader />
                    </div>
                )}
            </section>

            <PaginationButtons
                pages={pagesLength}
                currentPage={currentPage}
                pageSize={pageSize}
                changePageHandler={changePageHandler}
            />
        </section>
    );
};

export default Users;
