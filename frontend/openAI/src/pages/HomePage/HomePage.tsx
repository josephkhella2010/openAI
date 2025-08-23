import { useDispatch, useSelector } from "react-redux";
import StartConversation from "./childComponent/StartConversation";
import TopSection from "./childComponent/TopSection";
import UserInput from "./childComponent/UserInput";
import UserMessage from "./childComponent/UserMessage";
import styles from "./homePage.module.css";
import type { RootState } from "../../store/Store";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import axios from "axios";
import { setAddMessagesChat } from "../../sliceRedux/ChatMessageSlice";

export default function HomePage() {
  const { messages } = useSelector((state: RootState) => state.messageStore);
  const [userSmsInput, setUserSmsInput] = useState<string>("");
  const dispatch = useDispatch();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  /*  function  */
  async function handleAddUserSms() {
    try {
      if (!userSmsInput) {
        toast.error("please type your question");
        return;
      }
      dispatch(
        setAddMessagesChat({
          text: userSmsInput,
          sender: "user",
          isLoading: true,
        })
      );
      const aiData = await getAnswerFromAI();
      dispatch(
        setAddMessagesChat({
          text: aiData,
          sender: "ai",
          isLoading: true,
        })
      );

      setUserSmsInput("");
    } catch (error) {
      console.log(error);
    }
  }
  /*  */
  async function getAnswerFromAI() {
    const response = await axios.post(
      "http://localhost:3300/api/postQuestion",
      { AiChat: userSmsInput }
    );
    const responseData = response.data.reply;
    return responseData;
  }
  /*  */
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(messages);
  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.HomePageTop} ref={chatContainerRef}>
        <ToastContainer />
        <TopSection />
        {messages.length < 2 && <StartConversation />}
        {/*         <AIChatMessages />
         */}{" "}
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
