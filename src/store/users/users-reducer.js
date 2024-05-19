import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    TOGGLE_FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_PAGES_COUNT,
} from './users-actions';

const initialState = {
    users: [],
    usersLength: 0,
    pageSize: 4,
    currentPage: 1,
    // pages: 0,
    isLoading: false,
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return { ...state, isLoading: true };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.users,
            };
        case FETCH_USERS_ERROR:
            return { ...state, isLoading: false, error: action.payload };
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
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, usersLength: action.payload };
        case SET_PAGES_COUNT:
            return { ...state, pages: action.payload };
        default:
            return state;
    }
};

export default usersReducer;
