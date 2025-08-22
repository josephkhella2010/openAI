import styles from "../homePage.module.css";

export default function AIChatMessages() {
  return (
    <div className={styles.aiMessagesContainer}>
      <div className={styles.aiMessagesSection}>
        <img src="/foto/AIChat.png" alt="" />
        <p>Hi THere how are you today ? how i can help you </p>
      </div>
    </div>
  );
}
