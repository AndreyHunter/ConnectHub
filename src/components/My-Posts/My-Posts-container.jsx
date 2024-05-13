import { connect } from 'react-redux';

import {
    toggleLikeAction,
    addPostAction,
    deletePostAction,
    editPostAction,
    setPostTextAction,
} from '../../store/Reducers/profile-reducer';

import MyPosts from './My-Posts';

const postsProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
    };
};

const callbacks = (dispatch) => {
    const deletePost = (id) => {
        dispatch(deletePostAction(id));
    };

    const editPost = (id, value) => {
        if (!value) return;
        dispatch(editPostAction(id, value));
    };

    const addPost = (text) => {
        dispatch(addPostAction(text));
    };

    const toggleLike = (id) => dispatch(toggleLikeAction(id));

    const setPostText = (text) => {
        dispatch(setPostTextAction(text));
    };

    return {
        addPost: addPost,
        deletePost: deletePost,
        editPost: editPost,
        setPostText: setPostText,
        toggleLike: toggleLike,
    };
};

const MyPostsContainer = connect(postsProps, callbacks)(MyPosts);

export default MyPostsContainer;
