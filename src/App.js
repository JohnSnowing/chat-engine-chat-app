import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="2822b1d6-a6ab-4dea-8e4f-148904244b1e"
            userName="Cooper"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
