import { useDispatch, useSelector } from 'react-redux';
import Chat from './Chat';
import {
    addMessageAction,
    setFilePathAction,
    setMessageTextAction,
} from '../../store/Reducers/messages-reducer';

const ChatContainer = () => {
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs.users);
    const messages = useSelector((state) => state.messagesPage.messages);

    const messageText = useSelector((state) => state.messagesPage.messageText);
    const filePath = useSelector((state) => state.messagesPage.filePath);

    const setMessageText = (text) => {
        dispatch(setMessageTextAction(text));
    };

    const setFilePath = (filePath) => {
        dispatch(setFilePathAction(filePath));
    };

    const addMessage = (message, file) => {
        dispatch(addMessageAction(message, file));
    };

    return (
        <Chat
            dialogs={dialogs}
            messages={messages}
            addMessage={addMessage}
            messageText={messageText}
            filePath={filePath}
            setMessageText={setMessageText}
            setFilePath={setFilePath}
        />
    );
};

export default ChatContainer;
