export const ADD_MESSAGE = 'ADD-MESSAGE';
export const SET_MESSAGE_TEXT = 'SET-MESSAGE-TEXT';
export const SET_FILE_PATH = 'SET-FILE-PATH';

export const addMessageAction = (message, filePath) => ({
    type: ADD_MESSAGE,
    message: message,
    filePath: filePath,
});

export const setMessageTextAction = (message) => ({ type: SET_MESSAGE_TEXT, message: message });
export const setFilePathAction = (filePath) => ({ type: SET_FILE_PATH, filePath: filePath });
