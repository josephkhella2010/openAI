import { AiOutlineMessage } from "react-icons/ai";
import styles from "../homePage.module.css";
export default function StartConversation() {
  return (
    <div className={styles.startConversationContainer}>
      <div className={styles.startConversationSection}>
        <AiOutlineMessage className={styles.startConversationIcon} />
        <p> Start a conversation </p>
        <p> Ask me anything! </p>
      </div>
    </div>
  );
}
