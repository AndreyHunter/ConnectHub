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
    };
};

const mapDispatchToProps = {
    addPost: addPostAction,
    deletePost: deletePostAction,
    editPost: editPostAction,
    toggleLike: toggleLikeAction,
};

export default connect(postsProps, mapDispatchToProps)(MyPosts);
