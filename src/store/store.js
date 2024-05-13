import messagesReducer from './Reducers/messages-reducer';
import profileReducer from './Reducers/profile-reducer';

const store = {
    _state: {},

    _subscriber() {
        console.log('No one subscibers');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        this._subscriber();
    },
};

export default store;
