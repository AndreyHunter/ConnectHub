import messagesReducer from "./Reducers/messages-reducer"
import profileReducer from "./Reducers/profile-reducer"

const store = {
    _state: {
        messagesPage: {
            messages: [
                
            ],
            users: [
                {
                    id: 1,
                    name: 'Vladimir',
                    message: 'Вречера я туда сходил и...',
                    image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg'
                },
                {
                    id: 2,
                    name: 'Dasha',
                    message: 'Го сходим прогулятся?',
                    image: 'https://w7.pngwing.com/pngs/1022/853/png-transparent-girl-lady-user-woman-famous-character-vol-colored-icon.png'
                },
                {
                    id: 3,
                    name: 'Alex',
                    message: 'Знаешь, ты наверно прав...',
                    image: 'https://i1.sndcdn.com/avatars-000692052683-rldagd-t240x240.jpg'
                }
            ],
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hey, why nobody love me?',
                    image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                    likes: 12,
                    reposts: 5
                },
                {
                    id: 2,
                    message: 'it"s out new Program! Hey!',
                    image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                    likes: 7,
                    reposts: 0
                },
                {
                    id: 3,
                    message: 'Today im going to cinema!',
                    image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                    likes: 4,
                    reposts: 2
                }
            ],
        },
        friends: [
            {
                id: 1,
                name: 'Vladimir',
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg'
            },
            {
                id: 2,
                name: 'Dasha',
                image: 'https://w7.pngwing.com/pngs/1022/853/png-transparent-girl-lady-user-woman-famous-character-vol-colored-icon.png'
            },
            {
                id: 3,
                name: 'Alex',
                image: 'https://i1.sndcdn.com/avatars-000692052683-rldagd-t240x240.jpg'
            },
            {
                id: 4,
                name: 'Pasha',
                image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            },
            {
                id: 5,
                name: 'Yaroslav',
                image: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
            },{
                id: 6,
                name: 'Dima',
                image: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
            },{
                id: 7,
                name: 'Dan',
                image: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
            },{
                id: 8,
                name: 'Sanya',
                image: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
            },{
                id: 9,
                name: 'Andrey',
                image: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
            },
        ]
    },

    _subscriber() {
        console.log('No one subscibers')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._subscriber()
    }
    
}

export default store