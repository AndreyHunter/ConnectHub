import { USER_FETCH_START, USER_FETCH_SUCCESS, USER_FETCH_ERROR } from './userProfile-actions';

const initialState = {
    profile: null,
    isLoading: false,
    error: null,
};

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_START:
            return { ...state, isLoading: true };
        case USER_FETCH_SUCCESS:
            return { ...state, isLoading: false, profile: action.payload };
        case USER_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default userProfileReducer;
