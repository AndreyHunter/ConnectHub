const FETCH_USERS = 'FETCH-USERS';
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';

export const fetchUsersAc = (users) => {
    return { type: FETCH_USERS, users: users };
};

export const toggleFollowAction = (id) => {
    return { type: TOGGLE_FOLLOW, id: id };
};

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.users,
            };
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, isFollow: !user.isFollow };
                    }
                    return user;
                }),
            };
        default:
            return state;
    }
};

export default usersReducer;
