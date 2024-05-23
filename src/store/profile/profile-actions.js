import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const PROFILE_FETCH_START = 'USER_FETCHING_START';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_ERROR = 'USET_FETCHING_ERROR';

const profileFetchingStart = () => ({ type: PROFILE_FETCH_START });
const profileFetchingSuccess = (user) => ({ type: PROFILE_FETCH_SUCCESS, payload: user });
const profileFetchingError = (error) => ({ type: PROFILE_FETCH_ERROR, payload: error });

export const getProfileInfo = (id) => {
    return async (dispatch) => {
        try {
            dispatch(profileFetchingStart());

            const basicInfo = await axios.get(`${BASE_URL}/users/?id=${id}`);
            const profileInfo = await axios.get(`${BASE_URL}/profiles/?id=${id}`);
            const info = { ...basicInfo.data[0], ...profileInfo.data[0] };

            dispatch(profileFetchingSuccess(info));
        } catch (error) {
            dispatch(profileFetchingError(error));
        }
    };
};
