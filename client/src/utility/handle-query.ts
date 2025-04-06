import chatResponseService from "@/services/chat-response-service";
import logChatService from "@/services/log-chat-service";

const handleQuery = async (userChat: string, aiChat: string) => {
  await chatResponseService(userChat);

  logChatService(userChat, "user");
  logChatService(aiChat, "ai");
};

export default handleQuery;
