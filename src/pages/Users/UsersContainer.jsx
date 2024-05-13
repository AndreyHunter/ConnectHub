import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAc, toggleFollowAction } from '../../store/Reducers/users-reducer';
import Users from './Users';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersPage.users);

    if (!users.length) {
        dispatch(fetchUsersAc([
            {
                id: 1,
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
                name: 'Jacob',
                location: {
                    country: 'USA',
                    city: 'Cansas',
                },
                status: 'I am looking for a job right now',
                isFollow: false,
            },
            {
                id: 2,
                avatar: 'https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg',
                name: 'Marry',
                location: {
                    country: 'USA',
                    city: 'New York',
                },
                status: 'I want to go with you',
                isFollow: true,
            },
            {
                id: 3,
                avatar: 'https://i.pinimg.com/736x/e3/3c/52/e33c523872f9be335e8d6b6d8aca73f8.jpg',
                name: 'Jane',
                location: {
                    country: 'Japan',
                    city: 'Tokyo',
                },
                status: 'I like to walk',
                isFollow: false,
            },
        ]))
    }

    const followHandler = (id) => {
        dispatch(toggleFollowAction(id));
    };

    return <Users users={users} followHandler={followHandler} />;
};

export default UsersContainer;
