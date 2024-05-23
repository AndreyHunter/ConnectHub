import axios from 'axios';

const BASE_URL = 'http://localhost:3001/users';

export const FETCH_USERS_START = 'FETCH-USERS-START';
export const FETCH_USERS_ERROR = 'FETCH-USERS-ERROR';
export const FETCH_USERS_SUCCESS = 'FETCH-USERS-SUCCESS';
export const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const SET_PAGES_COUNT = 'SET_PAGES_COUNT';

export const fetchUsersStartAc = () => {
    return { type: FETCH_USERS_START };
};

export const fetchUsersSuccesAc = (users) => {
    return { type: FETCH_USERS_SUCCESS, users: users };
};

export const fetchUsersErrorAc = (error) => {
    return { type: FETCH_USERS_ERROR, payload: error };
};

export const toggleFollowAc = (id) => {
    return { type: TOGGLE_FOLLOW, id: id };
};

export const setCurrentPageAction = (page) => {
    return { type: SET_CURRENT_PAGE, payload: page };
};

export const setTotalUsersCountAction = (usersLength) => {
    return { type: SET_TOTAL_USERS_COUNT, payload: usersLength };
};

export const setPagesCountAction = (pages) => {
    return { type: SET_PAGES_COUNT, payload: pages };
};

export const getUsers = (page, perPage) => {
    return async (dispatch) => {
        dispatch(fetchUsersStartAc());
        try {
            const res = await axios.get(`${BASE_URL}/?_page=${page}&_per_page=${perPage}`);
            dispatch(fetchUsersSuccesAc(res.data.data));
            dispatch(setPagesCountAction(res.data.pages));
            dispatch(setCurrentPageAction(page));
        } catch (error) {
            dispatch(fetchUsersErrorAc('ERROR:', error));
        }
    };
};
