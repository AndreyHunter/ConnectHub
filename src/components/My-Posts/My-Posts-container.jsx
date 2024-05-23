import { connect } from 'react-redux';

import {
    toggleLikeAction,
    addPostAction,
    deletePostAction,
    editPostAction,
    setPostTextAction,
} from '../../store/posts/posts-actions';

import MyPosts from './My-Posts';

const postsProps = (state) => {
    return {
        posts: state.posts.posts,
        postText: state.posts.postText,
    };
};

const mapDispatchToProps = {
    addPost: addPostAction,
    deletePost: deletePostAction,
    editPost: editPostAction,
    setPostText: setPostTextAction,
    toggleLike: toggleLikeAction,
};

export default connect(postsProps, mapDispatchToProps)(MyPosts);
