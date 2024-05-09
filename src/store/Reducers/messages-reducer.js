const ADD_MESSAGE = 'ADD-MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                id: performance.now(),
                message: action.message,
                file: action.filePath,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
            };
            state.messages = [...state.messages, message];
            break;
        default:
            return state;
    }

    return state;
};

export default messagesReducer;
