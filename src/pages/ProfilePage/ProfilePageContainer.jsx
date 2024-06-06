import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileInfo } from '../../store/profile/profile-actions';
import { ProfilePage } from './ProfilePage';

const ProfilePageContainer = () => {
    const profile = useSelector((state) => state.profile.profile);
    const dispatch = useDispatch();

    const myProfileId = 1;

    useEffect(() => {
        dispatch(getProfileInfo(myProfileId));
    }, [dispatch]);

    return <ProfilePage profile={profile} />;
};

export { ProfilePageContainer };
