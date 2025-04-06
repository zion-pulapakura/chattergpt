import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chatSchema = new Schema({
  type: String,
  text: String,
});

const Chat = model("Blog", chatSchema);
export default Chat;
