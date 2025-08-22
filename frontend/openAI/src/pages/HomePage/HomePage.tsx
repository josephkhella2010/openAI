import { useDispatch, useSelector } from "react-redux";
import AIChatMessages from "./childComponent/AIChatMessages";
import StartConversation from "./childComponent/StartConversation";
import TopSection from "./childComponent/TopSection";
import UserInput from "./childComponent/UserInput";
import UserMessage from "./childComponent/UserMessage";
import styles from "./homePage.module.css";
import type { RootState } from "../../store/Store";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { setAddUserChat, setUserChat } from "../../sliceRedux/ChatMessageSlice";
import type { UserChatType } from "../../helps/interfaceType";

export default function HomePage() {
  const { AiChat, userChat, isLoading } = useSelector(
    (state: RootState) => state.messageStore
  );
  console.log(AiChat, userChat, isLoading);
  const [userSmsInput, setUserSmsInput] = useState<string>("");
  const dispatch = useDispatch();
  function handleAddUserSms() {
    try {
      if (!userSmsInput) {
        toast.error("please type your question");
        return;
      }
      dispatch(setAddUserChat({ userMessage: userSmsInput }));
      const newSMS: UserChatType[] = [
        ...userChat,
        { userMessage: userSmsInput },
      ];
      dispatch(setUserChat(newSMS)); // ✅ correct
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userChat[0]?.userMessage); // "Hello"

  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.HomePageTop}>
        <TopSection />
        <StartConversation />
        <AIChatMessages />
        <UserMessage />
      </div>
      <UserInput
        userSmsInput={userSmsInput}
        setUserSmsInput={setUserSmsInput}
        handleAddUserSms={handleAddUserSms}
      />
    </div>
  );
}
