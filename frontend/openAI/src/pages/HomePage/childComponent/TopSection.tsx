import styles from "../homePage.module.css";
export default function TopSection() {
  return (
    <div className={styles.topSectionContainer}>
      <div className={styles.logoSection}>
        <img src="/foto/AILogo.png" alt="" />
      </div>
      <div className={styles.textLogo}>
        <p> AI Assistant</p>
        <p> Chat Assistant</p>
      </div>
    </div>
  );
}
