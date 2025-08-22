import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AiChatType, UserChatType } from "../helps/interfaceType";
interface initType {
  AiChat: AiChatType[];
  userChat: UserChatType[];
  isLoading: boolean;
}
const initialState: initType = {
  AiChat: [],
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
