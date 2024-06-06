import { useDispatch, useSelector } from 'react-redux';
import Chat from './Chat';
import { addMessageAction } from '../../store/messages/messages-actions';

const ChatContainer = () => {
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs.users);
    const messages = useSelector((state) => state.messagesPage.messages);

    const addMessage = (message, file) => {
        dispatch(addMessageAction(message, file));
    };

    return <Chat dialogs={dialogs} messages={messages} addMessage={addMessage} />;
};

export default ChatContainer;
