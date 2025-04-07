import { Group } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";
import aiChatStore from "./state/aiChatStore";
import { useEffect } from "react";

function App() {
  const aiChat = aiChatStore((state) => state.aiChat);

  useEffect(() => {
    console.log("changed");
  }, [aiChat]);

  return (
    <Group width="lvw" height="lvh" padding="1.5em" backgroundColor="blue.100">
      <ChatInput />
      <Group width={50} height={50}>
        <h1>{aiChat}</h1>
      </Group>
    </Group>
  );
}

export default App;
