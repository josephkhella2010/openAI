import styles from "../homePage.module.css";
export default function LoadingSection() {
  return (
    <div className={styles.LoadingCircleContainer}>
      <div className={styles.LoadingCircle}></div>
      <div className={styles.LoadingCircle}></div>
      <div className={styles.LoadingCircle}></div>
    </div>
  );
}
