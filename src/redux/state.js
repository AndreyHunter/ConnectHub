const state = {
    messagesPage: {
        messages: [
            {
                id: 1, 
                message: 'Hello! How is going?'
            },
            {
                id: 2, 
                message: 'Yooou'
            },
            {
                id: 3, 
                message: 'I think it"s a good idea!'
            },
            {
                id: 4, 
                message: 'LOOOOL!'
            }
        ],
        users: [
            {
                id: 1,
                title: 'Vladimir',
                message: 'Вречера я туда сходил и...',
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg'
            },
            {
                id: 2,
                title: 'Dasha',
                message: 'Го сходим прогулятся?',
                image: 'https://w7.pngwing.com/pngs/1022/853/png-transparent-girl-lady-user-woman-famous-character-vol-colored-icon.png'
            },
            {
                id: 3,
                title: 'Alex',
                message: 'Знаешь, ты наверно прав...',
                image: 'https://i1.sndcdn.com/avatars-000692052683-rldagd-t240x240.jpg'
            }
        ],
    },
    profilePage: {
        posts: [
            {
                id: 1,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                message: 'Hey, why nobody love me?',
                likes: 12
            },
            {
                id: 2,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                message: 'it"s out new Program! Hey!',
                likes: 7
            },
            {
                id: 3,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                message: 'Today im going to cinema!',
                likes: 4
            }
        ]
    }
}

export default state