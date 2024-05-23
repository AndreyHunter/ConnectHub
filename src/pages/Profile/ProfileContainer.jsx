import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileInfo } from '../../store/profile/profile-actions';
import Profile from './Profile';

const ProfileContainer = () => {
    const profile = useSelector((state) => state.profile.profile);
    const isLoading = useSelector((state) => state.profile.isLoading);
    const dispatch = useDispatch();

    const myProfileId = 1;

    useEffect(() => {
        dispatch(getProfileInfo(myProfileId));
    }, [dispatch]);

    return <Profile profile={profile} isLoading={isLoading}/>;
};

export default ProfileContainer;
