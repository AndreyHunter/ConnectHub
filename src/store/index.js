import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';
import { thunk } from 'redux-thunk';

import postsReducer from './posts/posts-reducer';
import messagesReducer from './messages/messages-reducer';
import friendsReducer from './Reducers/friends-reducer';
import dialogsReducer from './Reducers/dialogs-reducer';
import usersReducer from './users/users-reducer';
import userProfileReducer from './userProfile/userProfile-reducer';
import profileReducer from './profile/profile-reducer';

const redusers = combineReducers({
    posts: postsReducer,
    messagesPage: messagesReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    userProfile: userProfileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));

export default store;
