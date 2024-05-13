const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_MESSAGE_TEXT = 'SET-MESSAGE-TEXT';
const SET_FILE_PATH = 'SET-FILE-PATH';

const initialState = {
    messages: [],
    messageText: '',
    filePath: '',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const message = {
                id: performance.now(),
                message: action.message,
                file: action.filePath,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
            };
            return { ...state, messages: [...state.messages, message] };
        }
        case SET_MESSAGE_TEXT:
            return { ...state, messageText: action.message };
        case SET_FILE_PATH:
            return { ...state, filePath: action.filePath };
        default:
            return state;
    }
};

export default messagesReducer;

export const addMessageAction = (message, filePath) => ({
    type: ADD_MESSAGE,
    message: message,
    filePath: filePath,
});

export const setMessageTextAction = (message) => ({ type: SET_MESSAGE_TEXT, message: message });
export const setFilePathAction = (filePath) => ({ type: SET_FILE_PATH, filePath: filePath });
