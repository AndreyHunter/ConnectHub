import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    fetchUsersErrorAc,
    fetchUsersStartAc,
    fetchUsersSuccesAc,
    setCurrentPageAction,
    setPagesCountAction,
    setTotalUsersCountAction,
    toggleFollowAction,
} from '../../store/users/users-actions';

import Users from './Users';

const BASE_URL = 'http://localhost:3001/users';

class UsersContainer extends Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    calcPagesCount = () => {
        const pages = Math.ceil(this.props.usersLength / this.props.pageSize);

        const pagesLength = [];

        for (let i = 1; i <= pages; i++) {
            pagesLength.push(i);
        }

        return pagesLength;
    };

    render() {
        const { isLoading, error } = this.props;
        const { users, followHandler, currentPage, pageSize, changePageHandler } = this.props;

        return (
            <Users
                users={users}
                followHandler={followHandler}
                changePageHandler={changePageHandler}
                currentPage={currentPage}
                pagesLength={this.calcPagesCount()}
                pageSize={pageSize}
                isLoading={isLoading}
                error={error}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersLength: state.usersPage.usersLength,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        // pages: state.usersPage.pages,
        isLoading: state.usersPage.isLoading,
        error: state.usersPage.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getUsers = async (page, perPage) => {
        dispatch(fetchUsersStartAc());
        try {
            const res = await axios.get(`${BASE_URL}/?_page=${page}&_per_page=${perPage}`);
            dispatch(fetchUsersSuccesAc(res.data.data));
            dispatch(setTotalUsersCountAction(res.data.items));
        } catch (error) {
            dispatch(fetchUsersErrorAc('ERROR:', error));
        }
    };

    const changePageHandler = (page, perPage) => {
        dispatch(setCurrentPageAction(page));
        getUsers(page, perPage);
    };

    const followHandler = (id) => {
        dispatch(toggleFollowAction(id));
    };

    return {
        getUsers: getUsers,
        followHandler: followHandler,
        changePageHandler: changePageHandler,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
