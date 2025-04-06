import mongoose from "mongoose";
const { Schema, model } = mongoose;
const chatSchema = new Schema({
    type: String,
    text: String,
});
const Chat = model("Chat", chatSchema);
export default Chat;
