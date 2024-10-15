import mongoose from "mongoose";
import { Chat } from "./chat.models";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [Chat],
});

export const User = mongoose.model("User", userSchema);