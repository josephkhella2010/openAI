/* export interface AiChatType {
  AiChat: string;
}
export interface UserChatType {
  userMessage: string;
}
export interface LoadingType {
  isLoading: boolean;
}
 */

/*  export interface AiChatType {
  AiChat: string;
}
export interface UserChatType {
  userMessage: string;
} */

export interface MessagesType {
  text: string; // the content
  sender: "user" | "ai"; // who sent it
}
