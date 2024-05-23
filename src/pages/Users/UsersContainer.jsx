import { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, toggleFollowAc } from '../../store/users/users-actions';

import Users from './Users';

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.currentPage = props.currentPage;
        this.pageSize = props.pageSize;
        this.getUsers = props.getUsers;
    }

    componentDidMount = () => {
        this.getUsers(this.currentPage, this.pageSize);
    };

    render() {
        const { users, followHandler, isLoading, error } = this.props;

        return (
            <Users
                users={users}
                followHandler={followHandler}
                isLoading={isLoading}
                error={error}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        error: state.usersPage.error,
    };
};

const mapDispatchToProps = {
    getUsers,
    followHandler: toggleFollowAc,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
