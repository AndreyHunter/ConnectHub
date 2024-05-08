const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            const post = {
                id: performance.now(),
                message: action.postText,
                image: 'https://i1.sndcdn.com/avatars-000562698696-0ftnrp-t240x240.jpg',
                likes: 0,
                reposts: 0
            }
            state.posts = [...state.posts, post]
            break
        default:
            return state
    }

    return state
}

export default profileReducer