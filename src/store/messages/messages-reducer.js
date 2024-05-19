import { ADD_MESSAGE, SET_MESSAGE_TEXT, SET_FILE_PATH } from './messages-actions';

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
