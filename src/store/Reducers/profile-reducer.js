const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const EDIT_POST = 'EDIT-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';
const TOGGLE_LIKE = 'ADD-LIKE';

const initialState = {
    posts: [],
    postText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: performance.now(),
                message: action.postText,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                likes: 0,
                isLiked: false,
                reposts: 0,
            };
            return { ...state, posts: [...state.posts, post] };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post.id !== action.id) };
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.id) return { ...post, message: action.message };
                    return post;
                }),
            };
        case TOGGLE_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.id) {
                        if (post.isLiked) {
                            return {...post, likes: post.likes - 1, isLiked: false}
                        }
                        return {...post, likes: post.likes + 1, isLiked: true}
                    }
                    return post;
                }),
            };

        case SET_POST_TEXT:
            return { ...state, postText: action.text };

        default:
            return state;
    }
};

export default profileReducer;

export const addPostAction = (postText) => ({ type: ADD_POST, postText: postText });
export const deletePostAction = (id) => ({ type: DELETE_POST, id });
export const editPostAction = (id, value) => ({ type: EDIT_POST, id, message: value });
export const setPostTextAction = (text) => ({ type: SET_POST_TEXT, text: text });
export const toggleLikeAction = (id) => ({ type: TOGGLE_LIKE, id: id });