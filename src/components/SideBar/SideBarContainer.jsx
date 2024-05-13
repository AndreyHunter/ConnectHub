import { useSelector } from 'react-redux';
import SideBar from './SideBar';

const SideBarContainer = () => {
    const friends = useSelector((state) => state.friends);
    return <SideBar friends={friends} />;
};

export default SideBarContainer;
