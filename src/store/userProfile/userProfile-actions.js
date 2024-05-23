import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const USER_FETCH_START = 'USER_FETCHING_START';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_ERROR = 'USET_FETCHING_ERROR';

const userFetchingStart = () => ({ type: USER_FETCH_START });
const userFetchingSuccess = (user) => ({ type: USER_FETCH_SUCCESS, payload: user });
const userFetchingError = (error) => ({ type: USER_FETCH_ERROR, payload: error });

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(userFetchingStart());

            const basicInfo = await axios.get(`${BASE_URL}/users/?id=${id}`);
            const profileInfo = await axios.get(`${BASE_URL}/profiles/?id=${id}`);
            const info = { ...basicInfo.data[0], ...profileInfo.data[0] };
            dispatch(userFetchingSuccess(info));
        } catch (error) {
            dispatch(userFetchingError(error));
        }
    };
};
