import styles from "../homePage.module.css";

interface PropsType {
  handleDeleteSms: () => void;
}

export default function DeleteButton({ handleDeleteSms }: PropsType) {
  return (
    <div className={styles.createNewChatContainer}>
      <button onClick={handleDeleteSms}> create new chat </button>
    </div>
  );
}
