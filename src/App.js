import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const projectID = "2822b1d6-a6ab-4dea-8e4f-148904244b1e";
const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            projectID={projectID}
            onNewMessage={() =>
                new Audio(
                    "https://chat-engine-assets.s3.amazonaws.com/click.mp3",
                ).play()
            }
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
