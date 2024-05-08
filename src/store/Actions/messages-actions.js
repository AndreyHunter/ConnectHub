const ADD_MESSAGE = 'ADD-MESSAGE'



export const addMessageAction = (message, filePath) => ({type: ADD_MESSAGE, message: message, filePath: filePath})