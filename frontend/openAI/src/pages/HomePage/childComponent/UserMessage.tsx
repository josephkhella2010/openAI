import styles from "../homePage.module.css";

export default function UserMessage() {
  return (
    <div className={styles.UserMessageContainer}>
      <div className={styles.UserMessageSection}>
        <img src="/foto/AIChat.png" alt="" />
        <p>Hi i am okej</p>
      </div>
    </div>
  );
}
