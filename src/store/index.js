import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import profileReducer from './profile/profile-reducer';
import messagesReducer from './messages/messages-reducer';
import friendsReducer from './Reducers/friends-reducer';
import dialogsReducer from './Reducers/dialogs-reducer';
import usersReducer from './users/users-reducer';

const redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
});

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
