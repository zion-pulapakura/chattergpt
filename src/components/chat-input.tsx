import { IconButton, Group, Input } from "@chakra-ui/react"
import { IoIosSend } from "react-icons/io";

export const ChatInput = () => {
  return (
    <Group rounded='full' paddingX='2' paddingY='1' border="1px solid black">
      <Input border='none' focusRing='none' placeholder="Ask anything!" >

      </Input>
      <IconButton variant='solid' rounded="full">
        <IoIosSend />
      </IconButton>
    </Group>
  )
}


