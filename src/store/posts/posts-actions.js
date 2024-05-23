export const ADD_POST = 'ADD-POST';
export const DELETE_POST = 'DELETE-POST';
export const EDIT_POST = 'EDIT-POST';
export const SET_POST_TEXT = 'SET-POST-TEXT';
export const TOGGLE_LIKE = 'ADD-LIKE';

export const addPostAction = (postText) => ({ type: ADD_POST, postText: postText });
export const deletePostAction = (id) => ({ type: DELETE_POST, id });
export const editPostAction = (id, value) => ({ type: EDIT_POST, id, message: value });
export const setPostTextAction = (text) => ({ type: SET_POST_TEXT, text: text });
export const toggleLikeAction = (id) => ({ type: TOGGLE_LIKE, id: id });
