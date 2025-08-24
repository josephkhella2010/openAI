import { useSelector } from "react-redux";
import styles from "../homePage.module.css";
import type { RootState } from "../../../store/Store";

export default function UserMessage() {
  const { messages } = useSelector((state: RootState) => state.messageStore);
  return (
    <div className={styles.userMassegerWrapper}>
      {messages &&
        messages.map((chat, index) => {
          return (
            <div key={index} className={styles.UserMessageContainer}>
              {chat.text && (
                <div
                  className={`${styles.UserMessageOutContainer} ${
                    chat.sender === "ai"
                      ? styles.aiBackground
                      : styles.userBackground
                  }`}
                  key={index}
                >
                  <div className={styles.UserMessageSection}>
                    <img
                      src={
                        chat.sender === "ai"
                          ? "/foto/AIChat.png"
                          : "/foto/user.png"
                      }
                      alt=""
                    />
                    <p>{chat.text}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
