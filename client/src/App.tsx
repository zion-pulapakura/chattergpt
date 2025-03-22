import { Group } from "@chakra-ui/react"
import { ChatInput } from "./components/chat-input"

function App() {
  return (
    <Group width='lvw' height='lvh' padding='1.5em' backgroundColor='blue.100'>
      <ChatInput />
    </Group>
  )
}

export default App
