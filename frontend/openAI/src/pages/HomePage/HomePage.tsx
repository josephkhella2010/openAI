/* import { useDispatch, useSelector } from "react-redux";
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
import {
  setAddMessagesChat,
  setIsLoading,
} from "../../sliceRedux/ChatMessageSlice";
import LoadingSection from "./childComponent/LoadingSection";

export default function HomePage() {
  const { messages, isLoading } = useSelector(
    (state: RootState) => state.messageStore
  );
  const [userSmsInput, setUserSmsInput] = useState<string>("");
  const dispatch = useDispatch();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  async function handleAddUserSms() {
    const aiData = await getAnswerFromAI();

    try {
      if (!userSmsInput) {
        toast.error("please type your question");
        return;
      }
      dispatch(setIsLoading(true));

      dispatch(
        setAddMessagesChat({
          text: userSmsInput,
          sender: "user",
        })
      );
      dispatch(
        setAddMessagesChat({
          text: aiData,
          sender: "ai",
        })
      );

      setUserSmsInput("");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }
  async function getAnswerFromAI() {
    const response = await axios.post(
      "http://localhost:3300/api/postQuestion",
      { AiChat: userSmsInput }
    );
    const responseData = response.data.reply;
    return responseData;
  }
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(messages, isLoading);
  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.HomePageTop} ref={chatContainerRef}>
        <ToastContainer />
        <TopSection />
        {messages.length < 2 && <StartConversation />}
        <UserMessage />
        {isLoading && <LoadingSection />}
      </div>
      <UserInput
        userSmsInput={userSmsInput}
        setUserSmsInput={setUserSmsInput}
        handleAddUserSms={handleAddUserSms}
      />
    </div>
  );
}
 */

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
import {
  setAddMessagesChat,
  setIsLoading,
  setMessagesChat,
} from "../../sliceRedux/ChatMessageSlice";
import LoadingSection from "./childComponent/LoadingSection";
import type { MessagesType } from "../../helps/interfaceType";
import DeleteButton from "./childComponent/DeleteButton";

export default function HomePage() {
  const { messages, isLoading } = useSelector(
    (state: RootState) => state.messageStore
  );
  const [userSmsInput, setUserSmsInput] = useState<string>("");
  const dispatch = useDispatch();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  /*  function  */
  async function handleAddUserSms() {
    const aiData = await getAnswerFromAI();

    try {
      if (!userSmsInput) {
        toast.error("please type your question");
        return;
      }
      dispatch(setIsLoading(true));

      dispatch(
        setAddMessagesChat({
          text: userSmsInput,
          sender: "user",
        })
      );
      dispatch(
        setAddMessagesChat({
          text: aiData,
          sender: "ai",
        })
      );

      setUserSmsInput("");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
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
  async function getMessages() {
    try {
      const response = await axios.get("http://localhost:3300/api/messages");
      const responseData = response.data as MessagesType[]; // ✅ cast to array

      dispatch(
        setMessagesChat([
          {
            text: "Hi there! How are you today? How can I help you?",
            sender: "ai",
          }, // 👈 default greeting
          ...responseData, // 👈 fetched messages
        ])
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMessages();
  }, []);
  /*  */
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(messages, isLoading);
  /*  */
  async function handleDeleteSms() {
    try {
      const deleteChat = await axios.delete(
        "http://localhost:3300/api/deleteChat"
      );
      getMessages();

      if (deleteChat) {
        toast.success("all previous chat deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*  */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddUserSms();
    }
  };

  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.HomePageTop} ref={chatContainerRef}>
        <ToastContainer />
        <TopSection />
        {messages.length < 2 && <StartConversation />}
        {messages.length > 2 && (
          <DeleteButton handleDeleteSms={handleDeleteSms} />
        )}
        <UserMessage />
        {isLoading && <LoadingSection />}
      </div>
      <UserInput
        userSmsInput={userSmsInput}
        setUserSmsInput={setUserSmsInput}
        handleAddUserSms={handleAddUserSms}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
}
