import { useSelector } from "react-redux";
import styles from "../homePage.module.css";
import type { RootState } from "../../../store/Store";

export default function AIChatMessages() {
  const { messages } = useSelector((state: RootState) => state.messageStore);
  return (
    <>
      {messages &&
        messages.map((chat, index) => {
          return (
            <div className={styles.aiMessagesContainer} key={index}>
              <div className={styles.aiMessagesSection}>
                <img src="/foto/AIChat.png" alt="" />
                <p>{chat.AiChat} </p>
              </div>
            </div>
          );
        })}
    </>
  );
}
