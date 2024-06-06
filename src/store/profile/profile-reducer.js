import { PROFILE_FETCH_START, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_ERROR } from './profile-actions';

const initialState = {
    profile: null,
    isLoading: false,
    error: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_FETCH_START:
            return { ...state, isLoading: true };
        case PROFILE_FETCH_SUCCESS:
            return { ...state, isLoading: false, profile: action.payload };
        case PROFILE_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default profileReducer;
