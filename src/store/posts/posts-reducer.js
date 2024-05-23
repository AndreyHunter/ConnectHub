import { ADD_POST, DELETE_POST, EDIT_POST, SET_POST_TEXT, TOGGLE_LIKE } from './posts-actions';

const initialState = {
    posts: [],
    postText: '',
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const post = {
                id: performance.now(),
                message: action.postText,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                likes: 0,
                isLiked: false,
                reposts: 0,
            };
            return { ...state, posts: [...state.posts, post] };
        }
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
                            return { ...post, likes: post.likes - 1, isLiked: false };
                        }
                        return { ...post, likes: post.likes + 1, isLiked: true };
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

export default postsReducer;
