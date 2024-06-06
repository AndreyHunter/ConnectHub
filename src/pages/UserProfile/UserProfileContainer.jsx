import { connect, useDispatch, useSelector } from 'react-redux';
import { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from './../../utils/WithRouter';
import { getUser } from '../../store/userProfile/userProfile-actions';

import UserProfile from './UserProfile';

// const UserProfileContainer = () => {
//     const { id } = useParams();
//     const profile = useSelector((state) => state.userProfile.profile);
//     const isLoading = useSelector((state) => state.userProfile.isLoading);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getUser(+id));
//     }, [id, dispatch]);

//     return <UserProfile profile={profile} isLoading={isLoading} />;
// };

class UserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.userId = this.props.router.params.id;
    }

    componentDidMount() {
        this.props.getUser(this.userId);
    }

    render() {
        const { profile, isLoading } = this.props;
        return <UserProfile profile={profile} isLoading={isLoading} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.userProfile.profile,
    isLoading: state.userProfile.isLoading,
});

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfileContainer));
