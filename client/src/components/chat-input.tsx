import userChatAtom from "@/state/userChatAtom";
import { IconButton, Group, Input } from "@chakra-ui/react"
import { IoIosSend } from "react-icons/io";
import { useAtomValue } from "jotai";

export const ChatInput = () => {
  const userChat = useAtomValue(userChatAtom)

  return (
    <Group rounded='full' paddingX='2' paddingY='1' border="1px solid black">
      <Input border='none' focusRing='none' placeholder="Ask anything!" value={userChat} />

      <IconButton variant='solid' rounded="full">
        <IoIosSend />
      </IconButton>
    </Group>
  )
}


