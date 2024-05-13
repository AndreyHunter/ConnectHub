const initialState = {
    users: [
        {
            id: 1,
            name: 'Vladimir',
            message: 'Вречера я туда сходил и...',
            image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
        },
        {
            id: 2,
            name: 'Dasha',
            message: 'Го сходим прогулятся?',
            image: 'https://w7.pngwing.com/pngs/1022/853/png-transparent-girl-lady-user-woman-famous-character-vol-colored-icon.png',
        },
        {
            id: 3,
            name: 'Alex',
            message: 'Знаешь, ты наверно прав...',
            image: 'https://i1.sndcdn.com/avatars-000692052683-rldagd-t240x240.jpg',
        },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dialogsReducer;
