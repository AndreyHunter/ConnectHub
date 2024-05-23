import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUser } from '../../store/userProfile/userProfile-actions';

import UserProfile from './UserProfile';

const UserProfileContainer = () => {
    const { id } = useParams();

    const profile = useSelector((state) => state.userProfile.profile);
    const isLoading = useSelector((state) => state.userProfile.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(+id));
    }, [id, dispatch]);

    return <UserProfile profile={profile} isLoading={isLoading}/>;
};

export default UserProfileContainer;
