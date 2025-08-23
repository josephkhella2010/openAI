/* import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AiChatType, UserChatType } from "../helps/interfaceType";
interface initType {
  AiChat: AiChatType[];
  userChat: UserChatType[];
  isLoading: boolean;
}
const initialState: initType = {
  AiChat: [{ AiChat: "Hi there! How are you today? How can I help you?" }],
  userChat: [],
  isLoading: false,
};

const ChatMessageSlice = createSlice({
  name: "ChatMessageSlice",
  initialState,
  reducers: {
    setAiChat: (state, action: PayloadAction<AiChatType[]>) => {
      state.AiChat = action.payload;
    },
    setAddAiChat: (state, action: PayloadAction<AiChatType>) => {
      state.AiChat.push(action.payload);
    },
    setUserChat: (state, action: PayloadAction<UserChatType[]>) => {
      state.userChat = action.payload;
    },
    setAddUserChat: (state, action: PayloadAction<UserChatType>) => {
      state.userChat.push(action.payload);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setAiChat,
  setUserChat,
  setAddAiChat,
  setAddUserChat,
  setIsLoading,
} = ChatMessageSlice.actions;
export default ChatMessageSlice.reducer;
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MessagesType } from "../helps/interfaceType";
interface initType {
  messages: MessagesType[];
  isLoading: boolean;
}
const initialState: initType = {
  messages: [
    {
      text: "Hi there! How are you today? How can I help you?",
      sender: "ai",
    },
  ],
  isLoading: false,
};

const ChatMessageSlice = createSlice({
  name: "ChatMessageSlice",
  initialState,
  reducers: {
    setMessagesChat: (state, action: PayloadAction<MessagesType[]>) => {
      state.messages = action.payload;
    },
    setAddMessagesChat: (state, action: PayloadAction<MessagesType>) => {
      state.messages.push(action.payload);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMessagesChat, setAddMessagesChat, setIsLoading } =
  ChatMessageSlice.actions;
export default ChatMessageSlice.reducer;
